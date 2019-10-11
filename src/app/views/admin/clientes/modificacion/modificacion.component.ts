import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { UsuarioService } from '../../../../services/usuario.service';

@Component({
  selector: 'app-modificacion',
  templateUrl: './modificacion.component.html',
  styleUrls: ['./modificacion.component.scss']
})
export class ModificacionComponent implements OnInit {
  
  
  dni:number;
  closeResult: string;
  constructor(
    private _usuarioService: UsuarioService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }


  buscarByDNI(){
    this._usuarioService.listarClientes().subscribe(
      data=>{
        console.log(data);
        
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
