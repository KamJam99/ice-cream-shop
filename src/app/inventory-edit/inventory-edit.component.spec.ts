import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryEditComponent } from './inventory-edit.component';
import {RouterTestingModule} from "@angular/router/testing";
import {IceCreamService} from "../services/ice-cream.service";
import {of} from "rxjs";

describe('InventoryEditComponent', () => {
  let component: InventoryEditComponent;
  let fixture: ComponentFixture<InventoryEditComponent>;
  let iceCreamServiceSpy: jasmine.SpyObj<IceCreamService>;

  beforeEach(async () => {
    const iceCreamSpy = jasmine.createSpyObj('IceCreamService', ['getIceCreamItems','getCartItems','addToCart','removeFromCart']);
    await TestBed.configureTestingModule({
      declarations: [ InventoryEditComponent ],
      imports: [RouterTestingModule],
      providers: [{provide: IceCreamService, useValue: iceCreamSpy}]
    })
    .compileComponents();
    iceCreamServiceSpy = TestBed.inject(IceCreamService) as jasmine.SpyObj<IceCreamService>;
    iceCreamServiceSpy.getIceCreamItems.and.returnValue(of([]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
