export class Cache {
    constructor(duration) {
      this.duration = duration;
      this.store = new Map();
    }
  
    set(key, value) {
      this.store.set(key, {
        value,
        timestamp: Date.now()
      });
    }
  
    get(key) {
      const data = this.store.get(key);
      if (!data) return null;
      
      if (Date.now() - data.timestamp > this.duration) {
        this.store.delete(key);
        return null;
      }
      
      return data.value;
    }
  }