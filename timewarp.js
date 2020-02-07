var lastPoint;
events.listen("player.tick",function(event){
	if(event.player.ticksExisted%100==0){
		var player=event.player;
		var current={x:player.x,y:player.y,z:player.z,pitch:player.pitch,yaw:player.yaw,mx:player.motionX,my:player.motionY,mz:player.motionZ};
		if(!lastPoint){
			lastPoint=current;
		}else{
			player.setPositionAndRotation(lastPoint.x,lastPoint.y,lastPoint.z,lastPoint.yaw,lastPoint.pitch);
			player.setMotion(lastPoint.mx,lastPoint.my,lastPoint.mz);
			lastPoint=current;
		}
	}
});
