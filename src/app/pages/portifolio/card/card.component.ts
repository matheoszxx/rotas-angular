import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //fazendo injeção de dependencias
  constructor(private parametrizador: ActivatedRoute) {
    this.parametrizador.params.subscribe(result => console.log(result))

  }

  ngOnInit(): void {
  }

}
