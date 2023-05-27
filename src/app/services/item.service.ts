import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc, updateDoc, getDoc, setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Items } from '../interfaces/items';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private firestore: Firestore) { }

  addItem(item: Items){
    const itemRef = collection(this.firestore, 'items');

    return addDoc(itemRef, item);
  }

  addCollection(col: string, item: Items){
    const collectionRef = collection(this.firestore, col);//'items');*/

    return addDoc(collectionRef, item);
  }

  getCollection(col: string): Observable<Items[]> {
    const itemRef = collection(this.firestore, col);

    return collectionData(itemRef, { idField: 'id' }) as Observable<Items[]>;
  }

  getCategories(col: string): Observable<Items[]> {
    const itemRef = collection(this.firestore, col);

    return collectionData(itemRef, { idField: 'category' }) as Observable<Items[]>;
  }

  getItems(): Observable<Items[]> {
    const itemRef = collection(this.firestore, 'items');

    return collectionData(itemRef, { idField: 'id' }) as Observable<Items[]>;
  }

  deleteItem(item: Items){
    const itemDocRef = doc(this.firestore, `items/${item.id}`);

    return deleteDoc(itemDocRef);
  }

  deleteCollection(item: Items, col: string){
    const itemDocRef = doc(this.firestore, `${col}/${item.id}`);

    return deleteDoc(itemDocRef);
  }

  getItem(item: Items){
    const itemDocRef = doc(this.firestore, `items/${item.id}`);

    return getDoc(itemDocRef);
  }

  updateItem(item: Items, col: string, data: any){
    const itemDocRef = doc(this.firestore, `${col}/${item.id}`);

    return updateDoc(itemDocRef, data);
  }
}