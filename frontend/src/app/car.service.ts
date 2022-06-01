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
  private api_key = '67926c0f-d7c2-4bcf-aa78-739458ba9882';
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

  async getPinturas(modelId: any): Promise<any[]> {
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

  getModel(carroceria: String) {
    let modelCars: any = [];
    return this.http.get<any>(
      `${this.mercedesURL}/models?bodyId=${carroceria}&apikey=${this.api_key}`,
      this.httpOptions
    );
  }

  getDatosMotor(modelId: String) {
    return this.http
      .get<any>(
        `${this.mercedesURL}/models/${modelId}/configurations/initial?apikey=${this.api_key}`,
        this.httpOptions
      )
      .toPromise();
  }
}
