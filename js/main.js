
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
    var b;
    var x;
    var y;
   
    //--------------------------grabSelection() checks which value is selected and set
    //                          the values of tbe country_factor and country_summand on
    //                          on the needed values
    function grabSelection() {
        var theSelect = document.getElementById("countrySelection");

        country_value = theSelect.options[theSelect.selectedIndex].value;
        country_txt = theSelect.options[theSelect.selectedIndex].text;
        b = document.getElementById("countrySelection").selectedIndex;

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
            case 'choose':
                alert("Please choose a country");
                return false;
        }


    }
    //--------------------------genderSelection() checks which value is selected and set
    //                          gender_value receives the genderbonus multiplicator 
    //                          gender_txt represent the sex
    function genderSelection() {
        var theGenderSelect = document.getElementById("genderSelection");

        gender_value = theGenderSelect.options[theGenderSelect.selectedIndex].value;
        gender_txt = theGenderSelect.options[theGenderSelect.selectedIndex].text;
        x = document.getElementById("genderSelection").selectedIndex;
        console.log(y + ","+ x);


        
        //--------switch to get
        switch (gender_txt) {
            case 'Mr.':
                genderBonus = 1;
                console.log(genderBonus + gender_value);
                break;
            case 'Ms.':
                genderBonus = 1.1199;
                console.log(genderBonus + gender_value);
                break;
            default:
                return;
        }
        
    }
    //--------------------------getValues() grape the values from the input fields
    function getValues() {
        name = document.getElementById("name").value;
        age = Number(document.getElementById("age").value);
        hpower = Number(document.getElementById("hpower").value);
        result = document.getElementById("result");

    }
    //--------------------------calculateInsurance()calculate the insurance rate on the base of
    //                              For Austria : insurance = horse_power x 100 / age   + 50;
    //                              For Germany: insurance = horse_power x 120 / age  + 100;
    //                              For Italy: insurance = horse_power x 150 / (age+2)  +  150;
    //                          as addition I just added a gender bonus :->
    function calculateInsurance() {
        insurance_price = ((((hpower * country_factor) / age) + country_summand)*gender_value);
        insurance = insurance_price.toFixed(2);
    }

    //-------------------------- print() display the offer in the Insurance field
    function print() {
        document.getElementById("offer").style.display = "block";
        result.innerHTML = "<h2><em>" + gender_txt + " " + name + "</em></h2>" +
            "<br>" + "here is your personolized car insurance offer" +
            "<br> Your monthly rate with your selected values leads to" +
            "<br><br><h2 align=center><u style='color:#ffb266;'><em>" + insurance + " €</u></em></h2> " +
            "<br> per month" +
            "<br><br> we hope you will sign our contract!<br>" +
            "this offer is reservered for you until" +
            "<br><br> <h2 align=center><em>" + datestring + " !</em></h2>";
    }

    function actualDate() {
        d = new Date();

        datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
            (d.getHours() + 1) + ":" + d.getMinutes();
        // 16-5-2015 9:50
    }
     var btn = document.getElementById("buttoN");
    btn.addEventListener('click', workThroughForm);

    //--------------------------workThroughForm() just collect all the functions so they are controlled from one head
    
    function workThroughForm() {
        getValues();
        if (name.length >= 2 && name.length <= 30) {
            if (age >= 18 && age <= 120 && !isNaN(age)) {
                if (hpower >= 40 && hpower <= 1100 && !isNaN(age)) {
                    grabSelection();
                    if (b == 0) {
                        alert("Please choose your country.");
                     } else {
                        genderSelection();
                    
                        if (x == 0) {
                            alert("Please choose your sex.");
                        } else {
                            actualDate();
                            calculateInsurance();
                            print();                   
                        }
                    }
                } else {
                    alert("Please enter the valid Horse Power value between 40 and 1200 HP");
                }
            } else {
                alert("Please enter valid age between 18 and 120 years");
            }
        } else {
            alert("Please enter valid name");
        }

     }



    //--------------------------btn set an ankerpoint to the subBtn and triggers workThroughFrom()
    // getContactDetails();

