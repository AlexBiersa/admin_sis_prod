import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { TerminosComponent } from './views/terminos/terminos.component';

export const routes: Routes = [
  /*paginas fuera del panel*/
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: 'terminos',
    component: TerminosComponent,
    data: {
      title: 'Terminos y Condiciones'
    }
  },

  /*Modulo administrador*/
  {
    path: 'home',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [ /*paginas dentro del panel*/
      {
        path: '',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'administrador',
        loadChildren: './views/admin/admin.module#AdminModule',
      },
      {
        path: 'creacion-usuario',
        loadChildren: './views/admin/admin.module#AdminModule',
      },
      {
        path: 'creacion-cliente',
        loadChildren: './views/admin/admin.module#AdminModule',
      },
      {
        path: 'modificacion',
        loadChildren: './views/admin/admin.module#AdminModule',
      },
      {
        path: 'reclamos',
        loadChildren: './views/admin/admin.module#AdminModule',
      },
      {
        path: 'reportes',
        loadChildren: './views/admin/admin.module#AdminModule',
      },
      {
        path: 'registrar-medidor',
        loadChildren: './views/admin/admin.module#AdminModule',
      },
      {
        path: 'registrar-suministro',
        loadChildren: './views/admin/admin.module#AdminModule',
      },
      {
        path: 'reporte-medidor',
        loadChildren: './views/admin/admin.module#AdminModule',
      }
    ]
  },
  { path: '**', component: P404Component } //pagina si se coloca otra url
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
