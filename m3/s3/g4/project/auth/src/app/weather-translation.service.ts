import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherTranslationsData } from './weather-translations-data';

@Injectable({
  providedIn: 'root'
})
export class WeatherTranslationService {
  private weatherTranslations: { [languageCode: string]: { [weatherDescription: string]: string } } = {};

  constructor(private http: HttpClient) {
    this.loadTranslations(); // Load translations when the service is created
  }

  loadTranslations(): void {
    // Fetch the translations from db.json and assign them to weatherTranslations
    this.http.get<WeatherTranslationsData>('../../db.json').subscribe(
      data => {
        this.weatherTranslations = data.weatherTranslations;
      },
      error => {
        console.error('Error loading translations:', error);
      }
    );
  }

  translate(description: string, language: string): string {
    // Translate the weather description based on the selected language
    const translations = this.weatherTranslations[language];
    if (translations && translations[description]) {
      return translations[description];
    }
    return description; // Return original description if translation is not found
  }
}
