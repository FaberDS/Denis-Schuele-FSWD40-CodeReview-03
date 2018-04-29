var teamDetail1 = teamMembers[0];
var contactDetailPrint = document.getElementById("teamDetail1");
contactDetailPrint.innerHTML =  '<img class="employe-img" id="img1" src="' + teamDetail1.image + '" alt="image Teammember 1">' + 
								'<span class="nameEmployee">' + teamDetail1.name + '</span>' +
								'<br><span class="region">' + teamDetail1.region + '</span>';


var teamDetail2 = teamMembers[1];
var contactDetailPrint = document.getElementById("teamDetail2");
contactDetailPrint.innerHTML =  '<img class="employe-img" id="img2" src="' + teamDetail2.image + '" alt="image Teammember 2">' + 
								'<span class="nameEmployee">' + teamDetail2.name + '</span>' +
								'<br><span class="region">' + teamDetail2.region + '</span>';


var teamDetail3 = teamMembers[2];
var contactDetailPrint = document.getElementById("teamDetail3");
contactDetailPrint.innerHTML =  '<img class="employe-img" id="img3" src="' + teamDetail3.image + '" alt="image Teammember 3">' +
								'<span class="nameEmployee">' + teamDetail3.name + '</span>' +
								'<br><span class="region">' + teamDetail3.region + '</span>';
