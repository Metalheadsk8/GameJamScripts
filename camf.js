var target : GameObject;
var zposition : float;
var yposition : float;

function Update()
{
transform.position.y = target.transform.position.y+1;
transform.position.x = target.transform.position.x;

//transform.position.y = yposition;
} 