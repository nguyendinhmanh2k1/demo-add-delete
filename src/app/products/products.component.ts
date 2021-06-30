import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  myClass = 'table-bordered';
  statusDirective = false;

  product: Product = {
    id: 1,
    name: '',
    price: 0
  };

  products: Product[] = [
    {
      id: 1,
      name: 'product 1',
      price: 200
      // status: false,
      // desc: 'Mo ta san pham 1',
      // img:
      //   'https://salt.tikicdn.com/cache/280x280/ts/product/89/a2/66/69f041ba7b0cb97acc01f52ac9ab5c40.jpg'
    },
    {
      id: 2,
      name: 'product 2',
      price: 300
      // status: false,
      // desc: 'Mo ta san pham 2',
      // img:
      //   'https://salt.tikicdn.com/cache/280x280/ts/product/89/a2/66/69f041ba7b0cb97acc01f52ac9ab5c40.jpg'
    },
    {
      id: 3,
      name: 'product 3',
      price: 31100
      // status: false,
      // desc: 'Mo ta san pham 3',
      // img:
      //   'https://salt.tikicdn.com/cache/280x280/ts/product/89/a2/66/69f041ba7b0cb97acc01f52ac9ab5c40.jpg'
    }
  ];
  constructor() {}

  ngOnInit() {}

  changeStatus() {
    this.statusDirective = !this.statusDirective;
  }
  removeItem(id) {
    this.products = this.products.filter(item => item.id != id);
  }
  onSubmit(event) {
    event.preventDefault();
  }
  onAddProduct() {
    this.products.push(this.product);
  }
}
