import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Componentes del admin
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


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Administrador'
    },
    children: [
      {
        path: '',
        redirectTo: 'registrar-proveedores',
        pathMatch: 'full',
      },
      {
        path: 'registrar-proveedores',
        component: RegistrarProveedoresComponent,
        data: {
          title: 'Registrar Afiliados',
        }
      },
      {
        path: 'creacion-cliente',
        component: CreacionComponent,
        data: {
          title: 'Creacion Cliente',
        }
      },
      {
        path: 'creacion-usuario',
        component: CreacionUsuarioComponent,
        data: {
          title: 'Creación Usuario',
        }
      },
      {
        path: 'modificacion',
        component: ModificacionComponent,
        data: {
          title: 'Modificacion',
        }
      },
      {
        path: 'reclamos',
        component: ReclamosComponent,
        data: {
          title: 'Reclamos',
        }
      },
      {
        path: 'reportes',
        component: ReportesComponent,
        data: {
          title: 'Reportes',
        }
      },
      {
        path: 'registrar-medidor',
        component: RegistrarMedidorComponent,
        data: {
          title: 'Registrar Medidor',
        }
      },
      {
        path: 'registrar-suministro',
        component: RegistrarSuministroComponent,
        data: {
          title: 'Registrar Suministro',
        }
      },
      {
        path: 'reporte-medidor',
        component: ReporteMedidorComponent,
        data: {
          title: 'Reporte Medidor',
        }
      },
      {
        path: 'por-distrito',
        component: PorDistritoComponent,
        data: {
          title: 'Por Distrito',
        }
      },
      {
        path: 'por-tipo-instalacion',
        component: PorInstalacionComponent,
        data: {
          title: 'Por Tipo de Instalación',
        }
      },

     
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
