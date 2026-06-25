import path from "path";
import { Request, Response } from "express";
import { IMAGE_PATH } from "../../config";

interface slugImage {
    slug: string;
    year: string;
}

export async function forceLoadImage(req: Request<slugImage>, res: Response) {
    const { slug, year } = req.params;
    console.log("📸 Requesting Image:", year, slug);

    // พาร์ทไฟล์รูปภาพจริงในระบบเครื่องหลังบ้าน
    const filePath = path.join(process.cwd(), IMAGE_PATH.location, year, slug);

    // 🎯 1. เติม Header CORS เพื่อเปิดทางให้โดเมน Netlify ดึงไปแสดงผลได้แบบไร้รอยต่อ
    res.setHeader('Access-Control-Allow-Origin', 'https://fronent-card-letter.netlify.app');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, ngrok-skip-browser-warning');

    // 🎯 2. สั่งส่งไฟล์ด้วยตัวเลือกพิเศษ เพื่อบังคับให้ Express คำนวณและปั๊มตรา Content-Type (เช่น image/jpeg) เสมอ
    const options = {
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    res.sendFile(filePath, options, (err) => {
        if (err) {
            console.error("❌ ส่งรูปภาพล้มเหลว:", err);
            // ถ้าหาไฟล์ไม่เจอจริง ๆ ค่อยส่ง 404 แบบ JSON กลับไป
            if (!res.headersSent) {
                res.status(404).json({ message: "Image folder path or file not found" });
            }
        }
    });
}