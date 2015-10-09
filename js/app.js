(function () {												// wrapping up JS in enclosure -> good habbit
	var app  = angular.module('store' , [] );
	app.controller('StoreController' , function() {			//controller is attacthed to (inside) our app
		this.myOwnName = gem;									// product is a property of controller
	});
	
	/*ABOVE CODE CAN AlSO BE WRITTEN AS -
	app.controller('MainController', ['$scope', function($scope) { 
	  $scope.title = 'My own Tim'; 
	}]);
	*/
	
	//NEW CONTROLLER FOR TAB
	
	app.controller('PanelController' , function() {
		this.tab = 1;
		this.selectTab = function (tab) {
			this.tab = tab;
		}
		this.isSelected = function (tabVal) {
			return this.tab === tabVal;					// **********this.tab === tabVal || 1 ******** if no argument passed, then tab = 1
		}
	});
	
	var gem = [
	{
		name : 'KIARA',
		price : 2.95,
		description : 'Golden Sterling Silver Ring',
		specification : '2.5gm STERLING SILVER golden ring with SKU : KI569JW44VGXINDFAS',
		review : '4.0 - Good',
		canPurchase : false,
		soldOut : false,
		
		indate : new Date (2015, 10, 1, 21, 00, 00, 00),
		
		images: [
        "images/gem-01.jpg",
        "images/gem-011.jpg",
      ],
	  
		img : [
		{
			full : 'images/gem-01.jpg',
			thumb  : 'images/gem-01_thumb.jpg'			//not using ....just for understanding purpose
		}
		],
		
	},
	{
		name : 'Ziveg',
		price : 12.95,
		description : 'Dark Smoke Grey 92.5 Sterling Silver Ring',
		specification : 'Ring with weight 5gm. 92.5 Sterling Silver. Stone : SWAROVSKI ZIRCONIA ',
		review : '4.7 - Very Excellent product!',
		
		canPurchase : true,
		soldOut : false,
		
		indate : new Date ('2015', '06' , '18' ),
		
		images: [],
	  
	  img : [
		{
			full : 'images/gem-02.jpg',
			thumb  : 'images/gem-02_thumb.jpg'
		}
		],
	},
	{
		name : 'Sapphire',
		price : 2.33,
		description : 'This is an gem saphire of blue in colour',
		specification : 'Not yet',
		review : 'Great',
		
		canPurchase : false,
		soldOut : true,
		
		indate : new Date ('2015', '03' , '23' ),
		
		images: [
        "images/gem-03.jpg",
        "images/gem-031.jpg",
        "images/gem-032.jpg"
      ],
	  
	  img : [
		{
			full : 'images/gem-03.jpg',
			thumb  : 'images/gem-03_thumb.jpg'
		}
		],
	}
	];
}) ()