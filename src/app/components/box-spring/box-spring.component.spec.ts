import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSpringComponent } from './box-spring.component';

describe('BoxSpringComponent', () => {
  let component: BoxSpringComponent;
  let fixture: ComponentFixture<BoxSpringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxSpringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
