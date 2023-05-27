import { Component, OnInit } from '@angular/core';
import quizz_questions from '../../../assets/data/quizz_questions.json'

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
  indexMaxPerguntas:number = 0
  terminou:boolean = false
  
  constructor(){ }

  ngOnInit(): void {
    if (quizz_questions) {
      this.terminou = false
      this.titulo = quizz_questions.title
      this.perguntas = quizz_questions.questions
      this.perguntaAtual = this.perguntas[this.indexPergunta]
      this.indexPergunta = 0
      this.indexMaxPerguntas = this.perguntas.length
    }
    console.log(this.indexPergunta)
    console.log(this.indexMaxPerguntas)
  }

  botaoEscolhido(valor:string){
    this.respostas.push(valor)
    this.proximoPasso()
    console.log(this.respostas)
    console.log("Clicou!")
  }

  async proximoPasso(){
    this.indexPergunta++
    if (this.indexMaxPerguntas > this.indexPergunta) {
      this.perguntaAtual = this.perguntas[this.indexPergunta]
    } else {
      const resultadoFinal:string = await this.checarResultado(this.respostas)
      this.terminou = true
      this.respostaEscolhida = quizz_questions.results[resultadoFinal as keyof typeof quizz_questions.results]
    }
  }

  async checarResultado(checagem:string[]){
    const resultado = checagem.reduce((anterior, atual, i, array)=>{
        if(
          array.filter(item => item === anterior).length >
          array.filter(item => item === atual).length
        ){
          return anterior
        }else{
          return atual
        }
    })
    return resultado
  }

}
