import { Component } from '@angular/core';
import { LeftNavComponent } from "./left-nav/left-nav.component";
import { RightNavComponent } from './right-nav/right-nav.component';

@Component({
  selector: 'app-main-layout',
  imports: [LeftNavComponent, RightNavComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
