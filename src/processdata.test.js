const processjsondata = require('./processdata');

test('passing json data to process', () => {

const testjsondata = [{"Gender": "Male", "HeightCm": 181, "WeightKg": 32},
{"Gender": "Male", "HeightCm": 171, "WeightKg": 32},
{"Gender": "Male", "HeightCm": 169, "WeightKg": 45},
{"Gender": "Male", "HeightCm": 180, "WeightKg": 56},
{"Gender": "Male", "HeightCm": 185, "WeightKg": 67},
{"Gender": "Male", "HeightCm": 173, "WeightKg": 82}]

    const testresultobject = processjsondata(testjsondata)
    // testresultobject.map(item =>{})

    expect(testresultobject[0]).toHaveProperty('BMI');
    expect(testresultobject[0]).toHaveProperty('Category');
    expect(testresultobject[0]).toHaveProperty('Healthrisk');
    expect(testresultobject[0].BMI).toBe(17.7);
    expect(testresultobject[0].Category).toEqual('Underweight');
    expect(testresultobject[0].Healthrisk).toEqual('Malnutrition risk');

    expect(testresultobject[1]).toHaveProperty('BMI');
    expect(testresultobject[1]).toHaveProperty('Category');
    expect(testresultobject[1]).toHaveProperty('Healthrisk');
    expect(testresultobject[1].BMI).toBe(18.7);
    expect(testresultobject[1].Category).toEqual('Normal weight');
    expect(testresultobject[1].Healthrisk).toEqual('Low risk');

    expect(testresultobject[2]).toHaveProperty('BMI');
    expect(testresultobject[2]).toHaveProperty('Category');
    expect(testresultobject[2]).toHaveProperty('Healthrisk');
    expect(testresultobject[2].BMI).toBe(26.6);
    expect(testresultobject[2].Category).toEqual('Overweight');
    expect(testresultobject[2].Healthrisk).toEqual('Enhanced risk');

    expect(testresultobject[3]).toHaveProperty('BMI');
    expect(testresultobject[3]).toHaveProperty('Category');
    expect(testresultobject[3]).toHaveProperty('Healthrisk');
    expect(testresultobject[3].BMI).toBe(31.1);
    expect(testresultobject[3].Category).toEqual('Moderately obese');
    expect(testresultobject[3].Healthrisk).toEqual('Medium risk');

    expect(testresultobject[4]).toHaveProperty('BMI');
    expect(testresultobject[4]).toHaveProperty('Category');
    expect(testresultobject[4]).toHaveProperty('Healthrisk');
    expect(testresultobject[4].BMI).toBe(36.2);
    expect(testresultobject[4].Category).toEqual('Severely obese');
    expect(testresultobject[4].Healthrisk).toEqual('High risk');

    expect(testresultobject[5]).toHaveProperty('BMI');
    expect(testresultobject[5]).toHaveProperty('Category');
    expect(testresultobject[5]).toHaveProperty('Healthrisk');
    expect(testresultobject[5].BMI).toBe(47.4);
    expect(testresultobject[5].Category).toEqual('Very severely obese');
    expect(testresultobject[5].Healthrisk).toEqual('Very high risk');
  });