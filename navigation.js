function control() {
    document.getElementById("controlButton").innerHTML = "CONTROL ROOM: This room is how we move the submarine!<br>You can read the submarine's introduction, and the house rules here.";
}

function navigation() {
    document.getElementById("navButton").innerHTML = "NAVIGATION ROOM: This is where you are.<br>See information about all the rooms here!<br>We use this room to map out the sea and see if there is anything of interest in the area.";
}

function observation() {
    document.getElementById("obsButton").innerHTML = "OBSERVATION DECK: Read some of the confessions people have<br>shared from the COMMUNICATION ROOM!<br>The sea is always moving, so messages can change over time.";
}

function communication() {
    document.getElementById("commButton").innerHTML = "COMMUNICATION ROOM: Anonymously let a message out to the sea!<br>Our radios allow for a short message to be projected into the sea,<br>and they are all manually and periodically updated.";
}