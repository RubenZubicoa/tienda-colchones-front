import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxSpringDetailComponent } from './box-spring-detail.component';

describe('BoxSpringDetailComponent', () => {
  let component: BoxSpringDetailComponent;
  let fixture: ComponentFixture<BoxSpringDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxSpringDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxSpringDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
