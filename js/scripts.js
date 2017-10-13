function Phone(brand, price, color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.printInfo = function() {
		console.log('The phone brand is ' + this.brand +', color is ' + this.color + ' and the price is ' + this.price +'.');
	};
}

var iPhoneS6 = new Phone('Apple', 4500, 'white');
var samsungGalaxy6S = new Phone('Samsung', 2999, 'black');
var onePlusOne = new Phone('OnePlus', 2499, 'silver');
var kodillaPhone = new Phone('Kodilla', 10295, 'green');
var xperiaXZ = new Phone('Sony', 2899, 'gray');
var googlePixel = new Phone('Google', 3999, 'white');

/*Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand +", color is " + this.color + " and the price is " + this.price +".");
}*/

iPhoneS6.printInfo();
samsungGalaxy6S.printInfo();
onePlusOne.printInfo();
kodillaPhone.printInfo();
xperiaXZ.printInfo();
googlePixel.printInfo();

Phone.prototype.category = 'premium';

console.log(kodillaPhone.category);

Phone.prototype.canIAfford = function () {
	if (this.price > 3000) console.log("I can't afford " + this.brand);
	else console.log("I'll buy " + this.brand);
};

googlePixel.canIAfford();
onePlusOne.canIAfford();

//Nowa funkcja
Phone.prototype.applyDiscount = function (number) {
	if (number > this.price) console.log('Bez przesady!');
	else this.price -= number;
};

iPhoneS6.applyDiscount(1000);
console.log('Nowa, atrakcyjna cena, tylko u nas!');
iPhoneS6.printInfo();
