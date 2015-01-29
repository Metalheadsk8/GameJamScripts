#pragma strict
var speed : float = 20;
private var horizontalAxis : float;

public var jumpForce : float;
var scaleX : Vector3;
var raycastGround : RaycastHit2D;
var raycastLenght : float = 0.5;
function MovePlayer()
{	
   // raycastGround = Physics2D.Raycast(transform.position, Vector3.down, raycastLenght, groundLayer);
	if(Input.GetButtonDown("Jump"))
	{
	if (raycastGround)
	{
		rigidbody2D.AddForce(Vector2(0f, jumpForce),ForceMode2D.Impulse);
	}
	}
	else if (Input.GetAxis("Horizontal"))
	{
		horizontalAxis = speed*Input.GetAxis("Horizontal"); //GetAxis returns 0.xxx or -0.xxx
		rigidbody2D.velocity.x = horizontalAxis;
		FlipSprite();
	}

}
function FlipSprite()
{
	scaleX = transform.localScale;
	if (Input.GetAxis("Horizontal") > 0)
	{
		scaleX.x = 1;
		transform.localScale = scaleX;
	}
	else if (Input.GetAxis("Horizontal") < 0)
		{
			scaleX.x = -1;
			transform.localScale = scaleX;
		}
}

function Update()
{
	MovePlayer();
}