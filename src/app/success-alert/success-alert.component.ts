import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.scss']
})
export class SuccessAlertComponent implements OnInit {
    serverStatus = 'online';
    serverID = 20;
    allowserver = false;
    serverCreates = 'No server was created';
    serverName = '';
    serverTestName = 'Server Test'

  constructor() {
    //for property binding
    setTimeout(() => {
      this.allowserver = true;
    },3000)
   }

  ngOnInit(): void {
  }
  
  //for string interpolation
  serverClick (){
    return this.serverID;
  }
  
  onCLickServer(){
    this.serverCreates = 'Server was created! And Name of the server : ' + this.serverTestName;
  }

  onUpdate(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  

}
