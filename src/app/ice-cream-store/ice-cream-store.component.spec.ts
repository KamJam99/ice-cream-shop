import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IceCreamStoreComponent } from './ice-cream-store.component';
import { IceCreamService } from "../services/ice-cream.service";
import { of } from "rxjs";

describe('IceCreamStoreComponent', () => {
  let component: IceCreamStoreComponent;
  let fixture: ComponentFixture<IceCreamStoreComponent>;
  let iceCreamServiceSpy: jasmine.SpyObj<IceCreamService>;

  beforeEach(async () => {
    const iceCreamSpy = jasmine.createSpyObj('IceCreamService', ['getIceCreamItems','getCartItems','addToCart','removeFromCart']);
    await TestBed.configureTestingModule({
      declarations: [ IceCreamStoreComponent ],
      providers: [{provide: IceCreamService, useValue: iceCreamSpy}]
    })
    .compileComponents();
    iceCreamServiceSpy = TestBed.inject(IceCreamService) as jasmine.SpyObj<IceCreamService>;
    iceCreamServiceSpy.getIceCreamItems.and.returnValue(of([]));
    iceCreamServiceSpy.getCartItems.and.returnValue(of([]));
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
