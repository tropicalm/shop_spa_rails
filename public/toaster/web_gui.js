var WebGui;

WebGui = (function() {

  function WebGui() {
    var _this = this;
    $(function() {
      $.vegas({
        src: 'img/cookies.jpg'
      });
      $.vegas('overlay', {
        src: 'lib/jquery.vegas/overlays/06.png'
      });
      $(".menu-title").on("click", function(e) {
        $(".menu-box").hide();
        return $(this).next().show();
      });
      $("#category-box").on("click", "a.category-link", function(e) {
        var id;
        id = $(e.currentTarget).data('id');
        return _this.categoryClicked(id);
      });
      $("#product-box").on("click", "a.product-link", function(e) {
        var id;
        id = $(e.currentTarget).data('id');
        return _this.productClicked(id);
      });
      $("#product-modal").on("click", "button.add-to-cart", function(e) {
        var product_id;
        product_id = $(e.currentTarget).data('product-id');
        console.log(product_id);
        _this.addToCartClicked(product_id);
        return $('#product-modal').modal('hide');
      });
      $("#cart-box").on("click", "a.product-link", function(e) {
        var id;
        id = $(e.currentTarget).data('id');
        return _this.removeFromCartClicked(id);
      });
      $("#cart-box").on("click", "a.order-link", function(e) {
        _this.parseTemplate("#order-template", "#order-modal", {});
        return $('#order-modal').modal('show');
      });
      return $("#order-modal").on("submit", "form.order-form", function() {
        _this.orderClicked();
        return false;
      });
    });
  }

  WebGui.prototype.showProducts = function(products) {
    var _this = this;
    return $(function() {
      var context;
      context = {
        products: products
      };
      return _this.parseTemplate("#products-list-template", "#product-box", context);
    });
  };

  WebGui.prototype.showCategories = function(categories) {
    var _this = this;
    return $(function() {
      var context;
      context = {
        categories: categories
      };
      return _this.parseTemplate("#category-template", "#category-box", context);
    });
  };

  WebGui.prototype.showProduct = function(product) {
    this.parseTemplate("#product-template", "#product-modal", product);
    return $('#product-modal').modal('show');
  };

  WebGui.prototype.showCart = function(cart) {
    $(".menu-box").hide();
    $("#cart-box").show();
    return this.parseTemplate("#cart-template", "#cart-box", cart);
  };

  WebGui.prototype.showOrderConfirmation = function() {
    $("#cart-box").hide();
    return this.parseTemplate("#order-confirmation-template", "#order-modal", {});
  };

  WebGui.prototype.categoryClicked = function(id) {};

  WebGui.prototype.productClicked = function(id) {};

  WebGui.prototype.addToCartClicked = function(product_id) {};

  WebGui.prototype.removeFromCartClicked = function(product_id) {};

  WebGui.prototype.orderClicked = function() {};

  WebGui.prototype.parseTemplate = function(source_element, html_element, context) {
    var html, source, template;
    source = $(source_element).html();
    template = Handlebars.compile(source);
    html = template(context);
    return $(html_element).html(html);
  };

  return WebGui;

})();
