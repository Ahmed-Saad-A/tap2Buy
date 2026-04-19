
interface LogoProps {
    width?: number;
    dark?: boolean;
    showText?: boolean;
    className?: string;
}

const Tap2Bay = ({
    width = 140,
    dark = false,
    showText = true,
    className = "",
}: LogoProps) => {
    const iconSize = 36;
    const totalWidth = showText ? width : iconSize;
    const textColor = dark ? "#ffffff" : "#2C1A0E";
    const subColor = dark ? "#F0A96B" : "#C8793A";

    return (
        <svg
            width={totalWidth}
            height={iconSize}
            viewBox={`0 0 ${totalWidth} ${iconSize}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Tap2Bay Café logo"
            className={className}
        >
            {/* Icon */}
            <rect width={iconSize} height={iconSize} rx="10" fill="#C8793A" />

            <path
                d="M9 10h18M18 10v5"
                stroke="white"
                strokeWidth="2.8"
                strokeLinecap="round"
            />

            <rect
                x="9"
                y="16"
                width="18"
                height="13"
                rx="2.5"
                stroke="white"
                strokeWidth="2.2"
            />

            <circle cx="14" cy="23" r="2" fill="white" />
            <circle cx="22" cy="23" r="2" fill="white" />

            <path
                d="M25 30l4 4"
                stroke="#F0A96B"
                strokeWidth="2.5"
                strokeLinecap="round"
            />

            {/* Text */}
            {showText && (
                <>
                    <text
                        x={iconSize + 70}
                        y="25"
                        fontFamily="'Geist', Arial, sans-serif"
                        fontWeight="900"
                        fontSize="15"
                        fill={textColor}
                    >
                        Tap2Bay
                    </text>

                    <text
                        x={iconSize + 35}
                        y="35"
                        fontFamily="'Geist', Arial, sans-serif"
                        fontWeight="700"
                        fontSize="8"
                        fill={subColor}
                        letterSpacing="2"
                    >
                        CAFÉ
                    </text>
                </>
            )}
        </svg>
    );
};

export default Tap2Bay;