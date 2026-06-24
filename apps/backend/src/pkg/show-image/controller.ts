import path from "path";
import { Request, Response } from "express"
import { IMAGE_PATH } from "../../config";


interface slugImage {
    slug: string;
    year: string;
}


export async function forceLoadImage(req: Request<slugImage>, res: Response) {
    const { slug, year } = req.params;
    console.log(slug, year)
    const filePath = path.join(process.cwd(), IMAGE_PATH.location, year, slug);
    res.sendFile(filePath);
}
