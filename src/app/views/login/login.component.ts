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
  public usuario = {
    correo_usuario:'',
    password_usuario :''
  }
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

  login() {
    console.log('usuario',this.usuario)
    this._usuarioService.loginUsuario(this.usuario).subscribe(
      data=>{
        this.loading = true;
        let id_perfil = 1;
        console.log('entro');
        localStorage.setItem('token',data.token);
        localStorage.setItem('usuario','1');
        if(id_perfil===1){
            this.loading = true;
            console.log('entro2');
            this._router.navigate(['/home']);
        }
      },
      error=>{
        console.log('error',error);
      }
    );
  }
}

