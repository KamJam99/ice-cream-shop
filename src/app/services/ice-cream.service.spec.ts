import { TestBed } from '@angular/core/testing';

import { IceCreamService } from './ice-cream.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('IceCreamService', () => {
  let service: IceCreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(IceCreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
