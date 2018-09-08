import { NgModule } from "@angular/core";
import { ResultSearchComponent } from "./result-search/result-search.component";
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { ListSeatComponent } from "./list-seat/list-seat.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BookingRoutingModule } from './booking-routing.module';
import { NoResultComponent } from './no-result/no-result.component';
import { BookSeatComponent } from './book-seat/book-seat.component';
import { TableTotalComponent } from './table-total/table-total.component';
import { CheckOutComponent } from './check-out/check-out.component';

@NgModule({
    declarations: [
        SearchBarComponent,
        ResultSearchComponent,
        ListSeatComponent,
        NoResultComponent,
        BookSeatComponent,
        TableTotalComponent,
        CheckOutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        BookingRoutingModule,
        FormsModule,
        ReactiveFormsModule,
    ],

})
export class BookingModule {

}