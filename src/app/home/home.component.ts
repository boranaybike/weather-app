import { Component, OnInit } from '@angular/core';
import { IWeather } from './weather';
import { WeatherService } from '../services/weather.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [WeatherService],
})
export class HomeComponent implements OnInit {
  temperature: number;
  mood: string;
  dateTime: string;
  weathers: IWeather = <IWeather>{};
  today = new Date();
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeather();
  }
  getWeather() {
    let hour = this.today.getHours();
    this.weatherService.getWeather().subscribe((data) => {
      this.weathers = data;
      this.temperature = this.weathers.hourly.temperature_2m[hour - 1];
      this.getMood();
      this.getDate();
    });
  }
  getDate() {
    var date =
      this.today.getFullYear() +
      '-' +
      (this.today.getMonth() + 1) +
      '-' +
      this.today.getDate();
    var time = this.today.getHours() + ':' + this.today.getMinutes();
    this.dateTime = date + ' ' + time;
  }

  getMood() {
    let moods: string[] = [
      'snowy', //0-5
      'rainy', //5-10
      'stormy', //10-15
      'cloudy', //15-20
      'partly-cloudy', //20-25
      'sunny', //25-30
      'sunnny', //30-35
    ];
    this.mood = moods[Math.floor(this.temperature / 5)];
  }
}
