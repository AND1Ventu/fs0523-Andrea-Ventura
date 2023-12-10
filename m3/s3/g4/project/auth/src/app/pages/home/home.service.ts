import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private API_KEY_OW = '26346b9617eb93d7e30acc98f37d539a';
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getLatLon(city: string): Observable<any> {
    const url = `/api/geo/1.0/direct?q=${city}&appid=${this.API_KEY_OW}`;
    return this.http.get(url);
  }

  getWeather(lat: number, lon: number): Observable<any> {
    const url = `/api/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${this.API_KEY_OW}`;
    return this.http.get(url);
  }

  getFavorites(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/favorites`);
  }

  addFavorite(cityName: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/favorites`, { name: cityName });
  }

  removeFavorite(cityName: string): Observable<any> {
    // Remove the favorite city from db.json
    const dbFilePath = '../../../../db.json';
    const fs = require('fs');

    // Read the current data from db.json
    const currentData = JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));

    // Find the index of the city in the favorites array
    const cityIndex = currentData.favorites.findIndex((favorite: { name: string; }) => favorite.name === cityName);

    if (cityIndex !== -1) {
      // Remove the city from the favorites array
      currentData.favorites.splice(cityIndex, 1);

      // Write the updated data back to db.json
      fs.writeFileSync(dbFilePath, JSON.stringify(currentData), 'utf8');

      // Now, send the HTTP DELETE request
      return this.http.delete(`${this.apiUrl}/favorites/${cityName}`);
    } else {
      // City not found in favorites
      return throwError('City not found in favorites');

    }
  }
}

