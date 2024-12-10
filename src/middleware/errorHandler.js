export const errorHandler = (err, req, res, next) => {
    console.error('Error:', err.stack);
    res.status(500).json({
      error: 'Something went wrong!',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  };