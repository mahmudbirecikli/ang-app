import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './Components/Test/Test.Component';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from './Components/footer/footer.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';
import { LoginComponent } from '../identity/login/login.component';
import { RegisterComponent } from '../identity/register/register.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, HeaderComponent, FooterComponent, MainLayoutComponent,
    LoginComponent, RegisterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firsto Project';
}
