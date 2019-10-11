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
      this.token= localStorage.getItem('token');
  }

  loginUsuario(data){
    const headers = new Headers(
      {'Content-Type': 'application/json','Accept': 'application/json','Authorization': this.token,});
    return this._http.post(this.url + 'usuarios/ingresar_usuario',data, { headers: headers }).map(res => res.json());
  }

  postUsuario(data) {
    const headers = new Headers({ 'Content-Type': 'application/json'});
    return this._http.post(this.url + 'usuario/admin/recuperacion' ,data, { headers: headers }).map(res => res.json());
  }

  getIdentity() {
    const _identity = localStorage.getItem('usuario');
    if (_identity !== null ) {
      this.identity = true;
      console.log('iden2',_identity);
    } else {
      this.identity = null;
      console.log('2');
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

  listarClientesPorDNI(dni){
    const headers=new Headers({
      'Authorization':this.token
    });
    return this._http.get(this.url+'clientes/listar_cliente_dni?dni_cliente='+dni,{headers:headers}).map(res=>res.json());
  }

  listarReclamosPorDNI(dni){
    const headers=new Headers({
      'Authorization':this.token
    });
    return this._http.get(this.url+'reclamos/listar_reclamo_dni?dni_cliente='+dni,{headers:headers}).map(res=>res.json());
  }

  listarReclamos(){
    const headers=new Headers({
      'Authorization':this.token
    });
    return this._http.get(this.url+'reclamos/listar_reclamos',{headers:headers}).map(res=>res.json());
  }

  listarReportes(dni){
    const headers=new Headers({
      'Authorization':this.token
    });
    return this._http.get(this.url+'medidores/reporte_medidor?codigo_medidor='+dni,{headers:headers}).map(res=>res.json());
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

  registrarSuministro(data){
    const headers = new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });

    return this._http.post(this.url + 'suministros/registrar_suministro' ,data, { headers: headers }).map(res => res.json());
  }
  
  registrarMedidor(data){
    const headers = new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });
    return this._http.post(this.url + 'medidores/registrar_medidor' ,data, { headers: headers }).map(res => res.json());
  }

  reporte_medidor(codigo){
    const headers = new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });
    return this._http.get(this.url + 'medidores/reporte_medidor?codigo_medidor='+codigo, { headers: headers }).map(res => res.json());
  }

  reporte_medidor_distrito(distrito_medidor){
    const headers = new Headers({ 
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });
    return this._http.get(this.url + 'medidores/reporte_medidor?codigo_medidor='+distrito_medidor, { headers: headers }).map(res => res.json());
  }
}
