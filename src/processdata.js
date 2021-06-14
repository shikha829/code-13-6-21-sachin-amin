module.exports = function processjsondata(jsondata) {
    try {
        console.log("Analyzing Data...");
        const totalperson = jsondata.length;
        var overweightpersons = 0;
        jsondata.map(item => {
            let bmi = parseFloat((item.WeightKg / (item.HeightCm / 100)).toFixed(1));

            let category = "";
            let healthrist = "";
            item.BMI = bmi

            if (bmi >= 40) {
                category = "Very severely obese";
                healthrist = "Very high risk";
                overweightpersons++;
            }
            else if (bmi >= 35) {
                category = "Severely obese";
                healthrist = "High risk";
                overweightpersons++;
            }
            else if (bmi >= 30) {
                category = "Moderately obese";
                healthrist = "Medium risk";
                overweightpersons++;
            }
            else if (bmi >= 25) {
                category = "Overweight";
                healthrist = "Enhanced risk";
                overweightpersons++;
            }
            else if (bmi >= 18.5) {
                category = "Normal weight";
                healthrist = "Low risk";
            }
            else {
                category = "Underweight";
                healthrist = "Malnutrition risk";
            }

            item.Category = category
            item.Healthrisk = healthrist

        })
        jsondata.count = totalperson;
        jsondata.overweightpersons = overweightpersons;
        jsondata.persentoverweight = (100 * overweightpersons) / totalperson;

        return jsondata;
    } catch (error) {
        console.log("Error reading data")
    }
}

