import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImplementObservableComponent } from './implement-observable.component';

describe('ImplementObservableComponent', () => {
  let component: ImplementObservableComponent;
  let fixture: ComponentFixture<ImplementObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImplementObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImplementObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
