import { Component } from '@angular/core';


interface Product {
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  sale?: boolean;
  colors?: string[];
}

@Component({
  selector: 'app-newproducts',
  standalone: false,
  templateUrl: './newproducts.component.html',
  styleUrl: './newproducts.component.css'
})
export class NewproductsComponent {

  products: Product[] = [];
  filteredProducts: Product[] = [];

  // Filters
  minPrice: number = 0;
  maxPrice: number = 1500;
  selectedColors: string[] = [];

  // Sorting
  sortOption: string = 'default';

  constructor() {}

  ngOnInit(): void {
    // Sample product list (replace with API call)
    this.products = [
      {
        name: 'Erantolerituga',
        price: 310,
        image: 'assets/bestdeals/4.png',
        colors: ['black', 'yellow']
      },
      {
        name: 'Gurno daneo',
        price: 320,
        oldPrice: 420,
        image: 'assets/bestdeals/5.png',
        sale: true,
        colors: ['red']
      },
      {
        name: 'Gustone',
        price: 400,
        image: 'assets/bestdeals/10.png',
        colors: ['gold']
      },
      {
        name: 'Modellemplus',
        price: 250,
        oldPrice: 340,
        image: 'assets/bestdeals/11.png',
        sale: true,
        colors: ['white']
      },
      {
        name: 'Quisqgwe',
        price: 101,
        oldPrice: 1360,
        image: 'assets/bestdeals/12.png',
        colors: ['orange']
      },
      {
        name: 'Quisque diam',
        price: 410,
        image: 'assets/bestdeals/13.png',
        colors: ['violet']
      },
      {
        name: 'Red justo',
        price: 330,
        image: 'assets/bestdeals/14.png',
        colors: ['red']
      },
      {
        name: 'Riusse rec',
        price: 300,
        oldPrice: 410,
        image: 'assets/bestdeals/15.png',
        sale: true,
        colors: ['pink']
      },
      {
        name: 'Ruisque diat',
        price: 221,
        image: 'assets/bestdeals/16.png',
        colors: ['pink']
      },
      {
        name: 'Sed tempus',
        price: 440,
        image: 'assets/bestdeals/17.png',
        colors: ['black']
      },
      {
        name: 'Sedtempu',
        price: 440,
        image: 'assets/bestdeals/18.png',
        colors: ['blue']
      }
      // ... more products
    ];

    this.filteredProducts = [...this.products];
  }

  // Price filter
  filterByPrice(): void {
    this.filteredProducts = this.products.filter(p => {
      return p.price >= this.minPrice && p.price <= this.maxPrice;
    });
    this.applyColorFilter();
    this.applySort();
  }

  // Color filter
  toggleColor(color: string): void {
    if (this.selectedColors.includes(color)) {
      this.selectedColors = this.selectedColors.filter(c => c !== color);
    } else {
      this.selectedColors.push(color);
    }
    this.applyColorFilter();
    this.applySort();
  }

  applyColorFilter(): void {
    if (this.selectedColors.length > 0) {
      this.filteredProducts = this.filteredProducts.filter(p =>
        p.colors?.some(c => this.selectedColors.includes(c.toLowerCase()))
      );
    }
  }

  // Sorting
  applySort(): void {
    if (this.sortOption === 'low-high') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'high-low') {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }

  onSortChange(option: string): void {
    this.sortOption = option;
    this.applySort();
  }


}
