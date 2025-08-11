import { Component } from '@angular/core';

interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}

@Component({
  selector: 'app-wishlist',
  standalone: false,
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
  wishlist: WishlistItem[] = [
    {
      id: 1,
      name: 'Morbi Mattis',
      price: 33.0,
      image: '/assets/products/1.png',
      inStock: true
    },
    {
      id: 2,
      name: 'Example Product',
      price: 49.99,
      image: '/assets/products/3.png',
      inStock: false
    }
  ];

  removeItem(id: number) {
    this.wishlist = this.wishlist.filter(item => item.id !== id);
  }

  addToCart(item: WishlistItem) {
    console.log('Added to cart:', item);
    // Add to cart service integration here
  }
}



