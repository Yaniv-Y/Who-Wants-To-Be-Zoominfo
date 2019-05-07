import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from './questions'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit, OnChanges {

  constructor() { }

  @Input() currentQ: Question;
  @Input() qNum: number;
  answers: string[];
  btnContent: string;
  btnIsAvailable: boolean;
  selectedAns: number;
  correctAns: number;
  isCorrect: boolean[];
  isIncorrect: boolean[];
  @Output() loadNext = new EventEmitter();

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.answers = this.currentQ.incorrect_answers.concat(this.currentQ.correct_answer);
    this.shuffle(this.answers);
    this.btnContent = "OK";
    this.btnIsAvailable = false;
    this.selectedAns = 0;
    this.correctAns = 0;
    this.isCorrect = [false, false, false, false];
    this.isIncorrect = [false, false, false, false];
  }

  shuffle(array: any[]) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  onClick() {
    if (!this.correctAns) {
      if (this.selectedAns) {
        this.onOk();
      }
    }
    else {
      this.onContinue();
    }
  }

  onAnsClick(ans: number) {
    if (!this.correctAns)
      this.selectedAns = ans;
  }

  onContinue() {
    this.loadNext.emit();
  }

  onOk() {

    // calculate which answer is correct
    for (var i = 0; i < 4; ++i) {
      if (this.answers[i] === this.currentQ.correct_answer)
        this.correctAns = i + 1;
    }

    // peek appropriate ans to be marked as correct/incorrect
    for (var i = 1; i <= 4; ++i) {
      this.isCorrect[i - 1] = this.selectedAns == i && this.correctAns == i;
      this.isIncorrect[i - 1] = this.selectedAns == i && this.correctAns != i;
    }

    this.btnContent = "Continue";
  }
}