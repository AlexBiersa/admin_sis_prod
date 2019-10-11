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
  clientes=[];
  closeResult: string;
  constructor(
    private _usuarioService: UsuarioService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.listarclientes();
    console.log('cli', this.clientes);
  }

  listarclientes(){
    this._usuarioService.listarClientes().subscribe(
      data=>{
        if (data.clientes.length!=0) {
          this.clientes=data.clientes;
          console.log(data.clientes);
        }else{
          console.log("warn!!!")
        }
      }
    )
  }
  buscarByDNI(){
    this._usuarioService.listarClientesPorDNI(this.dni).subscribe(
      data=>{
        // console.log(data);
        if (data.clientes.length!=0) {
          this.clientes=data.clientes;
          console.log(data.clientes);
        }else{
          console.log("warn!!!")
        }
      },
      error=>{
        console.log('erro12',<any>error);
      }
    )
  }

}
