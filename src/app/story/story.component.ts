import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() imgURL!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
