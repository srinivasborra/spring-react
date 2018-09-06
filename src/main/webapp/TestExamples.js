
 	class Point{
 		x:number,
 		y:number,
 		
 		draw(){
 			console.log("X="+this.x +" Y="+this.y);
 		}
 		getDistance(){
 			console.log("Distance");
 		}
 	}
 	
 	let point = new Point();
 	point.x=1;
 	point.y=2;
 	pint.draw();