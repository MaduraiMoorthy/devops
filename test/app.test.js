const request = require('supertest');
const{app, server} = require('../app')

describe('GET /',() => {
    it("should return 200 status and the correct messgae", async()=>{
        const response = await request(app).get("/")
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hi sathya")

    })
})

afterAll(()=> {
    server.close();
})