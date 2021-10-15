import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodiosPageComponent } from './episodios-page.component';

describe('EpisodiosPageComponent', () => {
  let component: EpisodiosPageComponent;
  let fixture: ComponentFixture<EpisodiosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodiosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodiosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
