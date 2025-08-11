import { Component } from '@angular/core';


@Component({
  selector: 'app-bestdeals',
  standalone: false,
  templateUrl: './bestdeals.component.html',
  styleUrl: './bestdeals.component.css'
})
export class BestdealsComponent {

  minPrice = 0;
  maxPrice = 1200;

  products = [
    { name: 'Smart Watch', price: '₹999.00', image: 'assets/bestdeals/1.png', sale: true },
    { name: 'Headphones', price: '₹799.00', image: 'assets/bestdeals/2.png', sale: false },
    { name: 'Bluetooth Speaker', price: '₹499.00', image: 'assets/bestdeals/3.png', sale: true },
    { name: 'Running Shoes', price: '₹1199.00', image: 'assets/bestdeals/4.png', sale: false },
    { name: 'Sports Bag', price: '₹699.00', image: 'assets/bestdeals/5.png', sale: false },
    { name: 'Sunglasses', price: '₹299.00', image: 'assets/bestdeals/6.png', sale: true },
    { name: 'Fitness Tracker', price: '₹599.00', image: 'assets/bestdeals/7.png', sale: false },
    { name: 'Camera Lens', price: '₹1099.00', image: 'assets/bestdeals/4.png', sale: false },
    { name: 'Wireless Mouse', price: '₹349.00', image: 'assets/bestdeals/8.png', sale: true },
    { name: 'Laptop Stand', price: '₹499.00', image: 'assets/bestdeals/9.png', sale: false }
  ];

  get filteredProducts() {
    return this.products.filter(product => {
      const numericPrice = this.extractNumericPrice(product.price);
      return numericPrice >= this.minPrice && numericPrice <= this.maxPrice;
    });
  }

  extractNumericPrice(price: string): number {
    const cleaned = price.replace(/[^\d.–]/g, '');
    const minValue = cleaned.split('–')[0];
    return parseFloat(minValue);
  }
}