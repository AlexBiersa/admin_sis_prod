import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-por-instalacion',
  templateUrl: './por-instalacion.component.html',
  styleUrls: ['./por-instalacion.component.scss']
})
export class PorInstalacionComponent implements OnInit {

  public medidores = [];
  public codigo_medidor = '';
  constructor(
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
  }

  reporte_medidor(){
    this._usuarioService.reporte_medidor(this.codigo_medidor).subscribe(
      data=>{
        this.medidores = data.reporte;
        console.log(this.medidores);
      },
      error=>{
        console.log('error',error)
      }
    )
  }
}
