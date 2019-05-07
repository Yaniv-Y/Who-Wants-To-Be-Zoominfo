import { Component, OnInit } from '@angular/core';
import { Question, Questions, qs } from './question/questions'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	qNum: number = 0;
	currentQ: Question;
  title = 'who-wants-to-be-zoominfo';
  qs: Questions = qs;

  ngOnInit() {
  	this.next();
  }

  next() {
  	if (this.qNum == qs.results.length)
  		return;
  	this.qNum++;
		this.currentQ = qs.results[this.qNum - 1];
  }
}
