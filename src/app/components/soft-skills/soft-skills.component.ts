import { NgFor } from '@angular/common';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';



@Component({
  selector: 'app-soft-skills',
  standalone: true,
  imports: [MatExpansionModule, MatGridListModule, NgFor],
  templateUrl: './soft-skills.component.html',
  styleUrl: './soft-skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SoftSkillsComponent {
  readonly panelOpenState = signal(false);
  skills:Array<string> = [
    "Capacidade de Aprendizado",
    "Adaptabilidade",
    "Comunicação Eficaz",
    "Trabalho em Equipe",
    "Resolução de Problemas",
    "Atenção aos Detalhes",
    "Gestão de Tempo",
    "Receptividade a Feedback",
  ]
}
export class GridListOverviewExample {}