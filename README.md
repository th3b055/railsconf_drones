# RailsConf Drone Presentation

### Make Your Own Moves!
In the `copter.js` file, you can see the `groove` function we created yesterday. Before our meeting on Thursday, we'd like for you to create your own move that we'll incorporate into our choreography.

A file has been created with each of your names. In your file, __please create a sequence__ that contains a series of moves for the drone. Here's Steph's sequence: 

```javascript
function twirly_twist(){
	client.after(2000, function(){
		this.animate('yawDance', 1000);
	});
	client.after(1000, function(){
		this.animate('turnaround', 1000);
	});
	client.after(1000, function(){
		this.animate('yawDance', 1000);
	});
}
	
```
### Please Read the Documentation

Look back at the library to see the different moves the drones can do. [Here's the library](https://github.com/felixge/node-ar-drone).

### Hints About Moves

+ A move with 'theta' will move in relationship to the drone's front and back sides.
+ A move with 'phi' will move in relationship to the drone's left and right sides.
+ A move with 'yaw' with move about the imaginary vertical axis through the center of the drone.

Here is a list of moves we thought were awesome yesterday:

+ __DON'T USE__: `yawShake` and `vzDance`. They're boring.
+ `yawDance`, `phiDance`, `thetaDance`
+ `phiThetaMixed` (dips left, right, front, then back)
+ `doublePhiThetaMixed` (this one needs at least 4 seconds to go through one cycle)
+ __All__ the flips!
+ [Check the docs](https://github.com/felixge/node-ar-drone) for other moves you can use.