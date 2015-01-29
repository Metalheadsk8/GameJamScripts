#pragma strict

var player : GameObject;
var tienesombrero : boolean;

function OnTriggerEnter2D(hitCheck : Collider2D)
{
	if (hitCheck.name == "EndLight")
	{
		if (tienesombrero)
		{ tienesombrero = false;

		}
		else 
		{
			Application.LoadLevel (0);//Resets the scene, if static variables reasign them in Awake()
	Debug.Log ("asd");
		}
		
	}	
}