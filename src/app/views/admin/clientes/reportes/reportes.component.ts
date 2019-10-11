import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.scss']
})
export class ReportesComponent implements OnInit {

  dni:number;
  reporte=[];
  constructor(
    private _usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
  }


  buscarReporte(){
    this._usuarioService.listarReportes(this.dni).subscribe(
      data=>{
        if (data.reporte.length!=0) {
          this.reporte=data.reporte[0];
          console.log(data.reporte[0]);
        }else{
          console.log("warn!!!")
        }
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
