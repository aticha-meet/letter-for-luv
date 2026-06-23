"use client";

import { useState } from 'react';
import styles from './page.module.scss';
import { Envelope } from '@/components/envelope';
import { PhotoBackground } from '@/components/PhotoBackground';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);

    return (
        <main className={`${styles.containnerHome}`}>

            <div className="fixed inset-0 -z-10 flex flex-col gap-2 py-1 pointer-events-none opacity-25 select-none">
                <PhotoBackground direction="ltr" items={[]} />
                <PhotoBackground direction="rtl" items={[]} />
                <PhotoBackground direction="ltr" items={[]} />
                <PhotoBackground direction="rtl" items={[]} />
                <PhotoBackground direction="ltr" items={[]} />
                <PhotoBackground direction="rtl" items={[]} />
                <PhotoBackground direction="ltr" items={[]} />
                <PhotoBackground direction="rtl" items={[]} />
            </div>

            {/* Envelope */}
            <div className="flex items-center justify-center w-[80%] h-full">
                <Envelope isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </main>
    )
}