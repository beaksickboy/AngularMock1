import { NgModule } from '@angular/core';
import { MatInputModule, MatCardModule, MatButtonModule, MatError, MatProgressBarModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';


import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent
    ],
    imports: [
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatProgressBarModule,

        AuthRoutingModule,
        BrowserAnimationsModule,

        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    exports: [LoginComponent]

})
export class AuthModule {

}
