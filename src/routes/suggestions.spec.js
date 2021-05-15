import request from 'supertest';
import { suggestionsMocks } from './__mocks__';

let server;

describe('/services/suggestions', () => {
    
    beforeEach(() => { 
        server = require('../index');
    });

    afterEach(async () => { 
        await server.close();
    });

    describe('POST /', () => {

        let numericString;

        const exec = async () => {
            return await request(server)
                .post('/services/suggestions')
                .send({ numericString });
        }

        beforeEach(() => {
            numericString = '224';
        });

        it('should return empty nodeLevel suggestions to client if no word combination is possible', async () => {
            numericString = '22';
            const response = await exec();
            expect(response.status).toBe(200);
            expect(response.body.suggestions.nodeLevel).toHaveLength(0);
        });

        it('should return empty deepLevel suggestions to client if no more words are possible', async () => {
            numericString = '2222';
            const response = await exec();
            expect(response.status).toBe(200);
            expect(response.body.suggestions.deepLevel).toHaveLength(0);
        });

        it('should return empty result arrays if numericString is empty', async () => {
            numericString = '';
            const response = await exec();
            expect(response.status).toBe(200);
            expect(response.body).toEqual(suggestionsMocks.emptyResponse);
        });
        
        it('should return corresponding suggestions to client', async () => {
            const response = await exec();
            expect(response.status).toBe(200);
            expect(response.body).toEqual(suggestionsMocks.response);
        });
    }); 
});