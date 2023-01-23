import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetaileComponent } from './product-detaile.component';

describe('ProductDetaileComponent', () => {
  let component: ProductDetaileComponent;
  let fixture: ComponentFixture<ProductDetaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetaileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
