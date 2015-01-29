#pragma strict

public static class Boss1Trigger
{	
	public var triggerDerOn : boolean = false;
	public var triggerIzqOn : boolean = false;

}
	

function Update()
{

if(Boss1Trigger.triggerDerOn == true)
	{

	animation.Play ("boss1der");
	
	}
if (Boss1Trigger.triggerIzqOn == true)
	{
	
	animation.Play ("boss1iz");
	}

}

