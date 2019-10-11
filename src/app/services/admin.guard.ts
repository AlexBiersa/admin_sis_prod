import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsuarioService } from './usuario.service';


@Injectable({
    providedIn: 'root'
})
export class AdminGuard implements CanActivate{
    constructor(
        private _router: Router,
        private _usuarioService: UsuarioService
    ){}
    canActivate(){
        let identity = this._usuarioService.getIdentity();
        if(identity && identity.id_perfil===1){
            return true;
        }else{
            this._router.navigate(['/']);
            return false;
        }
        
    }

}