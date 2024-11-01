import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-conteiner',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './conteiner.component.html',
  styleUrl: './conteiner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConteinerComponent {

}
