import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import{AppRoutingModule, routingComponents} from './app-routing.module';
import { GetStartComponent } from './get-start/get-start.component';
import { VerifyComponent } from './verify/verify.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TokenComponent } from './token/token.component';
import { DisplaydataComponent } from './displaydata/displaydata.component'
import { ProjectService } from './project.service';
import { TokenParams } from './Classes/TokenParams';
import { SignupComponent } from './signup/signup.component';
import { MaterialModule } from './materialmodule';

const routes: Routes = [

  { path: 'getStarted', component: HomeComponentComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    GetStartComponent,
    VerifyComponent,
    LoginComponent,
    UserDetailsComponent,
    TokenComponent,
    DisplaydataComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    MaterialModule

  ],
  exports : [RouterModule],
  providers: [ProjectService, TokenParams],
  bootstrap: [AppComponent]
})
export class AppModule { }
