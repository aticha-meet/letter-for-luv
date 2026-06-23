import React, { useState } from 'react'
import styles from './envelope.module.scss';

export const Envelope = ({ isOpen, setIsOpen }
    : {
        isOpen: boolean;
        setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    }) => {
    const [isPaperClicked, setIsPaperClicked] = useState(false);

    const handlePaperClick = (e: React.MouseEvent) => {
        e.stopPropagation();  // ป้องกันอบจดหมาย
        setIsPaperClicked(!isPaperClicked);    // toggle
    }

    console.log("Paper Click",isPaperClicked)

    return (
        <div className={`${styles.envelope} cursor-pointer rounded-2xl bg-rose-200 h-1/2 w-3/4 flex justify-center items-center ${isOpen ? `rounded-t-none` : ``}`}
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
            </div>
        </div>
    )
}
