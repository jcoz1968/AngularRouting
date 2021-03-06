import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm: NgForm;

  errorMessage: string;
  product = { id: 1, productName: 'test', productCode: 'test' };

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent.data.subscribe(data => {
      this.product = data['resolvedData'].product;
    });
  }
}
