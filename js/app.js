(function(){
  var app = angular.module('store',[]);

  app.controller('StoreController', function(){
    this.products = gems;
  });
  
  app.controller('ReviewController',function(){
    this.review = {};
    
    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};      
    };
  });
  
  app.controller('PanelController',function(){
    
  });
  
  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: "Some gems have hidden qualities beyond their luster beyond their size",
      specification: "Dodecahedron",
      images: [
        {
          full: 'images/dodecahedron-01-full.jpg',
          thumb: 'images/dodecahedron-01-thumb.jpg'
        }
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this product",
          author: "joe@thomas.com"
        },
        {
          stars: 1,
          body: "This product sucks",
          author: "tim@hater.com"
        }
      ],       
      canPurchase: true,
      soldOut: false
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: "Some gems have hidden qualities beyond their luster beyond their size",
      specification: "Pentagon",
      reviews: "Not yet",      
      canPurchase: true,
      soldOut: false
    }      
  ];

  app.directive('productTitle',function(){
    return {
      restrict: 'E',
      templateUrl: 'product-title.html'
    };
  });
  
  app.directive('productPanels',function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
                    this.tab = 1;

                    this.selectTab = function(setTab){
                      this.tab = setTab;
                    };

                    this.isSelected = function(checkTab){
                      return this.tab === checkTab;
                    };
      },
      controllerAs: 'panels'
    };
  });   
})();