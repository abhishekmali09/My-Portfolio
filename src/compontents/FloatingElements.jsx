import { memo } from "react";

/* 
  Realistic floating paper/leaf elements inspired by Mahdis-style editorial portfolios.
  White/cream crumpled paper & leaf pieces with organic shapes, 3D shadows, and slow floating motion.
*/

const floatingItems = [
    // Large paper piece — top left area
    { id: 1, top: "12%", left: "8%", size: 70, rotate: -15, delay: 0, duration: 20, type: "paper1" },
    // Small leaf — top right
    { id: 2, top: "8%", right: "18%", size: 45, rotate: 25, delay: 2, duration: 24, type: "leaf1" },
    // Medium paper — mid left
    { id: 3, top: "38%", left: "4%", size: 55, rotate: 40, delay: 4, duration: 22, type: "paper2" },
    // Small paper — mid right
    { id: 4, top: "30%", right: "6%", size: 50, rotate: -30, delay: 1, duration: 18, type: "paper3" },
    // Large leaf — lower area
    { id: 5, top: "62%", left: "15%", size: 60, rotate: 10, delay: 5, duration: 26, type: "leaf2" },
    // Small paper — bottom right
    { id: 6, top: "72%", right: "10%", size: 42, rotate: -50, delay: 3, duration: 21, type: "paper1" },
    // Tiny leaf — scattered
    { id: 7, top: "50%", left: "48%", size: 35, rotate: 65, delay: 7, duration: 25, type: "leaf1" },
    // Large paper — bottom left
    { id: 8, top: "85%", left: "6%", size: 55, rotate: 20, delay: 6, duration: 19, type: "paper2" },
    // Medium leaf — hero area accent
    { id: 9, top: "20%", right: "30%", size: 48, rotate: -40, delay: 2.5, duration: 23, type: "leaf2" },
    // Small crumpled paper — contact area
    { id: 10, top: "90%", right: "25%", size: 38, rotate: 35, delay: 8, duration: 20, type: "paper3" },
];

/* --- Realistic white/cream paper piece SVGs --- */
const Paper1 = ({ size }) => (
    <svg width={size} height={size * 0.85} viewBox="0 0 100 85" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M15 5 C25 2, 45 0, 65 3 C80 5, 92 8, 95 15 C98 28, 96 45, 90 60 C85 72, 75 80, 60 83 C42 85, 25 82, 15 75 C5 65, 2 48, 3 32 C4 18, 8 8, 15 5Z"
            fill="#FEFCF4"
        />
        <path
            d="M15 5 C25 2, 45 0, 65 3 C80 5, 92 8, 95 15 C98 28, 96 45, 90 60 C85 72, 75 80, 60 83 C42 85, 25 82, 15 75 C5 65, 2 48, 3 32 C4 18, 8 8, 15 5Z"
            fill="url(#paper1grad)"
            opacity="0.5"
        />
        {/* Fold crease lines */}
        <path d="M30 15 C40 35, 55 50, 45 75" stroke="#E8E2D0" strokeWidth="0.6" opacity="0.6" fill="none" />
        <path d="M60 8 C55 30, 65 55, 70 70" stroke="#E8E2D0" strokeWidth="0.4" opacity="0.4" fill="none" />
        {/* Shadow edge */}
        <path
            d="M15 75 C5 65, 2 48, 3 32 C4 18, 8 8, 15 5"
            stroke="#D4CDB8"
            strokeWidth="0.8"
            opacity="0.3"
            fill="none"
        />
        <defs>
            <linearGradient id="paper1grad" x1="0" y1="0" x2="100" y2="85">
                <stop offset="0%" stopColor="#F5EFE0" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EDE7D5" />
            </linearGradient>
        </defs>
    </svg>
);

const Paper2 = ({ size }) => (
    <svg width={size} height={size * 0.9} viewBox="0 0 100 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M10 20 C5 10, 20 2, 40 5 C55 7, 70 3, 85 10 C95 18, 98 35, 95 50 C92 65, 85 78, 70 85 C55 90, 35 88, 20 80 C8 72, 3 55, 5 40 C6 30, 8 25, 10 20Z"
            fill="#FBF8EF"
        />
        <path
            d="M10 20 C5 10, 20 2, 40 5 C55 7, 70 3, 85 10 C95 18, 98 35, 95 50 C92 65, 85 78, 70 85 C55 90, 35 88, 20 80 C8 72, 3 55, 5 40 C6 30, 8 25, 10 20Z"
            fill="url(#paper2grad)"
            opacity="0.4"
        />
        {/* Crumple creases */}
        <path d="M25 12 C35 30, 28 55, 35 78" stroke="#DDD6C4" strokeWidth="0.5" opacity="0.5" fill="none" />
        <path d="M68 10 C60 35, 72 58, 65 80" stroke="#DDD6C4" strokeWidth="0.4" opacity="0.35" fill="none" />
        <path d="M20 45 C40 40, 60 50, 85 42" stroke="#E5DFD0" strokeWidth="0.3" opacity="0.3" fill="none" />
        <defs>
            <linearGradient id="paper2grad" x1="0" y1="0" x2="100" y2="90">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F0EAD8" />
            </linearGradient>
        </defs>
    </svg>
);

