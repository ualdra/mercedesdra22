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
  private api_key = 'e8a9ef28-45fe-48e6-99dd-945aeb343b6b';
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

  getModel(carroceria: String): Observable<any> {
    return this.http.get(
      `${this.mercedesURL}/models?bodyId=${carroceria}&apikey=${this.api_key}`,
      this.httpOptions
    );
  }
}
