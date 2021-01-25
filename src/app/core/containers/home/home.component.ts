import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/core/services/message.service';
import { ProgressService } from 'src/app/core/services/progress.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private message: MessageService, private progress: ProgressService) { }

  ngOnInit() {
  }

  showMsg() {
    this.message.showOkMessage('This is a message!');
  }

  showProgressSpinner() {
    this.progress.showProgressSpinner();
    setTimeout(() => this.progress.hideProgressSpinner(), 2000);
  }

}
