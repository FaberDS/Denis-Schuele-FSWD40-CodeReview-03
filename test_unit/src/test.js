    function calculateInsurance(hpower, country_factor, age, country_summand, gender_bonus) {
        insurance_price = ((((hpower * country_factor) / age) + country_summand)*gender_bonus);
        return insurance_price;
    }
