var LocalStorage;

LocalStorage = (function() {

  function LocalStorage() {
    this.products = [];
    this.categories = [];
  }

  LocalStorage.prototype.loadInitialData = function() {
    this.products = [
      {
        name: "Test",
        price: 12,
        id: 1,
        category_id: 1,
        description: "test"
      }, {
        name: "Test test",
        price: 32,
        id: 2,
        category_id: 1,
        description: "test"
      }, {
        name: "Abc",
        price: 59,
        id: 3,
        category_id: 2,
        description: "test"
      }
    ];
    return this.categories = [
      {
        name: "Bakes",
        id: 1
      }, {
        name: "Cakes",
        id: 2
      }, {
        name: "Fake+makes",
        id: 3
      }
    ];
  };

  LocalStorage.prototype.getInitialData = function() {
    return {
      categories: this.categories,
      products: this.products
    };
  };

  return LocalStorage;

})();
