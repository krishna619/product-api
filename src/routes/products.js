import { Router } from 'express';
import { ProductService } from '../services/productService.js';
import { validateProduct } from '../utils/validators.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await ProductService.getProducts();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const validationError = validateProduct(req.body);
    if (validationError) {
      return res.status(400).json({
        error: 'Validation failed',
        details: validationError
      });
    }

    const updatedProducts = await ProductService.addProduct(req.body);
    res.status(201).json({
      message: 'Product added successfully',
      data: updatedProducts
    });
  } catch (error) {
    next(error);
  }
});

export default router;