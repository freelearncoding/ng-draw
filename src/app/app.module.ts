import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgDrawContainerComponent } from './components/ng-draw-container/ng-draw-container.component';
import { NgDrawDisplayComponent } from './components/ng-draw-display/ng-draw-display.component';
import { NgDrawRulerComponent } from './components/ng-draw-ruler/ng-draw-ruler.component';
import { NgDrawLineComponent } from './components/ng-draw-line/ng-draw-line.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    NgDrawContainerComponent,
    NgDrawDisplayComponent,
    NgDrawRulerComponent,
    NgDrawLineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
