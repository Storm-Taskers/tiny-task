import { TestBed, inject } from '@angular/core/testing';

import { DragServiceService } from './drag-service.service';

describe('DragServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DragServiceService]
    });
  });

  it('should be created', inject([DragServiceService], (service: DragServiceService) => {
    expect(service).toBeTruthy();
  }));
});
