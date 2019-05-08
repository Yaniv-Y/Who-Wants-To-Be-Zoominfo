import { Component, OnInit } from '@angular/core';
import { Question, Questions, qs } from './question/questions'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	qNum: number = 0;
	currentQ: Question;
  qs: Questions;

  constructor(private http: HttpClient) {}

  ngOnInit() {
  	this.http.get<Questions>("https://opentdb.com/api.php?amount=10&type=multiple")
  		.subscribe(qs => {
  			this.qs = qs;
  			this.next();
  		})
  }

  next() {
  	if (this.qNum == this.qs.results.length)
  		return;
  	this.qNum++;
		this.currentQ = this.qs.results[this.qNum - 1];
  }
}
