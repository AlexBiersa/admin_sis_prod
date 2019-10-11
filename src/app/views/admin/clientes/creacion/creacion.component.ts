import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-creacion',
  templateUrl: './creacion.component.html',
  styleUrls: ['./creacion.component.scss'],
  providers: [UsuarioService]
})
export class CreacionComponent implements OnInit {

  cliente={
    "dni_cliente"  : 0,
    "nombre_cliente" : "",
    "apepat_cliente" : "",
    "apemat_cliente" : "",
    "telefono_cliente" : 0,
    "direccion_cliente" : "",
    "distrito_cliente" : ""
  };
  message=""
  valor=false;
  estado;
  constructor(
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
  }

  crearCliente(cliente){
    if (this.validarInputs()) {
      this._usuarioService.registrarClientes(cliente).subscribe(
        data=>{
          // this.ngOnInit();
          console.log("registro exitoso")
          this.estado=data.status;
        },
        error=>{
          this.message="Ocurrió un error al registrar usuario";
          console.log("error")
          // console.log(<any>error);
        }
      )
    }
  }


  validarInputs() {
    //let list=<HTMLInputElement><any>document.getElementsByClassName("required-text");
    var flag = true;
    for (var _i = 0; _i < 7; _i++) {
      var textInput = <HTMLInputElement>document.getElementsByClassName("required-text")[_i];
      if (textInput.value === "" || textInput.value === "0") {
        textInput.classList.add("is-invalid");
        // this.valor=true;
        // flag = false;
      } else {
        textInput.classList.remove("is-invalid");
        // this.valor=false;
      }
    }
    return flag;
  }
  

}
