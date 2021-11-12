import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
 public lastname="torade";
   @Input() public parentData:any;

  // @Input('parentData') public name:any;

  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  fireEvent()
  {
    this.childEvent.emit('hi msg from child');
  }
}
