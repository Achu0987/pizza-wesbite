'use client';

import { useEffect, useRef, useState } from 'react';
import { frames } from './frames';

export default function ScrollSequence({ onProgress, onLoadingComplete }) {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    // Keep callback refs stable to prevent restarting the preloader effect
    const onProgressRef = useRef(onProgress);
    const onLoadingCompleteRef = useRef(onLoadingComplete);

    useEffect(() => {
        onProgressRef.current = onProgress;
    }, [onProgress]);

    useEffect(() => {
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [onLoadingComplete]);

    // Loading 240 frames from public/pizza images
    const frameCount = 240;
    const currentFrameRef = useRef(0);
    const targetFrameRef = useRef(0);

    // Preload all 1035 frames sequentially (runs exactly once on mount)
    useEffect(() => {
        const loadedImages = [];
        let count = 0;

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();

            img.src = frames[i].src;

            img.onload = () => {
                count++;
                setLoadedCount(count);
                if (onProgressRef.current) onProgressRef.current(count, frameCount);
                if (count === frameCount) {
                    setIsLoading(false);
                    if (onLoadingCompleteRef.current) onLoadingCompleteRef.current();
                }
            };

            img.onerror = () => {
                // Fail-safe to avoid hanging in case a frame fails to load
                count++;
                setLoadedCount(count);
                if (onProgressRef.current) onProgressRef.current(count, frameCount);
                if (count === frameCount) {
                    setIsLoading(false);
                    if (onLoadingCompleteRef.current) onLoadingCompleteRef.current();
                }
            };

            loadedImages.push(img);
        }

        setImages(loadedImages);
    }, []);

    // Handle scroll coordinate mapping and frame lerping
    useEffect(() => {
        if (isLoading || images.length === 0) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Center-cropped fit logic
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawFrame(Math.round(currentFrameRef.current));
        };

        const drawFrame = (index) => {
            const img = images[index];
            if (!img || !img.complete) return;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgWidth = img.width;
            const imgHeight = img.height;

            const imgRatio = imgWidth / imgHeight;
            const canvasRatio = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, drawX, drawY;

            if (canvasRatio > imgRatio) {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgRatio;
                drawX = 0;
                drawY = (canvasHeight - drawHeight) / 2;
            } else {
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imgRatio;
                drawX = (canvasWidth - drawWidth) / 2;
                drawY = 0;
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = maxScroll > 0 ? scrollY / maxScroll : 0;

            // Maps scroll progress to the entire 731-frame coordinate range
            targetFrameRef.current = Math.min(frameCount - 1, Math.max(0, scrollPercent * (frameCount - 1)));
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Linear interpolation frame loop for 60fps cinematic fluidity
        let animationFrameId;
        const updateFrame = () => {
            const ease = 0.15;
            const diff = targetFrameRef.current - currentFrameRef.current;

            if (Math.abs(diff) > 0.05) {
                currentFrameRef.current += diff * ease;
                drawFrame(Math.round(currentFrameRef.current));
            }

            animationFrameId = requestAnimationFrame(updateFrame);
        };

        updateFrame();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isLoading, images]);


    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full object-cover z-0 bg-[#000]"
        />
    );
}
