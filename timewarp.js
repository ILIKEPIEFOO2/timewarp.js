var lastPoint;
events.listen("player.tick",function(event){
	if(event.player.ticksExisted%100==0){
		var player=event.player;
		var current={x:player.x,y:player.y,z:player.z,pitch:player.pitch,yaw:player.yaw,mx:player.motionX,my:player.motionY,mz:player.motionZ};
		if(!lastPoint){
			lastPoint={};
		}
		if(!lastPoint[player.id]){
			lastPoint[player.id]=current;
		}else{
			var lp=lastPoint[player.id]
			player.setPositionAndRotation(lp.x,lp.y,lp.z,lp.yaw,lp.pitch);
			player.setMotion(lp.mx,lp.my,lp.mz);
			lastPoint[player.id]=current;
		}
	}
});
