var ApiStorage;

ApiStorage = (function() {

  function ApiStorage() {
    this.products = [];
    this.categories = [];
  }

  ApiStorage.prototype.loadInitialData = function() {
    var _this = this;
    return $(function() {
      return $.ajax('/api', {
        dataType: 'json',
        success: function(response) {
          _this.setData(response);
          return _this.dataLoaded();
        }
      });
    });
  };

  ApiStorage.prototype.setData = function(data) {
    this.products = data.products.map(function(product) {
      product.price = parseFloat(product.price);
      return product;
    });
    return this.categories = data.categories;
  };

  ApiStorage.prototype.getInitialData = function() {
    return {
      categories: this.categories,
      products: this.products
    };
  };

  ApiStorage.prototype.dataLoaded = function() {};

  return ApiStorage;

})();
