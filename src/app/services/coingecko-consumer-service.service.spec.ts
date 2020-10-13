import { TestBed } from '@angular/core/testing';

import { CoingeckoConsumerServiceService } from './coingecko-consumer-service.service';

describe('CoingeckoConsumerServiceService', () => {
  let service: CoingeckoConsumerServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoingeckoConsumerServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
