export function validateProduct(product) {
    const requiredFields = ['title', 'price', 'category'];
    
    const missingFields = requiredFields.filter(field => !product[field]);
    if (missingFields.length > 0) {
      return `Missing required fields: ${missingFields.join(', ')}`;
    }
  
    if (typeof product.price !== 'number' || product.price <= 0) {
      return 'Price must be a positive number';
    }
  
    if (typeof product.title !== 'string' || product.title.trim().length < 3) {
      return 'Title must be at least 3 characters long';
    }
  
    return null;
  }