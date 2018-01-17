#pragma strict
var HELP : GameObject;

function Play () {
	Application.LoadLevel ("Game");
	PlayerPrefs.SetInt("Endscore", 10);
}

function Custom () {
	Application.LoadLevel ("Custom");
}

function Quit () {
	Application.Quit();
}

function Helper () {
	HELP.SetActive(true);
}	