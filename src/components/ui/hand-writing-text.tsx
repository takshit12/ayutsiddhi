"use client";

import { motion } from "framer-motion";
interface HandWrittenTitleProps {
    title?: string;
    subtitle?: string;
    isDarkBg?: boolean;
    size?: 'default' | 'large';
}

function HandWrittenTitle({
    title = "Hand Written",
    subtitle = "Optional subtitle",
    isDarkBg = false,
    size = 'default',
}: HandWrittenTitleProps) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] },
                opacity: { duration: 0.5 },
            },
        },
    };

    const defaultPath = `M 950 90 
                         C 1250 300, 1050 480, 600 520
                         C 250 520, 150 480, 150 300
                         C 150 120, 350 80, 600 80
                         C 850 80, 950 180, 950 180`;
                         
    const largePath = `M 1050 60 
                       C 1450 300, 1250 550, 600 580 
                       C -50 550, -200 400, 50 200 
                       C 250 50, 400 20, 600 20 
                       C 800 20, 1000 100, 1050 100 Z`;

    const pathData = size === 'large' ? largePath : defaultPath;
    const strokeW = size === 'large' ? 10 : 12;

    return (
        <div className="relative w-full max-w-4xl mx-auto py-24">
            <div className="absolute inset-0">
                <motion.svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 1200 600"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="w-full h-full"
                >
                    <title>KokonutUI</title>
                    <motion.path
                        d={pathData}
                        fill="none"
                        strokeWidth={strokeW}
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        variants={draw}
                        className={isDarkBg ? "text-white opacity-90" : "text-black opacity-90"}
                    />
                </motion.svg>
            </div>
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <motion.h1
                    className={`text-4xl md:text-6xl tracking-tighter flex items-center gap-2 ${
                        isDarkBg ? "text-white" : "text-black"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        className={`text-xl ${
                            isDarkBg ? "text-white/80" : "text-black/80"
                        }`}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1, duration: 0.8 }}
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}

export { HandWrittenTitle } 