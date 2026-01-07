import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './Components/Test/Test.Component';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from './Components/footer/footer.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from '../identity/login/login.component';
import { RegisterComponent } from '../identity/register/register.component';
import { NgClass, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, HeaderComponent, FooterComponent, MainLayoutComponent,
    LoginComponent, RegisterComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  _id = 'txt5';
  _value: number = 33;
  title = 'firsto Project';
  msg: string = 'this is a message!';
  _Msg() {
    alert(this.msg);
  }
  isSuc: boolean = true;
  _ngClass = {
    "txt-success": this.isSuc,
    "txt-danger": !this.isSuc
  }
  GetMessage() { alert("get message button was clicked!") }

  valMessage: string = '';
  changeVal(input: string) {
    this.valMessage = input.toUpperCase();

  }
}
