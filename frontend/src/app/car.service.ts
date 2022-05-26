import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CarService {
  private mercedesURL =
    'https://api.mercedes-benz.com/configurator/v1/markets/es_ES'; // URL to web api
  private backendURL = 'http://localhost:8081/api';
  private api_key = '7d0dc3ac-5237-44e2-b75c-b0d66cc6a391';
  private api_keyOWN = '4c42f347-3571-4aec-9b4e-XX';
  private components: any | undefined;
  car: any = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {}

  getModels(): Observable<any> {
    return this.http.get(`${this.backendURL}/cars`);
  }

  createConfiguration(modelId: Number, modelIdBackend: Number) {
    this.http
      .get(
        `${this.mercedesURL}/models/${modelId}/configurations/initial?apikey=${this.api_key}`,
        this.httpOptions
      )
      .subscribe((resp: any) => {
        this.saveConfiguration(resp._links.selectables, modelIdBackend);
      });
  }

  saveConfiguration(URLconfiguration: String, modelIdBackend: Number) {
    this.http
      .get(`${this.backendURL}/car/${modelIdBackend}`, this.httpOptions)
      .subscribe((resp: any) => {
        this.car.push({
          id: modelIdBackend,
          modelo: resp[0].modelo,
          carroceria: resp[0].carroceria,
          imagen: resp[0].imagen,
        });
        this.http
          .post(
            `${this.backendURL}/configuration`,
            {
              url: URLconfiguration,
              car: {
                id: modelIdBackend,
                modelo: resp[0].modelo,
                carroceria: resp[0].carroceria,
                imagen: resp[0].imagen,
              },
            },
            this.httpOptions
          )
          .subscribe((resp: any) => {});
      });
  }

  getConfigurations(): Observable<any> {
    return this.http.get(`${this.backendURL}/configurations/`);
  }

  //pasar por parámetro respuestaConfigutracion._links.selectables (es la url de la peticion para obtener los componentes que podemos añadir)

  async loadConfiguration(modelId: String) {
    const configuration = await this.http
      .get<any>(
        `${this.mercedesURL}/models/${modelId}/configurations/initial?apikey=${this.api_key}`,
        this.httpOptions
      )
      .toPromise();

    this.components = await this.http
      .get(configuration?._links?.selectables, this.httpOptions)
      .toPromise();

  }

  dropConfiguration() {
    this.components = undefined;
  }

  async getPinturas(modelId: any):  Promise<any[]> {
    await this.loadConfiguration(modelId);

    let paints: any[] = [];
    let pinturasID: any[] = [];
    this.components.componentCategories
      .filter(
        (item: { categoryName: string }) => item.categoryName == 'PAINTS'
      )[0]
      .subcategories.forEach((subcategory: any) => {
        Array.prototype.push.apply(pinturasID, subcategory.componentIds);
      });
    pinturasID.forEach((id) => {
      paints.push(this.components.vehicleComponents[id]);
    });

    return paints;
  }

  async getTapiceria(modelId: any): Promise<any[]> {
    await this.loadConfiguration(modelId);

    let tapiceria: any[] = [];
    let tapiceriaID: any[] = [];
    this.components.componentCategories
      .filter(
        (item: { categoryName: string }) => item.categoryName == 'UPHOLSTERIES'
      )[0]
      .subcategories.forEach((subcategory: any) => {
        Array.prototype.push.apply(tapiceriaID, subcategory.componentIds);
      });
    tapiceriaID.forEach((id) => {
      tapiceria.push(this.components.vehicleComponents[id]);
    });

    return tapiceria;
  }

  async getModel(carroceria: String) {
    let modelCars: any = [];
    this.http
      .get<any>(`${this.mercedesURL}/models?bodyId=${carroceria}&apikey=${this.api_key}`, this.httpOptions)
      .subscribe(aux =>


        aux.forEach(async (item: {vehicleClass: { className: any };modelId: any;name: any;priceInformation: { price: any };}) => {
            if (!modelCars.some((e: { class: any }) => e.class == item.vehicleClass.className)) {
              modelCars.push({ class: item.vehicleClass.className, cars: [] });
            }

            const datosMotor = await this.getDatosMotor(item.modelId);

            //console.log(datosMotor)
            await modelCars.find((element: { class: any; cars: [] }) =>element.class == item.vehicleClass.className)
              .cars.push({modelId: item.modelId, name: item.name, price: item.priceInformation.price, consumption: await datosMotor.consumo,
                acceleration: await datosMotor.aceleracion, emissions: await datosMotor.emisiones, power: await datosMotor.caballos});


            await modelCars.find((element: { class: any; cars: [] }) => element.class == item.vehicleClass.className)
              .cars.sort((a: { price: number }, b: { price: number }) => a.price - b.price );

        }));
    return modelCars;
  }

   getDatosMotor(modelId: String) {
    var datosMotor : {aceleracion : any, emisiones : any, caballos : any, consumo : any} = {
      aceleracion: undefined,
      emisiones: undefined,
      caballos: undefined,
      consumo: undefined
    }
    this.http
      .get<any>(
        `${this.mercedesURL}/models/${modelId}/configurations/initial?apikey=${this.api_key}`, this.httpOptions )
      .subscribe(configuration =>datosMotor = configuration);


    return datosMotor;
  }
}
