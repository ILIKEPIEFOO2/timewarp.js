var lastPoint;
events.listen("player.tick",function(event){
	if(event.player.ticksExisted%100==0){
		var current={x:event.player.x,y:event.player.y,z:event.player.z};
		if(!lastPoint){
			lastPoint=current;
		}else{
			event.player.setPosition(lastPoint.x,lastPoint.y,lastPoint.z);
			lastPoint=current;
		}
	}
});
