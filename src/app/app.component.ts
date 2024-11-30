import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, FirestoreRec } from './services/chat.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private chatService = inject(ChatService);
  messages$: Observable<FirestoreRec[]>;
  newMessage = '';
  userName = '';
  color = '#000000';

  constructor() {
    this.messages$ = this.chatService.mesg$;
  }

  ngOnInit() {
    this.userName = localStorage.getItem('chatUserName') || '';
    this.color = localStorage.getItem('chatUserColor') || '#000000';
  }

  onSubmit() {
    if (this.newMessage.trim() && this.userName.trim()) {
      this.chatService.submitNewMessage(this.newMessage, this.userName, this.color);
      this.newMessage = '';
    }
  }

  onUserNameChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userName = input.value;
    localStorage.setItem('chatUserName', this.userName);
  }

  onColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.color = input.value;
    localStorage.setItem('chatUserColor', this.color);
  }
}