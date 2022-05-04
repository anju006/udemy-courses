import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-demo',
  templateUrl: './data-binding-demo.component.html',
  styleUrls: ['./data-binding-demo.component.scss']
})
export class DataBindingDemoComponent implements OnInit {
  FormUsername = '';
  formOutput = '';
  disabledUsername = false;
  constructor() { }

  ngOnInit(): void {
  }

  onBindingUsername(){
  if(this.FormUsername === ''){
    this.disabledUsername = false;
  }else{
    this.disabledUsername = true;
  }
  }

  onClickpress(){
    this.FormUsername = '';
    this.disabledUsername = false;
  }

}
