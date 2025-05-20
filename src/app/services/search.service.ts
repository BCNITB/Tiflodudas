import { Injectable } from '@angular/core';
import { Firestore, collection, query, where, orderBy, getDocs } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Items } from '../interfaces/items';

//import { Firestore, collectionData, collection, query, where  } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  /*constructor(private firestore: Firestore) {}*/
  constructor(private firestore: Firestore) {}

  /*search(searchValue: string, searchField: string = 'consult', nodo: string = 'items'): Observable<Items[]> {
    const collectionRef = collection(this.firestore, nodo);
    
    // Crear una consulta que busque coincidencias y ordene por relevancia
    const q = query(
      collectionRef,
      where(searchField, '>=', searchValue.toLowerCase()),
      where(searchField, '<=', searchValue.toLowerCase() + '\uf8ff'),
      orderBy(searchField),
      orderBy('importance', 'desc')
    );

    // Convertir la promesa de Firebase en un Observable
    return from(getDocs(q)).pipe(
      map(snapshot => {
        return snapshot.docs.map(doc => {
          return { id: doc.id, ...doc.data() } as Items;
        });
      })
    );
  }*/
    /*search(searchValue: string, searchField: string = 'consult', nodo: string = 'items'): Observable<Items[]> {
      const collectionRef = collection(this.firestore, nodo);
      
      // Crear una consulta que busque coincidencias y ordene por relevancia
      const q = query(
        collectionRef,
        where(searchField, '>=', searchValue.toLowerCase()),
        where(searchField, '<=', searchValue.toLowerCase() + '\uf8ff'),
        orderBy(searchField),
        orderBy('importance', 'desc')
      );

      // Convertir la promesa de Firebase en un Observable
      return from(getDocs(q)).pipe(
        map(snapshot => {
          return snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() } as Items;
          });
        })
      );   
    }*/

    search(searchValue: string, searchField: string, nodo: string): Observable<any[]> {
      console.log('Buscando en Firebase:', searchValue, searchField, nodo);
      const collectionRef = collection(this.firestore, nodo);
      const q = query(
        collectionRef,
        where(searchField, '>=', searchValue.toLowerCase()),
        where(searchField, '<=', searchValue.toLowerCase() + '\uf8ff'),
        orderBy(searchField)
      );

      return from(getDocs(q)).pipe(
        map(snapshot => snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
      );
    }
  }