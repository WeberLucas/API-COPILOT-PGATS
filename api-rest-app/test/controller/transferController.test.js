import request from 'supertest';
import sinon from 'sinon';
import * as chai from 'chai';
const { expect } = chai;
import app from '../../src/app.js';

describe('Transfer Controller', () => {
    describe('Post/transfers', () => {
        it('Quando informo remetete e destinatario invalidos retorna 400', async () => {
            const resposta = await request(app).post('/transfers').send({
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