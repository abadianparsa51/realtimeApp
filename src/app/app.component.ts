import { Component, OnInit } from '@angular/core';
import { ChatService } from './chatservice.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  formData!: FormGroup;
  constructor(private chat: ChatService, private _fb: FormBuilder) {
    this.formData = this._fb.group({
      msg: new FormControl(undefined)
    })
  }

  ngOnInit() {
    this.chat.messages.subscribe(msg => {
      console.log(msg);
    })
  }

  sendMessage() {
    console.log(this.formData.value);

    this.chat.sendMsg(this.formData.value['msg']);
  }

}