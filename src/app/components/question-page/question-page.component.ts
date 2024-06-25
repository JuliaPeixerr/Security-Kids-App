import { Component, OnInit } from '@angular/core';
import { Answer, Question, answers, questions } from 'src/app/domain';

@Component({
    selector: 'question-page',
    templateUrl: './question-page.component.html',
    styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
    randomQuestion?: Question;
    answersResult: Answer[] = [];

    constructor() { }

    ngOnInit() {
        this.getRandomQuestion();
    }
    
    private getRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        this.randomQuestion = questions[randomIndex];
        this.getAnswers();
    }

    private getAnswers() {
        var results = answers.filter(a => this.randomQuestion?.id == a.questionCode);
        this.answersResult = results;
    }

    confirm(answer: Answer) {
        console.log(answer);

        if (answer.rigth) {
            // notification sucesso
        }
        else {
            // notification errou
        }
    }
}