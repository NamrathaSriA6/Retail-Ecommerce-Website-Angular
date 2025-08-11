import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  standalone: false,
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  minPrice = 0;
  maxPrice = 5000;
  products = [
    { name: 'Academy Red', price: '₹199.00', image: 'assets/products/1.png' },
    { name: 'Academy Neck', price: '₹219.00', image: 'assets/products/2.png' },
    { name: 'Academy Midi', price: '₹179.00', image: 'assets/products/3.png' },
    { name: 'Amazon Cam', price: '₹99.00 – ₹129.00', image: 'assets/products/4.png' },
    { name: 'Casual Vibe', price: '₹249.00', image: 'assets/products/5.png' },
    { name: 'Classic Black', price: '₹299.00', image: 'assets/products/6.png' },
    { name: 'Office Casual', price: '₹199.00', image: 'assets/products/7.png' },
    { name: 'Printed Tee', price: '₹129.00', image: 'assets/products/8.png' },
    { name: 'Monsoon Style', price: '₹279.00', image: 'assets/products/9.png' },
    { name: 'Ethnic Grace', price: '₹349.00', image: 'assets/products/10.png' },
    { name: 'Navy Flare', price: '₹229.00', image: 'assets/products/11.png' },
    { name: 'Floral Peach', price: '₹199.00', image: 'assets/products/12.png' },
    { name: 'Green Fusion', price: '₹189.00', image: 'assets/products/13.png' },
    { name: 'Pink Pop', price: '₹159.00', image: 'assets/products/14.png' },
    { name: 'Elegant Cream', price: '₹259.00', image: 'assets/products/15.png' },
    { name: 'Ocean Blue', price: '₹299.00', image: 'assets/products/16.png' }
  ];

  get filteredProducts() {
    return this.products.filter((product) => {
      const numericPrice = this.extractNumericPrice(product.price);
      return numericPrice >= this.minPrice && numericPrice <= this.maxPrice;
    });
  }

  // Convert price string like ₹99.00 – ₹129.00 to a number (use the minimum value)
  extractNumericPrice(price: string): number {
    const cleaned = price.replace(/[^\d.–]/g, ''); // Keep digits, dot, and dash
    const minValue = cleaned.split('–')[0]; // If range, take the first part
    return parseFloat(minValue);
  }

}
