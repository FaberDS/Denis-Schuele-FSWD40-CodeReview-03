describe("Calculate the insurance fee", function() {
    it("should do ((((hpower*country_factor)/age)+country_summand)*genderBonus)", function() {

        expect(calculateInsurance(50, 100, 20, 50, 1)).toBe(300);
    });
    it("should do ((((hpower*country_factor)/age)+country_summand)*genderBonus), Calculate Austria male,  This means with this input the insuranceprice should be 335.96999999999997", function() {

        expect(calculateInsurance(50, 100, 20, 50, 1.1199)).toBe(335.96999999999997);
    });
    it("should do ((((hpower*country_factor)/age)+country_summand)*genderBonus), Calculate Austria female,  This means with this input the insuranceprice should be 335.96999999999997", function() {

        expect(calculateInsurance(50, 120, 20, 100, 1)).toBe(400);
    });
    it("should do ((((hpower*country_factor)/age)+country_summand)*genderBonus), Calculate Germany female,  This means with this input the insuranceprice should be 400,00", function() {

        expect(calculateInsurance(50, 120, 20, 100, 1.1199)).toBe(447.96);
    });

    it("should do ((((hpower*country_factor)/age)+country_summand)*genderBonus), Calculate Italy male,  This means with this input the insuranceprice should be 490.90909090909093", function() {

        expect(calculateInsurance(50, 150, 22, 150, 1)).toBe(490.90909090909093);
    });
    it("should do ((((hpower*country_factor)/age)+country_summand)*genderBonus), Calculate Italy female,  This means with this input the insuranceprice should be 400,00", function() {

        expect(calculateInsurance(50, 150, 22, 150, 1.1199)).toBe(549.7690909090909);
    });

});