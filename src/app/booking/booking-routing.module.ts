
import { NgModule } from "@angular/core";

import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ResultSearchComponent } from "./result-search/result-search.component";
import { Routes, RouterModule } from "@angular/router";
import { ListSeatComponent } from "./list-seat/list-seat.component";
import { NoResultComponent } from "./no-result/no-result.component";
import { BookSeatComponent } from "./book-seat/book-seat.component";
import { CheckOutComponent } from "./check-out/check-out.component";

const routes: Routes = [
    {
        path: 'home', component: SearchBarComponent, children: [
            { path: '', component: NoResultComponent },
            { path: 'search', component: ResultSearchComponent},
               
        ]       
    },
        { path: 'chooseSeat', component: BookSeatComponent },
        { path: 'checkOut', component: CheckOutComponent }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BookingRoutingModule {

}