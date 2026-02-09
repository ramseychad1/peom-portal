import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { TabNavigationComponent } from './components/tab-navigation/tab-navigation.component';
import { IntroSectionComponent } from './components/intro-section/intro-section.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    TabNavigationComponent,
    IntroSectionComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
