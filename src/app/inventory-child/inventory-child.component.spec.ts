import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryChildComponent } from './inventory-child.component';

describe('InventoryChildComponent', () => {
  let component: InventoryChildComponent;
  let fixture: ComponentFixture<InventoryChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventoryChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
