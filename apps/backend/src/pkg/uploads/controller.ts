import { IMAGE_PATH } from './../../config';
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function uploadImages(req: Request, res: Response) {
    try {
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const now = new Date();
        const year = now.getFullYear();
        const file = req.file?.filename
        const fullPath = year + "/" + file;

        const image = await prisma.image.create({
            data: {
                thumbnail: fullPath
            }
        })

        const newImage = {
            ...image,
            Thumbnail: `${IMAGE_PATH.showImage}/${fullPath}`
        }
        return res.status(200).json({
            message: "Upload Inage Success",
            data: newImage
        })
    } catch (err) {
        console.log("Error : ", err)
        return res.status(400).json({
            message: "error",
            error: err
        })
    }
}

