import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InventoryListComponent } from './inventory-list.component';
import {IceCreamService} from "../services/ice-cream.service";
import {of} from "rxjs";
import {RouterTestingModule} from "@angular/router/testing";

describe('InventoryListComponent', () => {
  let component: InventoryListComponent;
  let fixture: ComponentFixture<InventoryListComponent>;
  let iceCreamServiceSpy: jasmine.SpyObj<IceCreamService>;

  beforeEach(async () => {
    const iceCreamSpy = jasmine.createSpyObj('IceCreamService', ['getIceCreamItems','getCartItems','addToCart','removeFromCart']);
    await TestBed.configureTestingModule({
      declarations: [ InventoryListComponent ],
      providers: [{provide: IceCreamService, useValue: iceCreamSpy}],
      imports: [RouterTestingModule]
    })
    .compileComponents();
    iceCreamServiceSpy = TestBed.inject(IceCreamService) as jasmine.SpyObj<IceCreamService>;
    iceCreamServiceSpy.getIceCreamItems.and.returnValue(of([]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
