import { Router } from "express";
import multer from 'multer'
import path from 'path'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs';
import { uploadImages } from "./controller";

export const UploadsRouter: Router = Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const now = new Date();
        const folderNameYear = `${now.getFullYear()}`;
        const uploadPath = "assets/uploads/" + folderNameYear;
        console.log(uploadPath)

        // ถ้าโฟลเดอร์ยังไม่มี ให้สร้าง
        if (!fs.existsSync(uploadPath)) {
            fs.mkdirSync(uploadPath, { recursive: true });
        }

        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        console.log(file.originalname)
        const uniqueName = uuidv4() + ext;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

UploadsRouter.post('/upload-image', upload.single('image'), uploadImages)


