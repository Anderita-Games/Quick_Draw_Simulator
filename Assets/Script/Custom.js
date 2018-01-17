#pragma strict
var Chambers : UnityEngine.UI.InputField;

function Continue () { 
	if (Chambers.text != "") {
		if (int.Parse(Chambers.text) != 0) {
			PlayerPrefs.SetInt("Endscore", int.Parse(Chambers.text));		
			Application.LoadLevel ("Game");
		}
	}
}