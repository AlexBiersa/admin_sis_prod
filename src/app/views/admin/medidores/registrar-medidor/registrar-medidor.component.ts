import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-registrar-medidor',
  templateUrl: './registrar-medidor.component.html',
  styleUrls: ['./registrar-medidor.component.scss']
})
export class RegistrarMedidorComponent implements OnInit {

  public medidor = {
    dni_cliente : '',
    codigo_suministro: '',
    tipo_medidor:'',
    modelo_medidor:'',
    fecha_instalacion: '',
    codigo_medidor: ''
  }
  constructor(
    private _usuarioService: UsuarioService,
  ) { 

  }

  ngOnInit() {
  }

  registrar_medidor(){
    this._usuarioService.registrarMedidor(this.medidor).subscribe(
      data=>{
        console.log('registrado correctamente');
      },
      error=>{
        console.log('error',error)
      }
    );
  }



}
