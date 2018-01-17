#pragma strict
var Bang:AudioClip;
var Click:AudioClip;
var Reload:AudioClip;

var redscore : int;
var bluescore : int;
var endscore : int;
var loser : String;
var shooter : String;

var playerred : UnityEngine.UI.Text;
var playerblue : UnityEngine.UI.Text;

var Title : UnityEngine.UI.Text;
var Sub : UnityEngine.UI.Text;

var round : String; //rounds stage
var rounds : int; //round number

var shotred : String;
var shotblue : String;

//red shit
var image1 : GameObject;
var image2 : GameObject;
var image3 : GameObject;
var image4 : GameObject;
var image5 : GameObject;

//blue shit
var image6 : GameObject;
var image7 : GameObject;
var image8 : GameObject;
var image9 : GameObject;
var image10 : GameObject;

function Start () {
	GetComponent.<AudioSource>().PlayOneShot(Reload);
	redscore = 0;
	bluescore = 0;
	rounds = 1;
	round = "pre";
	endscore = PlayerPrefs.GetInt("Endscore");
	RoundStart ();
}

function Update () {
	playerred.text = "Score: " + redscore;
	playerblue.text = "Score: " + bluescore;
	
	if (shotred == "true") {
		RedGuns ();
		shotred = "";
	}
	if (shotblue == "true") {
		BlueGuns ();
		shotblue = "";
	}
	
	if (bluescore == endscore || redscore == endscore) {
		Title.text = "GAME OVER";
		round = "done";
		if (bluescore == endscore) {
			Title.color = Color.blue;
			Sub.color = Color.blue;
		}else if (redscore == endscore) {
			Title.color = Color.red;
			Sub.color = Color.red;
		}
	}
	
	if (round == "active") {
		if (shooter == "blue") {
			bluescore ++;
			loser = "red";
			Subs ();
			Title.color = Color.red;
			shooter = "";
			rounds ++;
			if (round != "done") {
				round = "pre";
			}
			RoundStart ();
		}else if (shooter == "red") {
			redscore ++;
			loser = "blue";
			Subs ();
			Title.color = Color.red;
			shooter = "";
			rounds ++;
			if (round != "done") {
				round = "pre";
			}
			RoundStart ();
		}
	}
}

function RoundStart () {
	Title.text = "ROUND " + rounds + " IS NOT ACTIVE";
	yield WaitForSeconds (1);
	GetComponent.<AudioSource>().PlayOneShot(Reload);
	if (round == "pre") {
		yield WaitForSeconds (Random.Range( 0.1f, 5.1f));
		round = "active";
		if (Title.text == "Blue Fouled" || Title.text == "Red Fouled") {
			
		}else {
		
			Title.text = "ROUND " + rounds + " IS ACTIVE";
			Title.color = Color.green;
		}
	}
}

function Subs () {
	var number = Random.Range( 1, 11);
	if (number == 1) {
		Sub.text = shooter + " won that one";
	}else if (number == 2) {
		Sub.text = loser + " got rekt";
	}else if (number == 3) {
		Sub.text = loser + " didnt have a chance!";
	}else if (number == 4) {
		Sub.text = shooter + " probs cheated";
	}else if (number == 5) {
		Sub.text = "Why does " + loser + " even try?";
	}else if (number == 6) {
		Sub.text = "how is " + shooter + " so fast?";
	}else if (number == 7) {
		Sub.text = loser + " lost this one";
	}else if (number == 8) {
		Sub.text = loser + " got pwned";
	}else if (number == 9) {
		Sub.text = loser + " failed!";
	}else if (number == 10) {
		Sub.text = shooter + " is a boss!";
	}
}

function red () {
	if (round == "pre") {
		Sub.text = "Red Fouled";
		rounds ++;
		redscore --;
		RoundStart ();
	}else {
		shooter = "red";
	}
	shotred = "true";
}

function RedGuns () {
	if (round != "pre") {
		image1.SetActive (false);
		image2.SetActive (true);
		yield WaitForSeconds (.1);
		image2.SetActive (false);
		image3.SetActive (true);
		yield WaitForSeconds (.1);
		image3.SetActive (false);
		image4.SetActive (true);
		yield WaitForSeconds (.1);
		image4.SetActive (false);
		image5.SetActive (true);
		GetComponent.<AudioSource>().PlayOneShot(Bang);
		yield WaitForSeconds (.1);
		image5.SetActive (false);
	}else {
		image1.SetActive (false);
		image2.SetActive (true);
		yield WaitForSeconds (.1);
		image2.SetActive (false);
		image3.SetActive (true);
		yield WaitForSeconds (.1);
		image3.SetActive (false);
		image4.SetActive (true);
		GetComponent.<AudioSource>().PlayOneShot(Click);
		yield WaitForSeconds (.1);
		image4.SetActive (false);
	}
	image1.SetActive (true);
}

function blue () {
	if (round == "pre") {
		Sub.text = "Blue Fouled";
		rounds ++;
		bluescore --;
		RoundStart ();
	}else {
		shooter = "blue";
	}
	shotblue = "true";
}

function BlueGuns () {
	if (round != "pre") {
		image6.SetActive (false);
		image7.SetActive (true);
		yield WaitForSeconds (.1);
		image7.SetActive (false);
		image8.SetActive (true);
		yield WaitForSeconds (.1);
		image8.SetActive (false);
		image9.SetActive (true);
		yield WaitForSeconds (.1);
		image9.SetActive (false);
		image10.SetActive (true);
		GetComponent.<AudioSource>().PlayOneShot(Bang);
		yield WaitForSeconds (.1);
		image10.SetActive (false);
	}else {
		image6.SetActive (false);
		image7.SetActive (true);
		yield WaitForSeconds (.1);
		image7.SetActive (false);
		image8.SetActive (true);
		yield WaitForSeconds (.1);
		image8.SetActive (false);
		image9.SetActive (true);
		GetComponent.<AudioSource>().PlayOneShot(Click);
		yield WaitForSeconds (.1);
		image9.SetActive (false);
	}
	image6.SetActive (true);
}

function EXIT () {
	Application.LoadLevel ("MainMenu");
}