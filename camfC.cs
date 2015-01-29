using UnityEngine;
using System.Collections;



public class camfC : MonoBehaviour {

	public GameObject Target;
	public float zposition;
	public float yposition;
	public Vector3 position;
	void Update(){
		gameObject.transform.position = new Vector3 (Target.transform.position.x, Target.transform.position.y,zposition);

	
	}


}