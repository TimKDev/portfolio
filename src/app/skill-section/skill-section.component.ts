import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent implements OnInit {

  // Wenn Path als Attributbinding Wert übergeben wird, muss ./ vorangestellt werden, da 
  // sonst der Path nicht gefunden wird:
  skills = [
    {imgURL: './assets/icons/js.png', text: 'Java Script'},
    {imgURL: './assets/icons/angular.png', text: 'Angular'},
    {imgURL: './assets/icons/html.png', text: 'HTML / CSS'},
    {imgURL: './assets/icons/scrum.png', text: 'SCRUM'},
    {imgURL: './assets/icons/git.png', text: 'Git'},
    {imgURL: './assets/icons/design.png', text: 'Design Thinking'},
    {imgURL: './assets/icons/api.png', text: 'Rest API'},
    {imgURL: './assets/icons/test.png', text: 'Test Automation'},
    {imgURL: './assets/icons/database.png', text: 'Databases'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
