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
  private api_key = '64994897-7677-496a-b2da-98c66e7b52b6';
  private api_keyOWN = '4c42f347-3571-4aec-9b4e-XX';
  private components: any | undefined;
  car: any = [];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {
    // this.createConfiguration(2054641,1);
  }

  getModels(): Observable<any> {
    return this.http.get(`${this.backendURL}/cars`);
  }

  getModel(carroceria: String): Observable<any> {
    return this.http.get(
      `${this.mercedesURL}/models?bodyId=${carroceria}&apikey=${this.api_key}`,
      this.httpOptions
    );
  }

  createConfiguration(modelId: Number, modelIdBackend: Number) {
    this.http
      .get(
        `${this.mercedesURL}/models/${modelId}/configurations/initial?apikey=${this.api_key}`,
        this.httpOptions
      )
      .subscribe((resp: any) => {
        this.saveConfiguration(resp._links.selectables, modelIdBackend);
        console.log(resp._links.selectables);
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

  loadConfiguration(url: String) {
    if (this.components == undefined) {
      this.http.get(`${url}`).subscribe((data) => (this.components = data));
    }
  }

  dropConfiguration() {
    this.components = undefined;
  }

  getPinturas(): any[] {
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

  getTapiceria(): any[] {
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
}
