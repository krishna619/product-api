import axios from 'axios';
import { Cache } from '../utils/cache.js';
import { config } from '../config/config.js';

const cache = new Cache(config.cacheDuration);
const PRODUCTS_CACHE_KEY = 'products';

export class ProductService {
  static async getProducts() {
    const cachedProducts = cache.get(PRODUCTS_CACHE_KEY);
    if (cachedProducts) return cachedProducts;

    try {
      const response = await axios.get(`${config.apiBaseUrl}/products`);
      const products = response.data.products;
      cache.set(PRODUCTS_CACHE_KEY, products);
      return products;
    } catch (error) {
      throw new Error('Failed to fetch products from external API');
    }
  }

  static async addProduct(product) {
    const products = await this.getProducts();
    const maxId = Math.max(...products.map(p => p.id));
    const newProduct = {
      ...product,
      id: maxId + 1
    };

    products.push(newProduct);
    cache.set(PRODUCTS_CACHE_KEY, products);
    return products;
  }
}