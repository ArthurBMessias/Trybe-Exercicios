import {Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
    {name: 'Arthur', email:'turmessias@gmail.com'}
]

export default {
    async index(_req: Request, res: Response) {
        return res.json(users)
    },

 async create(_req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
        to: {
        name: 'Arthur',
        email: 'turmessias@gmail.com'
        },
        message: {
        subject:'Você é bem vindo',
        body:'EEEEEEEEEEEEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAAAAAAAA' 
    }
});
    return res.send('criado com sucesso');
}
}