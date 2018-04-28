document
window.onload = function() {
    var name;
    var age;
    var hpower;
    var country_value;
    var country_factor;
    var country_summand;
    var gender_value;
    var gender_txt;
    var result;
    var genderBonus;
    var insurance_price;
    var insurance;
    function grabSelection() {
		    var theSelect = document.getElementById("countrySelection");

		    country_value = theSelect.options[theSelect.selectedIndex].value;
		    country_txt = theSelect.options[theSelect.selectedIndex].text;


		    //--------switch to get
		    switch (country_value) {
		        case 'austria':
		            country_factor = 100;
		            country_summand = 50;
		            console.log("austria + " + country_factor + country_summand);
		            break;
		        case 'germany':
		            country_factor = 120;
		            country_summand = 100;
		            console.log("germany + " + country_factor + country_summand);
		            break;
		        case 'italy':
		            country_factor = 150;
		            country_summand = 150;
		            age += 2;
		            console.log("italy + " + country_factor + country_summand);
		            break;
		        default:
		            title = "This string it's not a level";
		            console.log(title);
		            break;
		    }


		}
function genderSelection() {
		    var theGenderSelect = document.getElementById("genderSelection");

		    gender_value = theGenderSelect.options[theGenderSelect.selectedIndex].value;
		    gender_txt = theGenderSelect.options[theGenderSelect.selectedIndex].text;

		  



		}

function calculateInsurance(){
	insurance_price = (((hpower*country_factor)/age)+country_summand);
	insurance = insurance_price.toFixed(2);
}
    function getValues() {
        name = document.getElementById("name").value;
        age = Number(document.getElementById("age").value);
        hpower = Number(document.getElementById("hpower").value);
        result = document.getElementById("result");
		grabSelection();  
		genderSelection();  
		calculateInsurance();    

		result.innerHTML = insurance;


    }


    var btn = document.getElementById("subBtn");
    btn = btn.addEventListener('click', getValues);


};