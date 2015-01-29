#pragma strict
function OnTriggerEnter2D (hitInfo : Collider2D) {
	if (hitInfo.name == "EndLight") // Player en version final
{
Boss1Trigger.triggerDerOn = true;
Boss1Trigger.triggerIzqOn = false;
Debug.Log("hola");
	}
	}
