import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { DataTableModule } from 'angular-6-datatable';
import { NgxLoadingModule } from 'ngx-loading';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from "ngx-bootstrap";

//Componentes del Admin
import { RegistrarProveedoresComponent } from './proveedores/registrar-proveedores/registrar-proveedores.component';
import { CreacionComponent } from './clientes/creacion/creacion.component';
import { ModificacionComponent } from './clientes/modificacion/modificacion.component';
import { ReclamosComponent } from './clientes/reclamos/reclamos.component';
import { ReportesComponent } from './clientes/reportes/reportes.component';
import { RegistrarMedidorComponent } from './medidores/registrar-medidor/registrar-medidor.component';
import { RegistrarSuministroComponent } from './medidores/registrar-suministro/registrar-suministro.component';
import { ReporteMedidorComponent } from './medidores/reporte-medidor/reporte-medidor.component';
import { PorDistritoComponent } from './consultas/por-distrito/por-distrito.component';
import { PorInstalacionComponent } from './consultas/por-instalacion/por-instalacion.component';
import { CreacionUsuarioComponent } from './clientes/creacion-usuario/creacion-usuario.component';

@NgModule({
  declarations: [
    RegistrarProveedoresComponent,
    CreacionComponent,
    ModificacionComponent,
    ReclamosComponent,
    ReportesComponent,
    RegistrarMedidorComponent,
    RegistrarSuministroComponent,
    ReporteMedidorComponent,
    PorDistritoComponent,
    PorInstalacionComponent,
    CreacionUsuarioComponent,
  ],
  imports: [
    TypeaheadModule.forRoot(),
    NgxLoadingModule.forRoot({}),
    NgbModule,
    ModalModule.forRoot(),
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
