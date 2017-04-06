(function(){
	var app = angular.module('store',[]);

	
	var gem = {
		name: 'Dodecahedron',
		price: 2.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false


	}

	var gems = [
	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img9.jpg'

	},
	{
		name: 'Zirconium',
		price: 3.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img1.jpg'
	},
	{
		name: 'Hexagonal',
		price: 4.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img3.jpg'
	},
	{

		name: 'violeta',
		price: 2.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img3.jpg'
	},
	{
			name: 'adularia',
		price: 2.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img4.jpg'
	},
	{
			name: 'amatista',
		price: 2.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img5.jpg'
	},
	{
			name: 'amazonita',
		price: 2.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img6.jpg'
	},
	{
			name: 'albita',
		price: 2.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img7.jpg'
	},
	{
			name: 'albastro',
		price: 2.95,
		description: 'aliquid, amet molestiae veritails odio',
		canPurchase: false,
		soldOut: false,
		img:'public/img/img8.jpg'
	},
	


	];

	app.controller('StoreController',function(){
		this.products = gems;

	});
	
})();


