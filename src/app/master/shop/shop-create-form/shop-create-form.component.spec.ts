import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCreateFormComponent } from './shop-create-form.component';

describe('ShopCreateFormComponent', () => {
  let component: ShopCreateFormComponent;
  let fixture: ComponentFixture<ShopCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
