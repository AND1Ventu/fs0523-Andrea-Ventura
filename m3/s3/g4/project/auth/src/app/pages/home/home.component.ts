import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { DatePipe } from '@angular/common';
import { WeatherTranslationService } from '../../weather-translation.service';
import { Forecast } from '../auth/Models/forecast.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [DatePipe]
})
export class HomeComponent {
  searchQuery: string = '';
  cityData: any;
  weatherData: Forecast[] = [];
  favorites: string[] = [];
  currentLanguage: string = 'en';
  currentWallpaper: string = '';

  constructor(
    private homeSvc: HomeService,
    private datePipe: DatePipe,
    private weatherTranslationSvc: WeatherTranslationService
  ) {
    this.loadFavorites();
  }

  // Function to format date
  formatDate(date: string, format: string = 'EEE, HH:mm'): string {
    return this.datePipe.transform(date, format) || '';
  }

  performSearch(): void {
    this.homeSvc.getLatLon(this.searchQuery).subscribe(data => {
      if (data) {
        this.cityData = data[0];
        const lat = data[0].lat;
        const lon = data[0].lon;

        this.homeSvc.getWeather(lat, lon).subscribe(forecast => {
          this.weatherData = forecast.list;
        });
      }
    });
  }

  // Check if a city is in favorites
  isFavorite(cityName: string): boolean {
    return this.favorites.includes(cityName);
  }

  // Add or remove city from favorites
  toggleFavorite(cityName: string): void {
    if (this.isFavorite(cityName)) {
      // Remove from favorites
      this.homeSvc.removeFavorite(cityName).subscribe(() => {
        this.loadFavorites();
      });
    } else {
      // Add to favorites
      this.homeSvc.addFavorite(cityName).subscribe(() => {
        this.loadFavorites();
      });
    }
  }


  loadFavorites(): void {
    this.homeSvc.getFavorites().subscribe(favorites => {
      this.favorites = favorites.map(f => f.name);
    });
  }

  changeLanguage(selectedValue: string) {
    // Update the current language
    this.currentLanguage = selectedValue;

    // Set the current wallpaper based on the selected language
    switch (selectedValue) {
      case 'it':
        this.currentWallpaper = '../../../assets/italian.jpeg';
        break;
      case 'es':
        this.currentWallpaper = '../../../assets/spanish.jpeg';
        break;
      case 'fr':
        this.currentWallpaper = '../../../assets/french.jpeg';
        break;
      case 'ru':
        this.currentWallpaper = '../../../assets/ru.jpeg';
        break;
      default:
        // Set a default wallpaper or leave it empty if the language is not recognized
        this.currentWallpaper = '../../../assets/default.webp';
    }
  }

  getTranslatedWeatherDescription(description: string): string {
    return this.weatherTranslationSvc.translate(description, this.currentLanguage);
  }
}
