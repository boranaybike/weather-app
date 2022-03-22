import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWeather } from '../home/weather';
import { Observable, tap, map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}
  path =
    'https://api.open-meteo.com/v1/forecast?latitude=36.88&longitude=30.70&hourly=temperature_2m';

  getWeather() {
    return this.http
      .get(this.path)
      .pipe(map((response) => response as IWeather));
  }
}
