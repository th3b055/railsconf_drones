function cha_cha(){
  client.after(2000, function(){
    this.animate('thetaDance', 1000);
  });
    client.after(2000, function(){
    this.stop();
  });
  client.after(1000, function(){
    this.animate('yawDance', 1000);
  });
  client.after(1000, function(){
    this.animate('flipLeft', 1000);
  });
  client.after(2000, function(){
    this.stop();
  });
    client.after(1000, function(){
    this.animate('flipRight', 1000);
  });
}