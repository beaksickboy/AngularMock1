import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from '../booking/search-bar/search-bar.component';
import { ResultSearchComponent } from '../booking/result-search/result-search.component';

const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
