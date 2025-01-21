import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  email: string = "";
  password: string = "";
  confirmPassword: string = "";
  name: string = "";
  lastName: string = "";
  phone: string = "";

  constructor(
    private navController:NavController,
    private toastController:ToastController
  ) { }

  ngOnInit() {
  }

  register(){
    if(this.email !== "" && this.password !== "" && this.confirmPassword !== "" && this.name !== "" && this.lastName !== "" && this.phone !== "") {
      if(this.password === this.confirmPassword){
        this.navController.navigateRoot('/inicio');
      }else{
        this.presentToast();
      }
    }else{
      this.emptyToast();
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: 'warning',
      message: 'Las contraseñas son incorrectas ',
      duration: 3000, //milisegundos
      position: 'bottom',
    });

    await toast.present();
  }

  async emptyToast() {
    const toast = await this.toastController.create({
      color: 'warning',
      message: 'Las credenciales estan vacias ',
      duration: 3000, //milisegundos
      position: 'bottom',
    });

    await toast.present();
  }

}
