function groove(){
	client.after(2000, function(){
		this.left(0.1);
	});

	client.after(2000, function(){
		this.stop();
	});

	client.after(2000, function(){
		this.right(0.1);
	});

	client.after(2000, function(){
		this.stop();
	});

	client.after(2000, function(){
		this.left(0.1);
	});

	client.after(2000, function(){
		this.stop();
	});

	client.after(2000, function(){
		this.right(0.1);
	});

	client.after(2000, function(){
		this.stop();
	});
}


var arDrone = require('ar-drone');
var client = arDrone.createClient();

client.takeoff();

groove();
client.after(2000, function(){
	this.animate('wave', 4000);
});
groove();
client.after(2000, function(){
  this.land();
});


























