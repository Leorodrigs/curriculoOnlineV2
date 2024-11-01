import { HardSkillsComponent } from './components/hard-skills/hard-skills.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { containerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { PortfolioCurriculoComponent } from './components/portfolio-curriculo/portfolio-curriculo.component';
import { SoftSkillsComponent } from './components/soft-skills/soft-skills.component';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, containerComponent, HardSkillsComponent, HeaderComponent, PortfolioCurriculoComponent, SoftSkillsComponent, MatExpansionModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio-Online';
}
