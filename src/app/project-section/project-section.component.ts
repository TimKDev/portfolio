import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {

  projects = [
    {
      title: 'El Pollo Loco',
      imgURL: './assets/img/computer.jpg',
      description: 'Java Skript based jump and run game',
      link: 'https://google.de',
      category: 'Java Script',
    },
    {
      title: 'El Pollo Loco2',
      imgURL: './assets/img/computer.jpg',
      description: 'Java Skript based jump and run game',
      link: 'https://google.de',
      category: 'Java Script',
    },
    {
      title: 'El Pollo Loco3',
      imgURL: './assets/img/computer.jpg',
      description: 'Java Skript based jump and run game',
      link: 'https://google.de',
      category: 'Angular',
    },
    {
      title: 'El Pollo Loco4',
      imgURL: './assets/img/computer.jpg',
      description: 'Java Skript based jump and run game',
      link: 'https://google.de',
      category: 'Angular',
    }
  ];

  selectedCategory = 'All';

  changeSelectedCategory(category:string):void {
    this.selectedCategory = category;
  }

  generateSelectedProjects(): any {
    let result: any = [];
    this.projects.forEach((element:any) => {
      if (this.selectedCategory != 'All' && element.category != this.selectedCategory) return;
      result.push(element);
    });
    return result;
  }

  // generateSelectedProjects(projects:any, selectedCategory:string) {
  //   let result: any = [];
  //   projects.forEach((element:any) => {
  //     if (selectedCategory != 'All' && element.category != selectedCategory) return;
  //     result.push(element);
  //   });
  //   return result;
  // }


  constructor() { }

  ngOnInit(): void {
  }

}
