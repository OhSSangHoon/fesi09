import clsx from "clsx";

type BadgeProps = {
    children: React.ReactNode;
    variant?: "primary" | "success" | "warning" | "danger" | "info";
    size?: "xs" | "sm" | "md";
    outlined?: boolean;
    rounded?: boolean;
    withDot?: boolean;
    className?: string;
  };

  export const Badge = ({children, variant, size="md", outlined=false, rounded=false, withDot=false, className}: BadgeProps) => {
    const classArray = clsx(
        "inline-flex items-center font-semibold p-2",
        
        // size 조건
        {
            "px-1.5 py-0.5 text-xs": size === "xs",
            "px-2.5 py-0.5 text-sm": size === "sm",
            "px-3 py-2 text-base": size === "md",
        },

        // variant 조건
        {
            "bg-blue-500 text-white": variant === "primary" && !outlined,
            "bg-green-500 text-white": variant === "success" && !outlined,
            "bg-yellow-500 text-white": variant === "warning" && !outlined,
            "bg-red-200 text-red-600": variant === "danger" && !outlined,
            "bg-blue-200 text-blue-600": variant === "info" && !outlined,
            "bg-transparent border border-current": outlined,
            "border-blue-500 text-blue-500": variant === "primary" && outlined,
            "border-green-500 text-green-500": variant === "success" && outlined,
            "border-yellow-500 text-yellow-500": variant === "warning" && outlined,
            "border-red-500 text-red-500": variant === "danger" && outlined,
            "border-blue-200 text-blue-600": variant === "info" && outlined,
        },

        // rounded 조건
        {
            "rounded": !rounded,
            "rounded-full": rounded,
        },

        // withDot 조건
        withDot && "relative",

        // className 조건
        className,
    )

    const dotClassArray = clsx(
        "inline-block w-2 h-2 rounded-full mr-1.5",
        "bg-current",
    )

    return (
        <span className={classArray}>
            {withDot && <span className={dotClassArray} />}
            {children}
        </span>
    )
  } 