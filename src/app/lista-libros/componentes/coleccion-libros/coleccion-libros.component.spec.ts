import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColeccionLibrosComponent } from './coleccion-libros.component';

describe('ColeccionLibrosComponent', () => {
  let component: ColeccionLibrosComponent;
  let fixture: ComponentFixture<ColeccionLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColeccionLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColeccionLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
