import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'

@Injectable({
  providedIn: 'root'
})
export class ParametrosService {
  parameters : AngularFireList<any>;
  constructor(private firebasedb: AngularFireDatabase) { }

  getParametrosList(){
    this.parameters = this.firebasedb.list('titles');
    return this.parameters;
  }

  addTitle(title: string){
    this.parameters.push({
      title: title,
      isChecked : false
    })
  }

  checkUncheckTitle($key: string, flag: boolean){
    this.parameters.update($key, { isChecked: flag});
  }

  removeTitle($key: string){
    this.parameters.remove($key);
  }
}
