import { Router, Request, Response } from "express";

const AppRouter: Router = Router();

AppRouter.post('/test', async (req: Request, res: Response) => {
    try {
        return res.status(200).json({ message: "Hello Working" })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ message: "Error" })
    }
})

export default AppRouter
