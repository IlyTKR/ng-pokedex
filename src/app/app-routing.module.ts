import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListePokemonComponent } from './liste-pokemon/liste-pokemon.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path:'pokemons', component: ListePokemonComponent},
  { path:'pokemon/:id', component: DetailPokemonComponent},
  { path:'', redirectTo:"pokemons", pathMatch:'full'},
  { path:'**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
