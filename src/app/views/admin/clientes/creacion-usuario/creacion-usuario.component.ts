import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-creacion-usuario',
  templateUrl: './creacion-usuario.component.html',
  styleUrls: ['./creacion-usuario.component.scss']
})
export class CreacionUsuarioComponent implements OnInit {

  usuario={
    correo_usuario : "",
  };
  correo;
  constructor( 
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  crearUsuario(){
      this._usuarioService.registrarUsuarios(this.usuario).subscribe(
        data=>{
          // this.ngOnInit();
          console.log(this.usuario)
          console.log(data)
          console.log("registro exitoso")
        },
        error=>{
          console.log("error")
          // console.log(<any>error);
        }
      )
  }



  
}
