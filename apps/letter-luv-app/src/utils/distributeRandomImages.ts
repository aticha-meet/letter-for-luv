// utils/imageDistributor.ts
import { ImageType } from "@lib/types/model/image";

export const distributeRandomImages = (
    allImages: ImageType[],
    numberOfGroups: number,
    imagesPerGroup: number
): string[][] => {

    if (!allImages || !Array.isArray(allImages) || allImages.length === 0) {
        return Array(numberOfGroups).fill([]);
    }

    // 1. ดึงเฉพาะ Thumbnail และสับไพ่แบบสุ่ม
    const allThumbnails = allImages.map((image) => image.thumbnail);
    const shuffled = [...allThumbnails].sort(() => 0.5 - Math.random());

    const result: string[][] = [];

    // 2. ลูปเพื่อตัดแบ่งรูปออกเป็นกลุ่มๆ
    for (let i = 0; i < numberOfGroups; i++) {
        const startIdx = i * imagesPerGroup;
        const endIdx = startIdx + imagesPerGroup;

        // ตัดแบ่งรูปตามปกติ
        const group = shuffled.slice(startIdx, endIdx);

        /* 💡 ไฮไลท์การแก้ไข: ถ้ากลุ่มไหน (โดยเฉพาะกลุ่มสุดท้าย) ได้รูปมาไม่ครบตามจำนวนที่ตั้งไว้ (เช่น ได้มาแค่ 3 แต่อยากได้ 8) */
        if (group.length < imagesPerGroup) {
            let fallbackIdx = 0;
            // วนลูปเอาจากรูปทั้งหมดที่สุ่มไว้ (shuffled) มาเติมให้เต็มจนกว่าจะครบตามจำนวน imagesPerGroup
            while (group.length < imagesPerGroup) {
                // ใช้การดึงจาก shuffled[fallbackIdx] และรีเซ็ตกลับเป็น 0 เผื่อรูปทั้งหมดมีน้อยจริงๆ จะได้วนลูปซ้ำได้
                const fallbackImg = shuffled[fallbackIdx % shuffled.length];
                group.push(fallbackImg);
                fallbackIdx++;
            }
        }

        result.push(group);
    }

    return result;
};