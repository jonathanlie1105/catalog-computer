import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-loading-skeleton",
  templateUrl: "./loading-skeleton.component.html",
  styleUrls: ["./loading-skeleton.component.scss"],
})
export class LoadingSkeletonComponent implements OnInit {
  @Input() num: number = 10;
  numbers: Array<number> = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.num; i++) {
      this.numbers.push(i);
    }
  }
}
