import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { QuestionDetailComponent } from './question/question-detail.component';

// Material Angular
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

// Utilities
import { MomentModule } from 'angular2-moment';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
