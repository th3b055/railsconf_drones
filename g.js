function upsidedown(){
  client.after(1000, function(){
    this.animate('flipLeft', 1000);
  });
  client.after(2000, function(){
    this.stop();
  });
  client.after(1000, function(){
    this.animate('flipRight', 1000);
  });
  client.after(2000, function(){
    this.stop();
  }); 
  client.after(2000, function(){
    this.animate('yawDance', 1000);
  });
  client.after(3000, function(){
    this.animate('phiThetaMixed', 1000);
  });
  client.after(6000, function(){
    this.animate('doublePhiThetaMixed', 1000);
  });
}