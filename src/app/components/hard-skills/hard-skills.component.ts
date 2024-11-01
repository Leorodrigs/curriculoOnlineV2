import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-hard-skills',
  standalone: true,
  imports: [MatExpansionModule],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HardSkillsComponent {
  readonly panelOpenState = signal(false);
}
