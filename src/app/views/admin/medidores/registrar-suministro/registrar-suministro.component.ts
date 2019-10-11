import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-registrar-suministro',
  templateUrl: './registrar-suministro.component.html',
  styleUrls: ['./registrar-suministro.component.scss']
})
export class RegistrarSuministroComponent implements OnInit {

  public suministro = {
    codigo_suministro :'',
    fecha_instalacion: ''
  }

  constructor(
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
  }

  registra_Suministro(){
    console.log(this.suministro);
    this._usuarioService.registrarSuministro(this.suministro).subscribe(
      data=> {
        console.log('data',data);
      },
      error=> {
        console.log('error',error)
      }
    )
  }

}
