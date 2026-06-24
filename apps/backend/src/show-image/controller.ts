import path from "path";
import { Request, Response } from "express"
// import fs from 'fs'
import { IMAGE_PATH } from "../config";

interface slugImage {
    slug: string;
    year: string;
}

export async function forceLoadImage(req: Request<slugImage>, res: Response) {
    const { slug, year } = req.params;
    console.log(slug, year)
    //     const safeSlug = Array.isArray(slug) ? slug[0] : slug;
    // const safeYear = Array.isArray(year) ? year[0] : year;
    const filePath = path.join(process.cwd(), IMAGE_PATH.location, year, slug);
    res.sendFile(filePath);
}


// export async function forceLoadImage(req: Request, res: Response) {
//     const { folder, slug, year, month } = req.params;
//     const folderNameYear = `${year}`;
//     const folderNameMonth = `${month}`;
//     const fullPath = folderNameYear + "/" + folderNameMonth;
//     const filePath = path.join(process.cwd(), 'uploads/', folder, fullPath, slug);

//     console.log(filePath)

//     if (fs.existsSync(filePath)) {
//         res.sendFile(filePath);
//     } else {
//         res.status(404).json({ message: 'Image not found' });
//     }
// }