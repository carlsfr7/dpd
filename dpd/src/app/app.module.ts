import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule} from 'angularfire2/database'

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { ParametrosComponent } from './parametros/parametros.component';

@NgModule({
  declarations: [
    AppComponent,
    ParametrosComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
