import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  @Input('likesCount') likesCOunt: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    this.likesCOunt += (this.isActive) ? -1 : 1;
    this.isActive != this.isActive;
  }

  constructor() { }

  ngOnInit() {
  }

}
