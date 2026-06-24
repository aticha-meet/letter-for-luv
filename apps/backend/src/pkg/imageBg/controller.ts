import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { IMAGE_PATH } from "../../config";

const prisma = new PrismaClient();

export async function getImageBG(req: Request, res: Response) {
    try {
        const image = await prisma.image.findMany()
        const data = image.map(item => {
            return {
                ...item,
                Thumbnail: `${IMAGE_PATH.showImage}/${item.thumbnail}`
            }
        })
        return res.status(200).json({
            message: "Success",
            data: data
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            message: "error",
            error: err
        })
    }
}