import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  //creamos variables
  email: string = "";
  password: string = "";


  constructor(
    private navController:NavController,
    private toastController:ToastController
  ) { }

  ngOnInit() {
  }

  login(form: NgForm){
    
    if(form.valid){
      if(this.email === 'gio@gmail.com' && this.password === '12345') {
        this.navController.navigateRoot('/inicio');
      } else {
        this.presentToast();
      }
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      color: 'warning',
      message: 'Las credenciales de acceso con incorrectas',
      duration: 3000, //milisegundos
      position: 'bottom',
    });

    await toast.present();
  }

}
