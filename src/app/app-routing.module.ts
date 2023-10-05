import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  //1º - passamos o "path" e deixamos a rota vazia para acessarmos a tela principal "index"
  //2º - passamos o componente em que vai ta acessando
  //3º - passamos o "pathMatch" e colocamos dentro dele full, pois no path passamos a rota vazia
  {path: '', component: TitleComponent, pathMatch: 'full'},
  //portfolio
  //portfolio/1
  //portfolio/1/abc
  {path: 'portfolio', component: CardComponent, children: [
    {path: ':id', component: CardComponent},
    {path: ':id/:token', component: CardComponent},
  ]},
  {path: '**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

