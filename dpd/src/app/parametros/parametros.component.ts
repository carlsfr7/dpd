import { Component, OnInit } from '@angular/core';
import { ParametrosService } from './shared/parametros.service';
import { element } from 'protractor';

@Component({
  selector: 'app-parametros',
  templateUrl: './parametros.component.html',
  styleUrls: ['./parametros.component.css'],
  providers: [ParametrosService]
})
export class ParametrosComponent implements OnInit {

  parametrosArray: any[];
  constructor(private parametrosService: ParametrosService) { }

  ngOnInit() {
    this.parametrosService.getParametrosList().snapshotChanges().
    subscribe(item => {
      this.parametrosArray = [];
      item.forEach(element => {
        var x = element.payload.toJSON();
        x["$key"] = element.key;
        this.parametrosArray.push(x);
      })

      //sort array
      this.parametrosArray.sort((a,b) => {
        return a.isChecked - b.isChecked;
      })
    })
  }

  onAdd(itemTitle){
    this.parametrosService.addTitle(itemTitle.value);
    itemTitle.value = null;
  }

  alterCheck($key: string, isChecked){
    this.parametrosService.checkUncheckTitle($key, !isChecked);
  }

  onDelete($key: string){
    this.parametrosService.removeTitle($key);
  }
}
