import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit {

  stories: any = [
    {
      title: 'MY JOURNEY BEGAN',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae laborum nisi deserunt est nobis, dolores in
      modi porro pariatur maiores tempora expedita soluta nulla, dicta commodi doloremque tempore aspernatur.`,
      imgURL: './assets/icons/flight.png'
    },
    {
      title: 'MY JOURNEY BEGAN',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae laborum nisi deserunt est nobis, dolores in
      modi porro pariatur maiores tempora expedita soluta nulla, dicta commodi doloremque tempore aspernatur.`,
      imgURL: './assets/icons/flight.png'
    },
    {
      title: 'MY JOURNEY BEGAN',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae laborum nisi deserunt est nobis, dolores in
      modi porro pariatur maiores tempora expedita soluta nulla, dicta commodi doloremque tempore aspernatur.`,
      imgURL: './assets/icons/flight.png'
    },
    {
      title: 'MY JOURNEY BEGAN',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis quae laborum nisi deserunt est nobis, dolores in
      modi porro pariatur maiores tempora expedita soluta nulla, dicta commodi doloremque tempore aspernatur.`,
      imgURL: './assets/icons/flight.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
