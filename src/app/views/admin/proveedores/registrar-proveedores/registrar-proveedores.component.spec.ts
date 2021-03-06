import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarProveedoresComponent } from './registrar-proveedores.component';

describe('RegistrarProveedoresComponent', () => {
  let component: RegistrarProveedoresComponent;
  let fixture: ComponentFixture<RegistrarProveedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarProveedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
