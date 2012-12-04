var WebGlue;

WebGlue = (function() {

  function WebGlue(useCase, gui, storage) {
    var _this = this;
    this.useCase = useCase;
    this.gui = gui;
    this.storage = storage;
    Before(this.useCase, 'showAll', function() {
      return _this.storage.loadInitialData();
    });
    After(this.storage, 'dataLoaded', function() {
      return _this.useCase.setInitialData(_this.storage.getInitialData());
    });
    After(this.useCase, 'setInitialData', function() {
      return _this.gui.showCart(_this.useCase.getCart());
    });
    After(this.useCase, 'setInitialData', function() {
      return _this.gui.showProducts(_this.useCase.products);
    });
    After(this.useCase, 'setInitialData', function() {
      return _this.gui.showCategories(_this.useCase.categories);
    });
    After(this.gui, 'categoryClicked', function(category_id) {
      return _this.gui.showProducts(_this.useCase.getProducts(category_id));
    });
    After(this.gui, 'productClicked', function(product_id) {
      return _this.gui.showProduct(_this.useCase.getProduct(product_id));
    });
    After(this.gui, 'searchClicked', function(name) {
      return _this.gui.showProducts(_this.useCase.findProducts(name));
    });
    After(this.gui, 'addToCartClicked', function(product_id) {
      return _this.useCase.addProductToCart(product_id);
    });
    After(this.useCase, 'addProductToCart', function() {
      return _this.gui.showCart(_this.useCase.getCart());
    });
    After(this.useCase, 'addProductToCart', function(product_id) {
      return _this.storage.addProductToCart(product_id);
    });
    After(this.gui, 'removeFromCartClicked', function(product_id) {
      return _this.useCase.removeProductFromCart(product_id);
    });
    After(this.useCase, 'removeProductFromCart', function() {
      return _this.gui.showCart(_this.useCase.getCart());
    });
    After(this.useCase, 'removeProductFromCart', function(product_id) {
      return _this.storage.removeProductFromCart(product_id);
    });
    After(this.gui, 'orderClicked', function(buyer) {
      return _this.useCase.placeOrder(buyer);
    });
    After(this.useCase, 'placeOrder', function() {
      return _this.gui.showCart(_this.useCase.getCart());
    });
    After(this.useCase, 'placeOrder', function() {
      return _this.gui.showOrderConfirmation();
    });
    After(this.useCase, 'placeOrder', function() {
      return _this.storage.placeOrder(_this.useCase.buyer);
    });
  }

  return WebGlue;

})();
