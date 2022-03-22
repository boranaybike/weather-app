import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeather } from '../models/response/weather.response';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather() {
    return this.http
      .get(
        environment.base_api_url +
          '?latitude=36.88&longitude=30.70&hourly=temperature_2m'
      )
      .pipe(map((response) => response as IWeather));
  }
}
