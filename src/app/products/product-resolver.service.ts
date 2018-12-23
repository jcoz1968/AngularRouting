import { catchError, map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { Product, ProductResolved } from './product';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductResolved> {

  constructor(private productService: ProductService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductResolved> {
    const id = +route.paramMap.get('id');
    if (isNaN(+id)) {
      const msg = `Product id was not a number ${id}`;
      // console.error(msg);
      return of({ product: null, error: msg });
    }
    // return this.productService.getProduct(id);
    return this.productService.getProduct(+id)
      .pipe(
        map(product => ({ product: product })),
        catchError(error => {
          const msg = `Retrieval error ${error}`;
          return of({ product: null, error: msg });
        })
      );
  }
}
