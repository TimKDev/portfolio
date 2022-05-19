import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() title!: string;
  @Input() imgURL!: string;
  @Input() description!: string;
  @Input() link!: string;
  @Input() linkGit!: string;
  @Input() category!: string;
  btnActiv = false;

  constructor() { }

  ngOnInit(): void {
  }

}
