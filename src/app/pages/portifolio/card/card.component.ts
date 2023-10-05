import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //fazendo injeção de dependencias
  //http://localhost:4200/portfolio/{result == 1}
  constructor(private parametrizador: ActivatedRoute) {
    //aqui estamos usando o "subscribe" para observar mudanças em um objeto observavel que é o "params"
    this.parametrizador.params.subscribe(result => console.log(result))

    this.parametrizador.queryParams.subscribe(result => console.log(result))
  }

  ngOnInit(): void {
  }

}
