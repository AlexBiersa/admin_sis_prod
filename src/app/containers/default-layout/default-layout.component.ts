import { Component, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItemsAdmin } from '../../_nav';


@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnDestroy {
  
  public navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  //variables
  public usuario = JSON.parse(localStorage.getItem('usuario'));

  constructor(@Inject(DOCUMENT) _document?: any) {
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = _document.body.classList.contains('sidebar-minimized');
    });
    this.element = _document.body;
    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }

  ngOnInit(){
    this.verificarPerfil();
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  verificarPerfil(){
    //Mostrar Tabs en el panel dependiendo su id_perfil
    let id_perfil = 1;
    
    if (id_perfil===1) {
      this.navItems=navItemsAdmin;
    } else if(id_perfil===2){
      //this.navItems=navItemsProveedores;
    } else{
      //this.navItems=navItemsCallCenter;
    }

  }

  logout(){
    localStorage.clear();
  }

}
