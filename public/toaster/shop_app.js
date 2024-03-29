var ShopApp;

ShopApp = (function() {

  function ShopApp() {
    var glue, gui, storage, useCase;
    useCase = new ShopUseCase();
    storage = new ApiStorage();
    gui = new WebGui();
    glue = new WebGlue(useCase, gui, storage);
    useCase.showAll();
  }

  return ShopApp;

})();

new ShopApp();
