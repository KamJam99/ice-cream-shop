import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartChildComponent } from './cart-child.component';

describe('CartChildComponent', () => {
  let component: CartChildComponent;
  let fixture: ComponentFixture<CartChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
