import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../../services/users';
import { User } from '../../../interfaces/user';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css'
})


export class Users implements OnInit {

  // 1. injección de dependencias e inicialización de variables
  private _userService = inject(UserService);
  allUsers: User[] = []; //nos creamos esta variable

  // 2. Formgroups y formcontrols que necesite
  // ...


  // 3. métodos que le permitan hacer las peticiones y gestionar las respuestas
  showUsers() {
    // hace la petición GET
    this._userService.getUser().subscribe({
      next: (res : any) => { 
        console.log(res);
        this.allUsers = res.data
        console.log(this.allUsers);
      },
      error: (err : any) => { 
        console.error(err)
      }
    });
  }

  deleteUser(id: string) {
    // Hace la petición DELETE
    console.log('Id del usuario a eliminar: ', id)

    this._userService.deleteUser(id).subscribe({
      next: (res: any) => {
        console.log(res);
        Swal.fire({
          title: 'Usuario eliminado',
          text: res.mensaje,
          icon: "success"
        }).then(()=>{
          this.showUsers();
        })
       },
      error: (err: any) => { 
        console.error(err)
      }
    })

  }

  updateUsersInfo(id: string) {
    // Hace la petición PUT
    // ... tomar como referencia el registro de usuarios
    console.log('Id del usuario a editar: ', id)
  }


  ngOnInit(): void {
      this.showUsers();
      // pone o llama todos los métodos y la logica que quiera que se ejecute al cargar un componente por primera vez
  }

}