"use client";
import styles from './PhotoBackground.module.scss';
import { PhotoItem } from './ImageCompo';

type MarqueeRowProps = {
    direction: 'rtl' | 'ltr';
    items: string[];
};

export const PhotoBackground = ({ direction, items }: MarqueeRowProps) => {
    const animationClass = direction === 'rtl' ? styles.marqueeRtl : styles.marqueeLtr;
    const COUNTITEM = 8;
    console.log(items)

    if (items !== null) {
        return (
            // เปลี่ยนจาก w-[200%] เป็นการปล่อยให้ความกว้างขยายตามจำนวนลูกด้านในอัตโนมัติ (w-max)
            <div className={`flex flex-nowrap w-max gap-1 ${animationClass}`}>

                {/* ชุดที่ 1 */}
                <div className="flex shrink-0 gap-1">
                    {items?.map((src, index) => (
                        <PhotoItem item={src} key={`set1-${index}`} />
                    ))
                    }
                </div>

                {/* ชุดที่ 2 (ฝาแฝดชุดที่ 1 เอาไว้ต่อตูด) */}
                <div className="flex shrink-0 gap-1">
                    {items?.map((src, index) => (
                        <PhotoItem item={src} key={`set1-${index}`} />
                    ))}
                </div>

                {/* ชุดที่ 2 (ฝาแฝดชุดที่ 1 เอาไว้ต่อตูด) */}
                {/* <div className="flex shrink-0 gap-1">
                    {items?.map((src, index) => (
                        <PhotoItem item={src} key={`set1-${index}`} />
                    ))}
                </div> */}

            </div>
        );
    } else {
        {
            return Array.from({ length: COUNTITEM }).map((_, i) => (
                <div key={`placeholder-${i}`} className="text-white rounded-xl flex justify-center items-center text-center bg-black w-40 h-28">
                    No images to display
                </div>
            ))
        }
    }
};
