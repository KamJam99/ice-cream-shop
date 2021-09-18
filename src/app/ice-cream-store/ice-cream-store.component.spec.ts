import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamStoreComponent } from './ice-cream-store.component';

describe('IceCreamStoreComponent', () => {
  let component: IceCreamStoreComponent;
  let fixture: ComponentFixture<IceCreamStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IceCreamStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IceCreamStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
