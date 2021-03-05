import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cluster-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() color = 'blue';
  @Input() size = 'medium';
  @Output() clickEmitter = new EventEmitter<any>();

  buttonColor = '';

  constructor() { }

  ngOnInit(): void {

    this.buttonColor = `bg-${this.color}-500 text-${this.color}-50`;

  }

  buttonClicked(): void {
    this.clickEmitter.emit();
  }

}
