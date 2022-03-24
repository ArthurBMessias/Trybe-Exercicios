import { Request, Response, NextFunction } from 'express';
import { read, write } from '../utils/functions'
import StatusCode from '../enums/StatusCode';
// import User from '../interfaces/User';

const getAllUsers = async (_req: Request, res: Response) => {
    const users = await read();
    return res.status(StatusCode.OK).json(users)
}

const getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const users = await read();
    const user = users.find((u) => u.id === id)
    if(!user) return res.status(StatusCode.NOT_FOUND).send("User not found");

    return res.status(StatusCode.OK).json(user)
}

export default { getAllUsers, getUserById }