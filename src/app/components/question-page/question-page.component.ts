import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer, Question, answers, questions } from 'src/app/domain';

@Component({
    selector: 'question-page',
    templateUrl: './question-page.component.html',
    styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
    randomQuestion?: Question;
    answersResult: Answer[] = [];

    constructor(
        private router: Router
    ) { }

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
            this.router.navigate(['']);
        }
        else {
            // notification errou
        }
    }
}