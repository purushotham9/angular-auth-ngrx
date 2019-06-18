import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/app.states';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBZztvNGIfe7yxz8ZqmigCKm0Bu2RorTLI",
  authDomain: "fisrt-deploy.firebaseapp.com",
  databaseURL: "https://fisrt-deploy.firebaseio.com",
  projectId: "fisrt-deploy",
  storageBucket: "fisrt-deploy.appspot.com",
  messagingSenderId: "529524062402",
  appId: "1:529524062402:web:84cd5940c6204002"
};




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    
    EffectsModule.forRoot([
      // UserEffects
    ]),

    StoreModule.forRoot({
      // user: userReducer
    }),
  ],
    
    // StoreModule.forRoot(reducers, {}),
    // EffectsModule.forRoot([AuthEffects]),
  
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
