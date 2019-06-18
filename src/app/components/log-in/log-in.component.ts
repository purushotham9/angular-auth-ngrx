import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { User } from '../../model/user.model';
import { AppState } from '../../store/app.states';
import { LogIn } from '../../store/actions/auth.action';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  user: User = new User();

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const payload = {
      email: this.user.email,
      password: this.user.password
    };
    this.store.dispatch(new LogIn(payload));
  }

}