import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { MyFriends, Friend } from '../../services/my-friends';
import { MyFriendsSocket, FriendUpdateEvent } from '../../services/my-friends-socket';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule
  ],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css'
})
export class Tabla implements OnInit {
  amigos: Friend[] = [];
  columnas: string[] = ['id', 'nombre', 'genero'];
  ultimoCambio: FriendUpdateEvent | null = null;

  constructor(
    private myFriendsService: MyFriends,
    private socketService: MyFriendsSocket,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargarAmigos();

    this.socketService.escucharCambios().subscribe((data) => {
      console.log('Cambio recibido en Angular:', data);
      this.ultimoCambio = data;
      this.cargarAmigos();
      this.cdr.detectChanges();
    });
  }

  cargarAmigos(): void {
  this.myFriendsService.obtenerAmigos().subscribe({
    next: (resp: any) => {
      console.log('Datos recibidos del backend:', resp);

      const lista = resp.datos || resp.data || [];

      this.amigos = lista.map((item: any) => ({
        id: item.id,
        nombre: item.nombre || item.name,
        genero: item.genero || item.gender || item['género']
      }));

      console.log('Datos convertidos para la tabla:', this.amigos);

      this.cdr.detectChanges();
    },
    error: (error) => {
      console.error('Error al cargar my_friends:', error);
    }
  });
}
}