import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreChildComponent } from './store-child.component';

describe('StoreChildComponent', () => {
  let component: StoreChildComponent;
  let fixture: ComponentFixture<StoreChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
