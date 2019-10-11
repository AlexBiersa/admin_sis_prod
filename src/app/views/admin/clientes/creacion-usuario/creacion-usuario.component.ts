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
    console.log(this.usuario);
    if (this.validarInputs()) {
      console.log('2',this.usuario);
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


  validarInputs() {
    //let list=<HTMLInputElement><any>document.getElementsByClassName("required-text");
    var flag = true;
    for (var _i = 0; _i < 1; _i++) {
      var textInput = <HTMLInputElement>document.getElementsByClassName("required-text")[_i];
      console.log('text',textInput.value);
      console.log(textInput.value==='');
      if (textInput.value === "" || textInput.value === "0") {
        textInput.classList.add("is-invalid");
        return false;
      } else {
        textInput.classList.remove("is-invalid");
        return true;
      }
    }
    return flag;
  }


  
}
