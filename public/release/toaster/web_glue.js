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
    After(this.storage, 'loadInitialData', function() {
      return _this.useCase.setInitialData(_this.storage.getInitialData());
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
    After(this.gui, 'addToCartClicked', function(product_id) {
      return _this.useCase.addProductToCart(product_id);
    });
    After(this.useCase, 'addProductToCart', function() {
      return _this.gui.showCart(_this.useCase.getCart());
    });
    After(this.gui, 'removeFromCartClicked', function(product_id) {
      return _this.useCase.removeProductFromCart(product_id);
    });
    After(this.useCase, 'removeProductFromCart', function() {
      return _this.gui.showCart(_this.useCase.getCart());
    });
    After(this.gui, 'orderClicked', function() {
      return _this.useCase.placeOrder();
    });
    After(this.useCase, 'placeOrder', function() {
      return _this.gui.showCart(_this.useCase.getCart());
    });
    After(this.useCase, 'placeOrder', function() {
      return _this.gui.showOrderConfirmation();
    });
  }

  return WebGlue;

})();
