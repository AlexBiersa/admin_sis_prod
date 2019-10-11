interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItemsAdmin: NavData[] = [
  {
    name: 'Dashboard',
    url: '/home',
    icon: 'icon-speedometer'
  },
  {
    title: true,
    name: 'Administrador'
  },
  {
    name: 'Clientes',
    url: '/afiliados',
    icon: 'icon-user',
    children: [
      {
        name: 'Creación Cliente',
        url: '/home/administrador/creacion-cliente',
        // icon: 'icon-note',
      },
      {
        name: 'Creación Usuario',
        url: '/home/administrador/creacion-usuario',
        // icon: 'icon-note',
      },
      {
        name: 'Modificación',
        url: '/home/administrador/modificacion',
        // icon: 'icon-note',
      },
      {
        name: 'Reclamos',
        url: '/home/administrador/reclamos',
        // icon: 'icon-note',
      },
      {
        name: 'Reportes',
        url: '/home/administrador/reportes',
        // icon: 'icon-note',
      }
    ],
  },
  {
    name: 'Medidores',
    url: '/medidores',
    icon: 'icon-speedometer',
    children: [
      {
        name: 'Registrar medidor',
        url: '/home/administrador/registrar-medidor',
        // icon: 'icon-note',
      },
      {
        name: 'Registrar suministro',
        url: '/home/administrador/registrar-suministro',
        // icon: 'icon-note',
      },
      {
        name: 'Reporte medidor',
        url: '/home/administrador/reporte-medidor',
        // icon: 'icon-note',
      }
    ]
  },
  {
    name: 'Consultas',
    url: '/medidores',
    icon: 'icon-info',
    children: [
      {
        name: 'Por distrito',
        url: '/home/administrador/por-distrito',
        // icon: 'icon-note',
      },
      {
        name: 'Por tipo de instalación',
        url: '/home/administrador/por-tipo-instalacion',
        // icon: 'icon-note',
      }
    ]
  },
];
