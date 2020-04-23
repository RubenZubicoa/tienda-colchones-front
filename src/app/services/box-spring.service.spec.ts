import { TestBed } from '@angular/core/testing';

import { BoxSpringService } from './box-spring.service';

describe('BoxSpringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoxSpringService = TestBed.get(BoxSpringService);
    expect(service).toBeTruthy();
  });
});
