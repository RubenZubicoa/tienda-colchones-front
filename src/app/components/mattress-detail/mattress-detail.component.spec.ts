import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MattressDetailComponent } from './mattress-detail.component';

describe('MattressDetailComponent', () => {
  let component: MattressDetailComponent;
  let fixture: ComponentFixture<MattressDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MattressDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MattressDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
