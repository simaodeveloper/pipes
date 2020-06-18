import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: string = '';
  miles: string = '';

  onChangeName(value: string) {
    this.name = value;
  }

  onChangeDate(value: string) {
    this.date = value;
  }

  onChangeAmount(value: string) {
    this.amount = value;
  }

  onChangeMiles(value: string) {
    this.miles = value;
  }
}
