import {clsx} from "clsx"

// 카드 컴포넌트 타입 정의
type CardProps = {
    children: React.ReactNode;
    variant?: "default" | "outline" | "elevated";
    padding?: "none" | "sm" | "md" | "lg";
    radius?: "none" | "sm" | "md" | "lg" | "full";
    className?: string;
};

// 카드 컴포넌트 구현
export const Card = ({children, variant = "default", padding = "md", radius = "md", className}: CardProps) => {
    const classArray = clsx(
        "w-2/6 h-1/5",
        "bg-mint-500",
        "overflow-hidden",
        "justify-center",
        "items-center",
        "flex",
        "cursor-pointer",
        "text-black",
        "font-bold",
        "hover:scale-150",
        "hover:bg-mint-500/50",
        "transition-all duration-500 ease-in-out",
        // 패딩 조건
        {
            "p-0": padding === "none",
            "p-3": padding === "sm",
            "p-5": padding === "md",
            "p-8": padding === "lg",
        },  

        // 라운드 조건
        {
            "rounded-none": radius === "none",
            "rounded-sm": radius === "sm",
            "rounded-md": radius === "md",
            "rounded-lg": radius === "lg",
            "rounded-full": radius === "full",
        },

        // variant 조건
        {
            "bg-white border-1 border-gray-300": variant === "default",
            "border-1 border-gray-300 hover:border-gray-600": variant === "outline",
            "shadow-md hover:shadow-lg": variant === "elevated",
        },
        
    )

    return (
        <div className={classArray}>{children}</div>
    );
};
