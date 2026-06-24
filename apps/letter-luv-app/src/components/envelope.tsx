import React, { useState } from 'react'
import styles from './envelope.module.scss';
import { LetterPopup } from './LetterPopup';

// 💡 1. เพิ่มข้อกำหนดใน Interface ว่า Component นี้รับฟังก์ชันจากแม่ได้นะ
interface EnvelopeProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onPaperClick?: (isExpanded: boolean) => void; // 👈 ฟังก์ชันส่งค่ากลับไปหน้าหลัก
}

export const Envelope = ({ isOpen, setIsOpen, onPaperClick }
    : EnvelopeProps) => {
    const [isPaperClicked, setIsPaperClicked] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const handlePaperClick = (e: React.MouseEvent) => {
        e.stopPropagation();  // ป้องกันอบจดหมาย
        setIsPaperClicked(!isPaperClicked);    // toggle
        console.log(isExpanded)
        if (isPaperClicked) {
            const nextState = !isExpanded; // สลับสถานะ (true/false)
            setIsExpanded(nextState);
        }
    }

    return (
        <div className={`${styles.envelope} cursor-pointer rounded-2xl bg-rose-200 h-1/2 w-3/4 flex justify-center items-center ${isOpen ? `rounded-t-none` : `${styles.envelopeShake}`}`}
            onClick={() => setIsOpen(!isOpen)}>

            <div className={isOpen ? `${styles.flapAction} bg-rose-400 ` : `${styles.flap} rounded-2xl w-full h-2/3 bg-rose-400`}></div>
            <div className={`${styles.flapLeft} rounded-2xl ${isOpen ? `rounded-t-none` : ``}`}></div>
            <div className={`${styles.flapRight} rounded-2xl ${isOpen ? `rounded-t-none` : ``}`}></div>
            <div className={`${styles.flapBottom} rounded-2xl`}></div>

            {/* Imprint */}
            <div className={`${styles.imprint}`}>
                <div className={`${styles.imprintText} text-white font-bungee font-extrabold text-6xl`}>JS</div>
            </div>

            <div className={`${styles.paper} h-3/4 w-4/5 px-4 py-2 text-rose-800 text-2xl
            ${isOpen ? styles.paperOpen : ``}`}
                onClick={handlePaperClick}>
                Dear Noona.
                <p className='font-shadows font-bold'>Happy Birth Day Moo.🐷</p>
                <p className='font-shadows font-bold'>This web Happy Birth Day Card </p>
            </div>

            <LetterPopup
                isExpanded={isExpanded} // ใช้ State ตัวเดิมที่ได้มาจาก Envelope
                onClose={() => setIsExpanded(false)} // ฟังก์ชันสำหรับกดปิด Popup
            />
        </div>
    )
}
