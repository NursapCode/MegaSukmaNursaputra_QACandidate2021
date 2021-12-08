const { expect, test } = require('@jest/globals');
const request = require('./indexGET');

describe("Quadrant Test POST API", () => {
    test("Check first user data", async() => {
        const cek = await request();
        expect(cek.status).toEqual(200);
        expect(cek.data.data[0]).toEqual({
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        });
    })

    test("Check email Lindsay ferguson", async() => {
        const cek = await request();
        expect(cek.status).toEqual(200);
        expect(cek.data.data[1].email).toEqual("lindsay.ferguson@reqres.in");
    })

    test("Check Data API Containing Rachel", async() => {
        const cek = await request();
        expect(cek.status).toEqual(200);
        expect(cek.data.data).toEqual(
            expect.arrayContaining([
                expect.objectContaining({ "first_name": "Rachel" })
            ]));

    })
});