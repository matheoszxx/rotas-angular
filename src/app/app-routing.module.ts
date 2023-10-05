import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

const routes: Routes = [
  //1º - passamos o "path" e deixamos a rota vazia para acessarmos a tela principal "index"
  //2º - passamos o componente em que vai ta acessando
  //3º - passamos o "pathMatch" e colocamos dentro dele full, pois no path passamos a rota vazia
  {path: '', component: TitleComponent, pathMatch: 'full'},
  //http://localhost:4200/portfolio para acessarmos a outra página
  {path: 'portfolio/:id', component: CardComponent, pathMatch: 'prefix'},
  {path: '**', redirectTo:''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
