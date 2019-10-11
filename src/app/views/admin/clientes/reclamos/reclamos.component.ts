import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.component.html',
  styleUrls: ['./reclamos.component.scss']
})
export class ReclamosComponent implements OnInit {

  dni = '0';
  reclamo=[];
  
  constructor(
    private _usuarioService: UsuarioService,
    ) { }

  ngOnInit() {
    this.listaReclamos();
  }

  listaReclamos(){
    this._usuarioService.listarReclamos().subscribe(
      data=>{
        console.log(data);
        if (data.reclamos.length!=0) {
          this.reclamo=data.reclamos;
          console.log(data.reclamos);
        }else{
          this.ngOnInit();
        }
      }
    )
  }

  buscarReclamosDNI(){
    if (this.dni != '') {
      this._usuarioService.listarReclamosPorDNI(this.dni).subscribe(
        data=>{
          console.log(data);
          if (data.reclamos.length!=0) {
            this.reclamo=data.reclamos;
            console.log(data.reclamos);
          }else{
           
          }
        },
        error=>{
          console.log(<any>error);
        }
      )
    }else{
      this.ngOnInit();
    }

  }

}
