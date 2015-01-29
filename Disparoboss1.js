public var Boca:GameObject;
public var ShootB:GameObject;
public var EndLight:GameObject;
var VelocidadShootB = 3;
InvokeRepeating("ActiveRepeat",0.01,10);
InvokeRepeating("CancelRepeat",0,9.99);

function Start () {
EndLight=GameObject.Find("EndLight");
Boca=GameObject.Find("Boca");
ShootB=GameObject.Find("ShootB");
//yield CancelRepeat();

}


function WaitAndShoot(){

	//yield WaitForSeconds (0.5);
	print ("WaitAndShoot "+ Time.time);
	var NewShoot:GameObject=Instantiate (ShootB, Boca.transform.position , EndLight.transform.rotation);
	NewShoot.AddComponent("DestroyShootB");
	
	
	if (EndLight.transform.position.x < -12.35){
	NewShoot.rigidbody2D.AddRelativeForce(new Vector2(-VelocidadShootB,EndLight.transform.position.y),ForceMode2D.Impulse);
	}
	if (EndLight.transform.position.x > -12.35){
	NewShoot.rigidbody2D.AddRelativeForce(new Vector2(VelocidadShootB,EndLight.transform.position.y),ForceMode2D.Impulse);
	}
	//if (EndLight.transform.position.x == -12 && EndLight.transform.position.y < 2 ){
	//NewShoot.rigidbody2D.AddRelativeForce(new Vector2(0,0),ForceMode2D.Impulse);
	//Debug.Log("heeeey");
	//}
	
	}

function CancelRepeat(){

CancelInvoke("WaitAndShoot");
}
function ActiveRepeat(){
InvokeRepeating("WaitAndShoot",5,1);
}



 