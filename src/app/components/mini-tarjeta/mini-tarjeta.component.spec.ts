import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniTarjetaComponent } from './mini-tarjeta.component';

describe('MiniTarjetaComponent', () => {
  let component: MiniTarjetaComponent;
  let fixture: ComponentFixture<MiniTarjetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniTarjetaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
