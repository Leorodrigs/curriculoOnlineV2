import { PersonalData } from './../../models/personal-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

personalData : PersonalData = {
  name: "Leonardo Rodrigues",
  role: "Deselvolvedor Full-Stack Junior",
  mail: "leorodrigues.job@gmail.com",
  phone: "(51) 9 8979-8998",
  local: "Porto Alegre - RS"
}}


