#pragma strict

function OnTriggerEnter2D (hitInfo : Collider2D) {
	if (hitInfo.name == "EndLight") // Player en version final
{ Boss1Trigger.triggerIzqOn = true;
  Boss1Trigger.triggerDerOn = false;

	}
	}