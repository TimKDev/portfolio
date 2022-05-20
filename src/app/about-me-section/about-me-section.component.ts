import { Component, OnInit } from '@angular/core';

declare let AOS: any;
@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit {

  // stories: any = [
  //   {
  //     title: 'MY JOURNEY BEGAN',
  //     description: `During my time in school I discovered that I had a big interest in mathematics, physics and computers. I 
  //     realized that I was quiet gifted at using logical and structured thinking to solve problems and always had a lot of fun while 
  //     doing so. In my freetime I played saxophone in a wind orchestra.`,
  //     imgURL: './assets/icons/search.png'
  //   },
  //   {
  //     title: 'BACHELOR OF PHYSICS',
  //     description: `After my high school graduation I started studying physics at RWTH Aachen with a focus on 
  //     computational physics, statistics and data analysis. I learned how to use code to solve problems and was instantly hooked by 
  //     this powerful way of solving problems.`,
  //     imgURL: './assets/icons/hearth.png'
  //   },
  //   {
  //     title: 'MASTER OF PHYSICS',
  //     description: `After my Bachelor I started my Masters in theoretical physics. Here 
  //     I worked in a research group studying an unsolved automatisation problem. By using my programming skills I was able
  //     to solve this problem during my master thesis. I completed my Masters after 2 years.`,
  //     imgURL: './assets/icons/walk.png'
  //   },
  //   {
  //     title: 'MORE PROGRAMMING',
  //     description: `To bring my programming skills to the next level I started a bootcamp at Developer Akademie 
  //     after completing my college education. There I discovered my passion for Web Development using HTML, CSS, JS and Angular. Now 
  //     I am eager to apply my experience as a junior developer. `,
  //     imgURL: './assets/icons/flight.png'
  //   }
  // ];

  constructor() {
    console.log(AOS);
  }

  ngOnInit(): void {
    AOS.init();
  }

}
