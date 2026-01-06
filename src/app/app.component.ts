import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './Components/Test/Test.Component';
import { HeaderComponent } from "./Components/header/header.component";
import { FooterComponent } from './Components/footer/footer.component';
import { MainLayoutComponent } from './Components/main-layout/main-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestComponent, HeaderComponent, FooterComponent, MainLayoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'firsto Project';
}
