import { User } from "./user.model";

import { Buses } from "./buses";
import { Seats } from "./seat";
import { Routes } from "./routes.model";


export class Ticket {
    ticketId: number;
    user: User;
    routes: Routes;
    buses: Buses;
    seats: Seats;
    bookingDate: Date;
    bookingStatus: string;
}