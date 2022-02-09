import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorService } from './service/actor.service';
import { ActorComponent } from './actor/actor.component';

@NgModule({
  declarations: [AppComponent, ActorComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ActorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
