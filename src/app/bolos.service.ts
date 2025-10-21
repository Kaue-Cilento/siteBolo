import { Injectable } from '@angular/core';
import { Bolo } from './bolo.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BolosService {
  private url = '../assets/bolos.json';
  GetBolos() {
    return this.http.get<Bolo[]>(this.url);
  }

  constructor(private http: HttpClient) {}
}
