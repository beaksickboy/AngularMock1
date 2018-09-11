import { TestBed, inject } from '@angular/core/testing';

import { TicketSellerService } from './ticket-seller.service';

describe('TicketSellerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketSellerService]
    });
  });

  it('should be created', inject([TicketSellerService], (service: TicketSellerService) => {
    expect(service).toBeTruthy();
  }));
});
