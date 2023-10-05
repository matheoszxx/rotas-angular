import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //fazendo injeção de dependencias
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
    ) {
    //aqui estamos usando o "subscribe" para observar mudanças em um objeto observavel que é o "params"
    //http://localhost:4200/portfolio/{result == 1}
    this.parametrizador.params.subscribe(result => console.log(result))

    this.parametrizador.firstChild?.params.subscribe(result => console.log(result))

    //http://localhost:4200/portfolio/1?name=matheus&token=123
    this.parametrizador.queryParams.subscribe(result => console.log(result))
  }

  ngOnInit(): void {
    //após 5000ms vai ser redirecionado (setInterval serve para dar um intervalo)
    // setInterval(()=> {
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
