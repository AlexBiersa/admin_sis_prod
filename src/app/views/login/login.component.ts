import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
})
export class LoginComponent { 
  
  public loading = false;

  constructor(
    config: NgbModalConfig,
    private _router: Router,
    private _usuarioService: UsuarioService
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(){
    localStorage.clear();
  }

  login(content) {
    this.loading = true;
    let id_perfil = 1;
    if(id_perfil===1){
        this.loading = false;
        this._router.navigate(['/home']);
    } else if(id_perfil===2){
        this.loading = false;
        this._router.navigate(['/home-proveedor']);
    }else if(id_perfil===4){
        this.loading = false;
        this._router.navigate(['/home-call-center']);;
    } else{
        this.loading = false;
        this._router.navigate(['/login']);
    }
  }
}

