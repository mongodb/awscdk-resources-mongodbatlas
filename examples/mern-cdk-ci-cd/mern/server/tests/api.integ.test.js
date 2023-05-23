const axios = require('axios');

test('getting total records record', async () =>{
    const response = await axios(`http://localhost:5000/record/`)
    let records = await response.data

    expect(records.length).toBe(3)
});

test('test specific records', async () =>{
    const response = await axios(`http://localhost:5000/name/Peter`)
    let records = await response.data

    expect(records.length).toBe(1)
    expect(records[0].level).toBe("Intern")
});
