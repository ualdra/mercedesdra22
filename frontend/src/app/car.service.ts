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
  private api_key = 'e8a9ef28-45fe-48e6-99dd-945aeb343b6bX';
  private api_keyOWN = '4c42f347-3571-4aec-9b4e-XX';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  constructor(private http: HttpClient) {
    this.createConfiguration(2054641,1);
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
    this.http.get(
      `${this.mercedesURL}/models/${modelId}/configurations/initial?apikey=${this.api_keyOWN}`,
      this.httpOptions)
      .subscribe((resp: any) => { this.saveConfiguration(resp._links.selectables, modelIdBackend)});

  }

  saveConfiguration(URLconfiguration: String, modelIdBackend: Number) {
    this.http.post(`${this.backendURL}/configuration`,
    {"url": URLconfiguration,
     "car": this.getCarBackend(modelIdBackend)}
    );
  }

  getCarBackend(modelIdBackend: Number) {
    return this.http.get(`${this.backendURL}/car/${modelIdBackend}`,
    this.httpOptions
  );
  }
  

}


