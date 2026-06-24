"use client";

import React, { useCallback, useEffect, useState } from 'react'
import { getImages } from '@/service/imageBG/imageBg';
import { IMAGE_PATH } from '@/config';
import styles from './page.module.scss';
import { Envelope } from '@/components/envelope';
import { PhotoBackground } from '@/components/PhotoBackground';
import { ImageType } from '@lib/types/model/image';
import { distributeRandomImages } from '@/utils/distributeRandomImages';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);
    const [imagesList, setImagesList] = useState<ImageType[]>([]);
    const [randomImages, setRandomImages] = useState<string[][]>([]);
    const [isExpanded, setIsExpanded] = useState(false);

    const fetchImages = useCallback(async () => {
        try {
            const respone: {
                data: {
                    message: string;
                    data: ImageType[];
                }
            } = await getImages(IMAGE_PATH.BACKEND_URL)
            setImagesList(respone.data.data)
            console.log(respone.data.data)
            if (imagesList.length > 0) {
                const distributed = distributeRandomImages(respone.data.data, 6, 8);
                setRandomImages(distributed)
            }
            console.log(randomImages)
        } catch (err) {
            console.log(err);
            return Promise.reject(err);
        }
    }, [imagesList])

    useEffect(() => {
        if (imagesList.length === 0) {
            fetchImages()
        }
    }, [imagesList])

    useEffect(() => {
        if (imagesList.length !== 0 && randomImages.length === 0) {
            const distributed = distributeRandomImages(imagesList, 8, 10);
            setRandomImages(distributed)
        }
    }, [imagesList, randomImages])

    console.log(randomImages)

    return (
        <main className={`${styles.containnerHome} flex flex-col`}>

            {(imagesList.length > 0 && randomImages.length > 0) ? <div className="fixed inset-0 h-full -z-10 flex flex-col gap-1 py-1 pointer-events-none opacity-50 select-none">
                <PhotoBackground direction="ltr" items={randomImages[0]} />
                <PhotoBackground direction="rtl" items={randomImages[1]} />
                <PhotoBackground direction="ltr" items={randomImages[2]} />
                <PhotoBackground direction="rtl" items={randomImages[3]} />
                <PhotoBackground direction="ltr" items={randomImages[4]} />
                <PhotoBackground direction="rtl" items={randomImages[5]} />
                {/* <PhotoBackground direction="ltr" items={randomImages[6]} /> */}
            </div>
                : ""}
            <div className={`${styles.textHap} font-[family-name:var(--font-bitcount)] text-7xl text-white`}>
                Happy Birth Day My Luv❤️
            </div>
            {/* Envelope */}
            <div className={`flex items-center justify-center w-[60%] h-[80%] 
            ${isOpen ? styles.paperOpen : ''} 
                        ${isExpanded ? styles.paperExpanded : ''}`}>
                <Envelope isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
        </main>
    )
}