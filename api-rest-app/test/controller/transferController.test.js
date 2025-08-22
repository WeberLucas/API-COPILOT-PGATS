import request from 'supertest';
import sinon from 'sinon';
import * as chai from 'chai';
const { expect } = chai;
import app from '../../src/app.js';
import transferService from '../../src/services/transferService.js';


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
        it('usando mocha', async () => {
            const transferServiceMock = sinon.stub(transferService, 'processTransfer')
            transferServiceMock.throws(new Error('Invalid amount'));
            const resposta = await request(app).post('/transfers').send({
                sender: "",
                recipient: "",
                amount: 100
            });
            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Invalid amount');
            sinon.restore();
        });
         it('usando mocha com valores validos', async () => {
            const transferServiceMock = sinon.stub(transferService, 'processTransfer')
            transferServiceMock.returns({ sender: "1", recipient: "2", amount: 100 });
            const resposta = await request(app).post('/transfers').send({
                sender: "1",
                recipient: "2",
                amount: 100
            });
            expect(resposta.status).to.equal(200);
            expect(resposta.body).to.have.property('message', 'Transfer successful');
            expect(resposta.body).to.have.property('transfer');
            sinon.restore();
        });
    });

    describe('GET /transfers', () => {
        // Adicione seus testes aqui
    });
});       