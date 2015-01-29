using UnityEngine;
using System.Collections;

public class aienemyC : MonoBehaviour {
	float xPos;
	float yPos;
	bool max;
	public bool vert;
	public float maxAmount;
	public float step;
	// Use this for initialization
	void Start () {
		xPos = transform.position.x;
		yPos = transform.position.y;
	}
	
	// Update is called once per frame
	void Update () {
		if (vert){
			if (transform.position.y >= yPos + maxAmount)
			{max = true;
			}
			
			else if (transform.position.y <= yPos)
			{max = false;
			}
			
		}
		else
		{
			if (transform.position.x >= xPos + maxAmount)
			{max = true;
			}
			
			else if (transform.position.x <= xPos)
			{max = false;
			}
			
		}

		if (vert) 
		{	
			if(!max)
			{transform.position = new Vector2(transform.position.x, transform.position.y + step);
			}
			else
			{transform.position = new Vector2(transform.position.x, transform.position.y - step);

			}
			
		}
		
		else
		{		if(!max)
			{transform.position = new Vector2(transform.position.x + step, transform.position.y);
			}
			
			else
			{transform.position = new Vector2(transform.position.x - step, transform.position.y);
			}
			
		}
	}
}