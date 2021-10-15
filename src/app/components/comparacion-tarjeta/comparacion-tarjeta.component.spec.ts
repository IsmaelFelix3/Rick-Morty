import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparacionTarjetaComponent } from './comparacion-tarjeta.component';

describe('ComparacionTarjetaComponent', () => {
  let component: ComparacionTarjetaComponent;
  let fixture: ComponentFixture<ComparacionTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparacionTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparacionTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
