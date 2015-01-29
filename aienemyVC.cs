using UnityEngine;
using System.Collections;

public class aienemyVC : MonoBehaviour {
	public LayerMask groundLayer;
	RaycastHit2D raycastGround;
	RaycastHit2D raycastGroundLeft;
	RaycastHit2D raycastGroundRight;
	public float raycastLenght;
	public Vector3 scaleX;
	public float jumpForce;

	void Start(){
	InvokeRepeating("jmpWithRayCast",0f,0.5f);
	
	}
	void jmpWithRayCast()
	{
		scaleX = transform.localScale;
		raycastGroundLeft = Physics2D.Raycast(transform.position, Vector3.left, raycastLenght, groundLayer);
		raycastGroundRight = Physics2D.Raycast(transform.position, Vector3.right, raycastLenght, groundLayer);
		
		if (raycastGroundLeft)
		{
			scaleX.x = -0.65f;
			transform.localScale = scaleX;
			//yield return new WaitForSeconds(1.5f);
			rigidbody2D.AddForce(new Vector2(0f, jumpForce),ForceMode2D.Impulse);

		
		}
		
		if (raycastGroundRight)
		{	
			scaleX.x = 0.65f;
			transform.localScale = scaleX;
			//yield return new WaitForSeconds(1.5f);
			rigidbody2D.AddForce(new Vector2(0f, jumpForce),ForceMode2D.Impulse);

			
			
		}
		
	}

}