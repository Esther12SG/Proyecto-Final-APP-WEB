import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Friend {
  id: number;
  nombre: string;
  genero: string;
}

@Injectable({
  providedIn: 'root'
})
export class MyFriends {
  private apiUrl = 'http://localhost:3000/api/my-friends';

  constructor(private http: HttpClient) {}

  obtenerAmigos(): Observable<{ datos: any[] }> {
    return this.http.get<{ datos: any[] }>(this.apiUrl);
  }
}