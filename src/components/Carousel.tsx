import { motion, useAnimation, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface CarouselProps {
    children: React.ReactNode[];
    itemWidth?: number;
    gap?: number;
}

export function Carousel({ children, itemWidth = 300, gap = 24 }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [constraintLeft, setConstraintLeft] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();

    useEffect(() => {
        if (carouselRef.current) {
            const containerWidth = carouselRef.current.offsetWidth;
            const totalWidth = children.length * (itemWidth + gap) - gap;
            setConstraintLeft(Math.min(0, containerWidth - totalWidth));
        }
    }, [children.length, itemWidth, gap]);

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (Math.abs(velocity) > 500) {
            if (velocity > 0 && currentIndex > 0) {
                handlePrevClick();
            } else if (velocity < 0 && currentIndex < children.length - 1) {
                handleNextClick();
            }
        } else {
            const newIndex = -Math.round((info.point.x - offset) / (itemWidth + gap));
            setCurrentIndex(Math.max(0, Math.min(newIndex, children.length - 1)));
            controls.start({ x: -currentIndex * (itemWidth + gap) });
        }
    };

    const handleNextClick = () => {
        if (currentIndex < children.length - 1) {
            setCurrentIndex(currentIndex + 1);
            controls.start({ x: -(currentIndex + 1) * (itemWidth + gap) });
        }
    };

    const handlePrevClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            controls.start({ x: -(currentIndex - 1) * (itemWidth + gap) });
        }
    };

    return (
        <div className="relative group">
            <div
                ref={carouselRef}
                className="overflow-hidden"
            >
                <motion.div
                    drag="x"
                    dragConstraints={{ left: constraintLeft, right: 0 }}
                    onDragEnd={handleDragEnd}
                    animate={controls}
                    className="flex"
                    style={{ gap: `${gap}px` }}
                >
                    {children.map((child, index) => (
                        <div
                            key={index}
                            style={{
                                minWidth: `${itemWidth}px`,
                                maxWidth: `${itemWidth}px`
                            }}
                        >
                            {child}
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrevClick}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed z-10 ${
                    currentIndex === 0 ? 'hidden' : ''
                }`}
                disabled={currentIndex === 0}
            >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>

            <button
                onClick={handleNextClick}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed z-10 ${
                    currentIndex === children.length - 1 ? 'hidden' : ''
                }`}
                disabled={currentIndex === children.length - 1}
            >
                <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
        </div>
    );
}