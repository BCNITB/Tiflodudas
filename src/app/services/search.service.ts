import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Firestore, collectionData, collection, query, where  } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private collectionName = 'items';

  constructor(private firestore: Firestore) { }

  // Search method acoording field
  SearcDoc(field: string, value: string): Observable<any[]> {
    const itemsCollection = collection(this.firestore, this.collectionName);
    const q = query(itemsCollection, where(field, '==', value));
    return collectionData(q, { idField: 'id' }).pipe(
      map(actions => actions.map(a => {
        return { id: a['id'], ...a };
      }))
    );
  }
}
