const processjsondata = require('./src/processdata');

console.log("started");

const jsondata = [{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", 
"HeightCm": 167, "WeightKg": 82}];

async function parsejsondata() {
    const returneddata = await processjsondata(jsondata);
    console.log("Total Persons :- " + returneddata.count);
    console.log("Total Over weight Persons :- " + returneddata.overweightpersons)
    console.log("Percentage of overweight persons :- " + returneddata.persentoverweight + " %");
    console.log("-: processeddata :-\n" + JSON.stringify(returneddata));
    console.log("Completed");
}

parsejsondata()
console.log("Waiting for result......................");