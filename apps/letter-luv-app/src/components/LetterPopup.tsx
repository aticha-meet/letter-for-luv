"use client";

import React from 'react';

interface LetterPopupProps {
    isExpanded: boolean;
    onClose: () => void;
}

export function LetterPopup({ isExpanded, onClose }: LetterPopupProps) {
    if (!isExpanded) return null;

    return (
        <>
            {/* 1. Backdrop ฉากหลังมืด */}
            <div
                className="fixed inset-0 bg-black/50 z-50 animate-fade-in backdrop-blur-sm"
                onClick={onClose}
            />

            {/* 2. ตัวกล่อง Popup อัตราส่วนสำหรับ iPad แนวนอน */}
            <div className="fixed top-1/2 left-1/2 w-[85vw] max-w-[760px] h-[75vh] max-h-[500px] bg-[#FFFDF9] rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col border border-amber-100 animate-scale-up">

                {/* แถบสีแดง/ชมพูด้านบนสไตล์หัวกระดาษจดหมาย */}
                <div className="w-full h-4 bg-rose-400 flex-shrink-0" />

                {/* 💡 ปุ่มปิดมุมขวาบน: เปลี่ยนมาใช้กากบาทจากตัวอักษร "×" และแต่ง CSS ให้สวยแทนการใช้ lucide-react */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-6 text-3xl font-light text-amber-900/40 hover:text-rose-600 transition-colors select-none focus:outline-none"
                    aria-label="Close layout"
                >
                    &times;
                </button>

                {/* 3. เนื้อหาด้านในกระดาษจดหมายแบบมีเส้นบรรทัด */}
                <div
                    className="flex-1 p-8 md:p-12 overflow-y-auto"
                    style={{
                        backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)',
                        backgroundSize: '100% 2.5rem',
                        lineHeight: '2.5rem',
                        backgroundPosition: '0 0.5rem'
                    }}
                >
                    {/* หัวข้อจดหมาย */}
                    <h2 className="text-3xl font-bold text-rose-700/90 font-serif mb-4 drop-shadow-sm">
                        Dear Noona.
                    </h2>

                    {/* ข้อความความในใจ (เขียนเว้นวรรคให้ตรงล็อกเส้นบรรทัด) */}
                    <div className="text-xl text-amber-950/80 font-medium space-y-0 tracking-wide">
                        <p>ยินดีด้วยนะครับที่เปิดซองจดหมายฉบับนี้จนเจอ ฮ่าๆ 🎉</p>
                        <p>จริงๆ แล้วมีหลายเรื่องเลยที่อยากบอก แต่พอต้องมาเขียนจริงๆ ก็แอบเขินเหมือนกันนะ</p>
                        <p>ขอบคุณสำหรับทุกๆ ช่วงเวลาดีๆ ที่ผ่านมา ขอบคุณที่เป็นรอยยิ้มและพลังบวกให้กันเสมอ</p>
                        <p>ไม่ว่าจะเจอเรื่องเหนื่อยแค่ไหน แค่ได้หันมาเจอเธอก็หายเหนื่อยเป็นปลิดทิ้งเลย</p>
                        <p>ภาพพื้นหลังพวกนั้น... ตั้งใจคัดรูปที่ชอบที่สุดมาทำระบบสุ่มให้เลยนะ หวังว่าจะถูกใจล่ะ</p>
                        <p>หลังจากนี้ก็ขอให้มีความสุขในทุกๆ วัน ยิ้มเยอะๆ (เพราะเวลาเธอยิ้มมันน่ารักที่สุดแล้ว)</p>
                        <p>อยู่เป็นความสุขของกันและกันแบบนี้ไปนานๆ เลยนะคุณนูน่าคนเก่งของผม 🤍</p>
                    </div>

                    {/* ลงท้ายจดหมาย */}
                    <div className="mt-12 text-right text-xl font-bold text-rose-600/80 italic font-serif">
                        — Always beside you.
                    </div>
                </div>

                {/* แถบดีไซน์ท้ายกระดาษน่ารักๆ */}
                <div className="w-full h-2 bg-amber-200/50 flex-shrink-0" />
            </div>
        </>
    );
}