const Paper3 = ({ size }) => (
    <svg width={size} height={size * 0.75} viewBox="0 0 100 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M8 12 C15 3, 35 0, 55 4 C72 8, 88 5, 95 15 C100 28, 97 45, 88 58 C78 68, 62 74, 45 72 C28 70, 12 65, 5 52 C0 40, 2 22, 8 12Z"
            fill="#FDFAF0"
        />
        <path
            d="M8 12 C15 3, 35 0, 55 4 C72 8, 88 5, 95 15 C100 28, 97 45, 88 58 C78 68, 62 74, 45 72 C28 70, 12 65, 5 52 C0 40, 2 22, 8 12Z"
            fill="url(#paper3grad)"
            opacity="0.45"
        />
        {/* Fold line */}
        <path d="M40 5 C38 25, 50 45, 42 68" stroke="#E0DAC8" strokeWidth="0.5" opacity="0.45" fill="none" />
        <defs>
            <linearGradient id="paper3grad" x1="100" y1="0" x2="0" y2="75">
                <stop offset="0%" stopColor="#F8F2E2" />
                <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>
        </defs>
    </svg>
);

/* --- Realistic leaf SVGs — white/cream like the reference --- */
const Leaf1 = ({ size }) => (
    <svg width={size} height={size * 0.55} viewBox="0 0 100 55" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5 30 C8 15, 25 3, 50 2 C75 1, 90 12, 96 28 C92 40, 78 50, 55 52 C32 53, 12 45, 5 30Z"
            fill="#FEFDF6"
        />
        <path
            d="M5 30 C8 15, 25 3, 50 2 C75 1, 90 12, 96 28 C92 40, 78 50, 55 52 C32 53, 12 45, 5 30Z"
            fill="url(#leaf1grad)"
            opacity="0.4"
        />
        {/* Center vein */}
        <path d="M10 30 C30 25, 55 22, 92 27" stroke="#E0D9C5" strokeWidth="0.7" opacity="0.5" fill="none" />
        {/* Side veins */}
        <path d="M30 26 C35 18, 40 14, 45 10" stroke="#E8E2D0" strokeWidth="0.3" opacity="0.35" fill="none" />
        <path d="M55 24 C58 32, 60 38, 62 44" stroke="#E8E2D0" strokeWidth="0.3" opacity="0.35" fill="none" />
        <path d="M70 26 C72 18, 76 13, 80 10" stroke="#E8E2D0" strokeWidth="0.3" opacity="0.3" fill="none" />
        {/* Subtle curl shadow */}
        <path
            d="M5 30 C8 15, 25 3, 50 2"
            stroke="#D8D0BC"
            strokeWidth="0.6"
            opacity="0.25"
            fill="none"
        />
        <defs>
            <linearGradient id="leaf1grad" x1="0" y1="0" x2="100" y2="55">
                <stop offset="0%" stopColor="#F5F0E0" />
                <stop offset="50%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#EDE6D2" />
            </linearGradient>
        </defs>
    </svg>
);

const Leaf2 = ({ size }) => (
    <svg width={size} height={size * 0.7} viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M50 2 C68 5, 85 15, 95 30 C100 42, 95 55, 82 62 C68 68, 50 68, 35 65 C18 60, 5 48, 2 35 C0 22, 10 10, 25 5 C35 2, 42 1, 50 2Z"
            fill="#FDFBF2"
        />
        <path
            d="M50 2 C68 5, 85 15, 95 30 C100 42, 95 55, 82 62 C68 68, 50 68, 35 65 C18 60, 5 48, 2 35 C0 22, 10 10, 25 5 C35 2, 42 1, 50 2Z"
            fill="url(#leaf2grad)"
            opacity="0.35"
        />
        {/* Center vein */}
        <path d="M50 5 C48 20, 46 40, 50 62" stroke="#DDD6C2" strokeWidth="0.6" opacity="0.5" fill="none" />
        {/* Side veins */}
        <path d="M48 18 C35 15, 22 18, 12 25" stroke="#E5DFD0" strokeWidth="0.3" opacity="0.3" fill="none" />
        <path d="M49 18 C62 14, 75 16, 86 24" stroke="#E5DFD0" strokeWidth="0.3" opacity="0.3" fill="none" />
        <path d="M47 38 C38 40, 25 45, 15 48" stroke="#E5DFD0" strokeWidth="0.25" opacity="0.25" fill="none" />
        <path d="M49 38 C60 42, 72 48, 82 52" stroke="#E5DFD0" strokeWidth="0.25" opacity="0.25" fill="none" />
        <defs>
            <linearGradient id="leaf2grad" x1="0" y1="0" x2="100" y2="70">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="100%" stopColor="#F2ECDA" />
            </linearGradient>
        </defs>
    </svg>
);

const componentMap = {
    paper1: Paper1,
    paper2: Paper2,
    paper3: Paper3,
    leaf1: Leaf1,
    leaf2: Leaf2,
};

const FloatingElements = memo(() => (
    <div
        style={{
            position: "fixed",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            overflow: "hidden",
        }}
        aria-hidden="true"
    >
        {floatingItems.map((item) => {
            const Component = componentMap[item.type];
            const posStyle = {};
            if (item.top) posStyle.top = item.top;
            if (item.left) posStyle.left = item.left;
            if (item.right) posStyle.right = item.right;

            return (
                <div
                    key={item.id}
                    style={{
                        position: "absolute",
                        ...posStyle,
                        transform: `rotate(${item.rotate}deg)`,
                        animation: `floatDrift${(item.id % 3) + 1} ${item.duration}s ease-in-out infinite`,
                        animationDelay: `${item.delay}s`,
                        opacity: 0.85,
                        filter: "drop-shadow(2px 4px 6px rgba(0,0,0,0.08))",
                    }}
                >
                    <Component size={item.size} />
                </div>
            );
        })}
    </div>
));

FloatingElements.displayName = "FloatingElements";

export default FloatingElements;
