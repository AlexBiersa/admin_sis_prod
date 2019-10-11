import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { GLOBAL } from './global';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  //variables
  private url: String = '';
  private identity;
  private token = "";
  
  constructor(
    private _http: Http
    ) { 
      this.url = GLOBAL.url;
      this.token= GLOBAL.token;
  }

  getUsuarios(){
    const headers = new Headers(
      {'Content-Type': 'application/json','Accept': 'application/json','Authorization': this.token,});
    return this._http.get(this.url + 'usuario/admin/listar', { headers: headers }).map(res => res.json());
  }

  postUsuario(data) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this._http.post(this.url + 'usuario/admin/recuperacion' ,data, { headers: headers }).map(res => res.json());
  }

  getIdentity() {
    const _identity = JSON.parse(localStorage.getItem('usuario'));
    if (_identity !== 'undefined') {
      this.identity = _identity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }


  registrarClientes(data){
    const headers = new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });
    return this._http.post(this.url + 'clientes/registrar_cliente' ,data, { headers: headers }).map(res => res.json());
  }
  
  registrarUsuarios(data){
    const headers = new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });
    return this._http.post(this.url + 'usuarios/registrar_usuario' ,data, { headers: headers }).map(res => res.json());
  }

  listarClientes(){
    const headers=new Headers({
        'Content-Type':'application/json',
        'Authorization':this.token,
    });
    return this._http.get(this.url+'clientes/listar_clientes',{headers:headers}).map(res=>res.json());
  }

  listarClientesPorDNI(){
    const headers=new Headers({
        'Content-Type':'application/json',
        'Authorization':this.token,
    });
    return this._http.get(this.url+'clientes/listar_cliente_dni?dni_cliente=',{headers:headers}).map(res=>res.json());
  }


  modificarUsuario(){
    const headers = new Headers(
      {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': this.token,
      });
    return this._http.get(this.url + 'usuario/admin/listar', { headers: headers }).map(res => res.json());
  }
  
  modificarClientes(data){
    const headers = new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });
    return this._http.post(this.url + 'clientes/modificar_cliente' ,data, { headers: headers }).map(res => res.json());
  }
}
