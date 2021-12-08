const { expect, test } = require('@jest/globals');
const request = require('./indexPOST');



describe("Quadrant Test POST API", () => {
    test("Check response user 1", async() => {
        const cek = await request();
        expect(cek.status).toEqual(201);
        expect(cek.data['name']).toEqual(
            "morpheus"
        );
        expect(cek.data['job']).toEqual(
            "leader"
        );
    })

});