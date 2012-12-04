var ApiStorage;

ApiStorage = (function() {

  function ApiStorage() {
    this.products = [];
    this.categories = [];
    this.cart = [];
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
    this.categories = data.categories;
    return this.cart = data.cart;
  };

  ApiStorage.prototype.getInitialData = function() {
    return {
      categories: this.categories,
      products: this.products,
      cart: this.cart
    };
  };

  ApiStorage.prototype.addProductToCart = function(product_id) {
    return $.ajax('/api/add_product_to_cart', {
      beforeSend: function(xhr) {
        return xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
      },
      type: 'post',
      dataType: 'json',
      data: {
        product_id: product_id
      }
    });
  };

  ApiStorage.prototype.removeProductFromCart = function(product_id) {
    return $.ajax('/api/remove_product_from_cart', {
      beforeSend: function(xhr) {
        return xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
      },
      type: 'post',
      dataType: 'json',
      data: {
        product_id: product_id
      }
    });
  };

  ApiStorage.prototype.placeOrder = function(buyer) {
    return $.ajax('/api/place_order', {
      beforeSend: function(xhr) {
        return xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'));
      },
      type: 'post',
      dataType: 'json',
      data: {
        first_name: buyer.first_name,
        last_name: buyer.last_name,
        address: buyer.address
      }
    });
  };

  ApiStorage.prototype.dataLoaded = function() {};

  return ApiStorage;

})();
