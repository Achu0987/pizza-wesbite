'use client';

import { useEffect, useRef, useState } from 'react';

export default function AutoScrollControls() {
    const [isAutoScrolling, setIsAutoScrolling] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [speed, setSpeed] = useState(2.0); // Default to 2.0x (Medium)
    const [showSpeedModal, setShowSpeedModal] = useState(false);
    
    // Maintain a ref of the active states for the requestAnimationFrame loop
    const stateRef = useRef({ isAutoScrolling, isPaused, speed });
    useEffect(() => {
        stateRef.current = { isAutoScrolling, isPaused, speed };
    }, [isAutoScrolling, isPaused, speed]);

    // Handle scroll behavior override (disable smooth scroll transition during auto-scrolling)
    useEffect(() => {
        if (isAutoScrolling && !isPaused) {
            const htmlStyle = document.documentElement.style;
            const bodyStyle = document.body.style;
            
            const prevHtmlScroll = htmlStyle.scrollBehavior;
            const prevBodyScroll = bodyStyle.scrollBehavior;

            htmlStyle.scrollBehavior = 'auto';
            bodyStyle.scrollBehavior = 'auto';

            return () => {
                htmlStyle.scrollBehavior = prevHtmlScroll;
                bodyStyle.scrollBehavior = prevBodyScroll;
            };
        }
    }, [isAutoScrolling, isPaused]);

    // Programmatic scroll animation loop (framerate independent)
    useEffect(() => {
        if (!isAutoScrolling || isPaused) return;

        let lastTime = performance.now();
        let animationFrameId;

        const scrollStep = (time) => {
            const dt = (time - lastTime) / 1000; // seconds elapsed
            lastTime = time;

            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const currentScroll = window.scrollY;

            // Auto stop when reaching the bottom (tolerance of 1.5 pixels)
            if (currentScroll >= maxScroll - 1.5) {
                setIsAutoScrolling(false);
                setIsPaused(false);
                return;
            }

            // 1.0x speed = 120 pixels per second.
            const basePixelsPerSecond = 120;
            const targetSpeed = stateRef.current.speed * basePixelsPerSecond;
            const nextScroll = Math.min(maxScroll, currentScroll + targetSpeed * dt);

            window.scrollTo(0, nextScroll);

            animationFrameId = requestAnimationFrame(scrollStep);
        };

        animationFrameId = requestAnimationFrame(scrollStep);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [isAutoScrolling, isPaused]);

    // Pause on manual user scrolling to allow interactive exploration
    useEffect(() => {
        if (!isAutoScrolling || isPaused) return;

        const handleUserScroll = () => {
            setIsPaused(true);
        };

        window.addEventListener('wheel', handleUserScroll, { passive: true });
        window.addEventListener('touchmove', handleUserScroll, { passive: true });

        return () => {
            window.removeEventListener('wheel', handleUserScroll);
            window.removeEventListener('touchmove', handleUserScroll);
        };
    }, [isAutoScrolling, isPaused]);

    // Helper functions for preset buttons
    const handlePresetClick = (val) => {
        setSpeed(val);
    };

    const handleSpeedChange = (delta) => {
        setSpeed((prev) => {
            const next = prev + delta;
            return Math.min(8.0, Math.max(0.5, Math.round(next * 10) / 10));
        });
    };

    const getPresetActive = (val) => {
        return Math.abs(speed - val) < 0.05;
    };

    return (
        <>
            {/* INITIAL AUTO SCROLL BUTTON */}
            {!isAutoScrolling && !showSpeedModal && (
                <button
                    onClick={() => setShowSpeedModal(true)}
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 bg-[#070708]/90 hover:bg-[#0f0f11]/95 text-white/90 border border-white/10 rounded-full flex items-center gap-2 cursor-pointer font-sans text-xs tracking-widest font-bold uppercase transition-all duration-300 pointer-events-auto backdrop-blur-md shadow-lg shadow-black/40 hover:scale-105 active:scale-95 group"
                    style={{ height: '40px', padding: '0 24px' }}
                >
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white/70 group-hover:translate-y-0.5 transition-transform"
                    >
                        <polyline points="7 13 12 18 17 13" />
                        <polyline points="7 6 12 11 17 6" />
                    </svg>
                    <span>Auto Scroll</span>
                    <span className="text-white/20 mx-0.5 font-light">|</span>
                </button>
            )}

            {/* SPEED SELECTION MODAL */}
            {showSpeedModal && (
                <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center pointer-events-auto p-4 animate-in fade-in duration-200">
                    <div 
                        className="bg-[#0b0b0d] border border-white/10 rounded-3xl w-full max-w-[420px] text-white shadow-2xl relative select-none flex flex-col gap-5 animate-in fade-in zoom-in-95 duration-200"
                        onClick={(e) => e.stopPropagation()}
                        style={{ padding: '32px' }}
                    >
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight mb-2 text-white">
                                Auto Scroll Speed
                            </h3>
                            <p className="text-xs md:text-sm text-white/50 leading-relaxed font-light">
                                Choose your automated exploration speed. You can pause, play, or adjust speed anytime from the bottom controller.
                            </p>
                        </div>

                        {/* SPEED INDICATOR ROW */}
                        <div className="flex items-center justify-between mt-1">
                            <span className="text-[10px] font-bold tracking-widest text-white/40 uppercase">
                                Exploration Speed
                            </span>
                            <span className="text-4xl font-extrabold text-[#ff4b2b] font-mono tracking-tight drop-shadow-[0_0_10px_rgba(255,75,43,0.3)]">
                                {speed.toFixed(1)}x
                            </span>
                        </div>

                        {/* SLIDER CONTROL */}
                        <div className="w-full flex items-center h-6">
                            <input
                                type="range"
                                min="1.0"
                                max="8.0"
                                step="0.5"
                                value={speed}
                                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer focus:outline-none 
                                  [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 
                                  [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white 
                                  [&::-webkit-slider-thumb]:shadow-[0_0_8px_rgba(255,75,43,0.8)] [&::-webkit-slider-thumb]:transition-all
                                  [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full 
                                  [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-0 
                                  [&::-moz-range-thumb]:shadow-[0_0_8px_rgba(255,75,43,0.8)] [&::-moz-range-thumb]:transition-all"
                                style={{
                                    background: `linear-gradient(to right, #ff4b2b 0%, #ff4b2b ${((speed - 1) / (8 - 1)) * 100}%, rgba(255,255,255,0.1) ${((speed - 1) / (8 - 1)) * 100}%, rgba(255,255,255,0.1) 100%)`,
                                }}
                            />
                        </div>

                        {/* PRESETS */}
                        <div className="grid grid-cols-4 gap-2">
                            {[
                                { name: 'Slow', val: 1.0 },
                                { name: 'Medium', val: 2.0 },
                                { name: 'Fast', val: 4.0 },
                                { name: 'Turbo', val: 8.0 }
                            ].map((preset) => {
                                const isActive = getPresetActive(preset.val);
                                return (
                                    <button
                                        key={preset.name}
                                        onClick={() => handlePresetClick(preset.val)}
                                        className={`rounded-xl text-xs tracking-wider transition-all cursor-pointer text-center font-medium ${
                                            isActive
                                                ? 'bg-[#ff4b2b]/10 border border-[#ff4b2b] text-[#ff4b2b] font-bold shadow-[0_0_10px_rgba(255,75,43,0.15)]'
                                                : 'bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 text-white/60'
                                        }`}
                                        style={{ height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                    >
                                        {preset.name}
                                    </button>
                                );
                            })}
                        </div>

                        {/* BUTTONS */}
                        <div className="flex gap-3 mt-2">
                            <button
                                onClick={() => setShowSpeedModal(false)}
                                className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl text-xs font-semibold tracking-wider transition-all cursor-pointer text-center active:scale-95"
                                style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setIsAutoScrolling(true);
                                    setIsPaused(false);
                                    setShowSpeedModal(false);
                                }}
                                className="flex-[2] bg-gradient-to-r from-[#ff4b2b] to-[#ff6a00] hover:brightness-110 text-white rounded-2xl text-xs font-bold tracking-wider transition-all cursor-pointer text-center active:scale-95 shadow-lg shadow-orange-600/30"
                                style={{ height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                            >
                                Enable Auto Scroll
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* FLOATING BOTTOM CONTROLLER (ACTIVE AUTO-SCROLL STATE) */}
            {isAutoScrolling && (
                <div 
                    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 bg-[#070708]/90 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-between pointer-events-auto shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-5 duration-300 min-w-[280px]"
                    style={{ height: '46px', padding: '0 12px 0 20px' }}
                >
                    <div className="flex items-center">
                        {/* Status Light Indicator */}
                        <span className={`w-2 h-2 rounded-full mr-2.5 shadow-[0_0_8px_#10b981] ${isPaused ? 'bg-amber-500 shadow-[0_0_8px_#f59e0b]' : 'bg-emerald-500 animate-pulse'}`} />
                        <span className="text-[10px] font-bold tracking-widest text-white/80 uppercase">
                            {isPaused ? 'Auto Paused' : 'Auto Scrolling'}
                        </span>
                        
                        {/* Speed Badge */}
                        <span className="ml-2.5 px-2 py-0.5 rounded bg-[#ff4b2b]/15 border border-[#ff4b2b]/25 text-[#ff4b2b] text-[10px] font-bold font-mono">
                            {speed.toFixed(1)}x
                        </span>
                    </div>

                    <div className="h-4 w-[1px] bg-white/10 mx-4" />

                    {/* Controls Actions */}
                    <div className="flex items-center gap-1.5">
                        {/* Decrease Speed */}
                        <button
                            onClick={() => handleSpeedChange(-0.5)}
                            disabled={speed <= 0.5}
                            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                            title="Decrease speed"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>

                        {/* Pause / Resume Toggle */}
                        <button
                            onClick={() => setIsPaused(!isPaused)}
                            className={`w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer ${
                                isPaused
                                    ? 'bg-white/5 hover:bg-white/10 text-white/90 border border-white/10'
                                    : 'bg-[#ff4b2b]/15 border border-[#ff4b2b]/40 text-[#ff4b2b] hover:bg-[#ff4b2b]/25'
                            }`}
                            title={isPaused ? 'Resume scroll' : 'Pause scroll'}
                        >
                            {isPaused ? (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                            ) : (
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="6" y="4" width="4" height="16" rx="1" />
                                    <rect x="14" y="4" width="4" height="16" rx="1" />
                                </svg>
                            )}
                        </button>

                        {/* Increase Speed */}
                        <button
                            onClick={() => handleSpeedChange(0.5)}
                            disabled={speed >= 8.0}
                            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/80 border border-white/10 text-xs font-bold transition-all hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-30 disabled:pointer-events-none"
                            title="Increase speed"
                        >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </button>

                        {/* Stop Action */}
                        <button
                            onClick={() => {
                                setIsAutoScrolling(false);
                                setIsPaused(false);
                            }}
                            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-white/60 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                            title="Stop auto scroll"
                        >
                            <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                                <rect x="4" y="4" width="16" height="16" rx="1.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
