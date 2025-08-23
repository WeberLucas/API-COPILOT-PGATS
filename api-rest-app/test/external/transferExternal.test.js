import request from 'supertest';
import * as chai from 'chai';
const { expect } = chai;

describe('Transfer Controller', () => {
    describe('Post/transfers', () => {
        it('Quando informo remetete invalidos retorna 400', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/transfers')
                .send({
                    sender: "",
                    recipient: "",
                    amount: 100
                });
            expect(resposta.status).to.equal(400);
        });
      
       
    });

    describe('GET /transfers', () => {
        // Adicione seus testes aqui
    });
});       