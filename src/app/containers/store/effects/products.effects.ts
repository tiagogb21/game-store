import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { LOAD_PRODUCTS } from 'src/app/data/data';
import { Actions, ofType } from '@ngrx/effects';

import {
  LoadProductsFail,
  LoadProductsSuccess,
} from '../actions/products.actions';

@Injectable()
export class HeroesEffects {
  constructor(private actions$: Actions, private service: any) {}
  // npm install ng-effects
  @Effect()
  loadHeroes$ = this.actions$.ofType(LOAD_PRODUCTS).pipe(
    switchMap(() =>
      this.service.getProducts().pipe(
        map((products: any) => new LoadProductsSuccess(products)),

        /* return an observable of the error */
        catchError((error: any) => of(new LoadProductsFail(error)))
      )
    )
  );
  @Effect()
  createHeroSuccess$ = this.actions$.ofType(CREATE_PRODUCTS_SUCCESS)
    pipe(
        map(
            (action: fromActions.CreateHeroSuccess) => action.payload),
        map(
           (hero: fromCore.Hero) => new fromRoot.Go({
               path: ["/heroes/detail", hero.id]
           })
        )
    );
}
