import Image from 'next/image';

interface PhotoItemProps {
    item: string; // หรือ string แล้วแต่ว่าคุณส่งเป็น Object หรือ URL ตรงๆ
}

export function PhotoItem({ item }: PhotoItemProps) {
    return (
        /* 💡 วิธีแก้: ลบพรอพ relative และค่าความกว้าง w-36 ออกจากกรอบ div 
           ปล่อยให้กว้างยืดตามเนื้อหารูปข้างใน แต่ล็อกความสูงไว้ที่ h-36 (144px) */
        <div className="h-32 md:h-40 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">

            <Image
                src={String(item).trim()}
                alt="bg-pic"
                /* 💡 เทคนิคการทำ Height Fixed + Width Auto ใน Next.js:
                   1. กำหนด width และ height เป็น 0 เพื่อปลดล็อกการบังคับขนาดพิกเซลของ Next.js
                   2. ใส่ unoptimized={true} เหมือนเดิม
                   3. ใช้คลาส CSS 'w-auto h-full' เพื่อบังคับให้สูงเต็ม 144px ส่วนกว้างคำนวณออโต้ */
                width={0}
                height={0}
                sizes="100vh"
                className="w-auto h-full object-cover"
                unoptimized={true}
            />

        </div>
    );
}