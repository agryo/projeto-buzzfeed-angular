import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  titulo:string = ""
  perguntas:any
  perguntaAtual:any
  respostas:string[] = []
  respostaEscolhida:string = ""
  indexPergunta:number = 0
  indexMaxPergunta:number = 0
  terminou:boolean = false
  
  constructor(){ }

  ngOnInit(): void {
  }

}
