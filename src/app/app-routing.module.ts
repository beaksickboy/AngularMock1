import {Routes, RouterModule} from '@angular/router';

import { ResultSearchComponent } from './booking/result-search/result-search.component';
import { SearchBarComponent } from './booking/search-bar/search-bar.component';
import { NgModule } from '@angular/core';
import { ListSeatComponent } from './booking/list-seat/list-seat.component';




const routs:Routes = [
    { path: '' , redirectTo: '/home' , pathMatch:'full'},
  

]

@NgModule({
imports:[RouterModule.forRoot(routs)],
exports:[RouterModule]
})

export  class RoutingModule{}