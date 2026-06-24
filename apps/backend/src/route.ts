import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

const prisma = new PrismaClient();
const AppRouter: Router = Router();

AppRouter.post('/users', async (req: Request, res: Response) => {
    try {
        const userList = await prisma.user.findMany()
        return res.status(200).json({ userList })
    } catch (err) {
        return res.status(400).json(err)
    }
})

AppRouter.post('/test', async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "Hello Working" })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Error" })
    }
})

export default AppRouter
