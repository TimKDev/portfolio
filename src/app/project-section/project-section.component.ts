import { Component, OnInit } from '@angular/core';

declare let AOS: any;
@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {

  projects = [
    {
      title: 'El Pollo Loco',
      imgURL: './assets/img/ElPolloPoco.png',
      description: 'Java Script based jump and run game.',
      link: 'https://tim-kempkens.developerakademie.net/MyElPolloLoco/',
      linkGit: 'https://github.com/TimKDev/MyElPolloLoco',
      category: 'Java Script',
    },
    {
      title: 'Ring of Fire',
      imgURL: './assets/img/ringoffire.png',
      description: 'Corona version of a popular party game.',
      link: 'https://ring-of-fire-bc921.web.app/',
      linkGit: 'https://github.com/TimKDev/ringoffire',
      category: 'Angular',
    },
    {
      title: 'Simple CRM',
      imgURL: './assets/img/crm.png',
      description: 'Simple buissness app build with Angular.',
      link: 'https://simple-crm-af2fd.web.app',
      linkGit: 'https://github.com/TimKDev/simple-crm',
      category: 'Angular',
    }
    // {
    //   title: 'El Pollo Loco4',
    //   imgURL: './assets/img/computer.jpg',
    //   description: 'Java Skript based jump and run game',
    //   link: 'https://google.de',
    //   linkGit: 'https://google.de',
    //   category: 'Angular',
    // }
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


  constructor() { 
    console.log(AOS);
  }

  ngOnInit(): void {
    AOS.init();
  }

}
