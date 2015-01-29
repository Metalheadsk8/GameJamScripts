#pragma strict

var groundLayer : LayerMask;
var raycastGround : RaycastHit2D;
var raycastGroundLeft : RaycastHit2D;
var raycastGroundRight : RaycastHit2D;
var raycastLenght : float = 0.5;

public var scaleX : Vector3;
public var jumpForce : float;
InvokeRepeating("jmpWithRayCast",0,2);
InvokeRepeating("girar",0,0.5);


function jmpWithRayCast()
{
	
	
	raycastGroundLeft = Physics2D.Raycast(transform.position, Vector3.left, raycastLenght, groundLayer);
	raycastGroundRight = Physics2D.Raycast(transform.position, Vector3.right, raycastLenght, groundLayer);
	
	if (raycastGroundLeft)
	{
		rigidbody2D.AddForce(Vector2(0f, jumpForce),ForceMode2D.Impulse);
		//scaleX.x = -0.65;
		//transform.localScale = scaleX;
	
	}
	
	if (raycastGroundRight)
	{
		rigidbody2D.AddForce(Vector2(0f, jumpForce),ForceMode2D.Impulse);
		//scaleX.x = 0.65;
		//transform.localScale = scaleX;
	
		
	}

}


function girar()
{
scaleX = transform.localScale;
raycastGroundLeft = Physics2D.Raycast(transform.position, Vector3.left, raycastLenght, groundLayer);
raycastGroundRight = Physics2D.Raycast(transform.position, Vector3.right, raycastLenght, groundLayer);

if (raycastGroundLeft)
	{
				scaleX.x = -0.65;
		transform.localScale = scaleX;
	}
if (raycastGroundRight)
	{
				scaleX.x = 0.65;
		transform.localScale = scaleX;
	}
}