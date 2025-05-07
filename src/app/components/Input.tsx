import clsx from "clsx";

type InputProps = {
    id?: string;
    type?: string;
    placeholder?: string;
    label?: string;
    error?: string;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "filled" | "outlined";
    fullWidth?: boolean;
    disabled?: boolean;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  };

  export const Input = ({id, type="text", placeholder, label, error, size="md", variant="default", fullWidth=false, disabled=false, className, onChange}: InputProps) => {
    const classArray = clsx(
        "rounded",
        "focus:outline-none",
        "focus:ring-2",
        "transition-all",
        "text-black",
        "border-1 border-gray-300",

        // size 조건
        {
            "px-2 py-1 text-sm": size === "sm",
            "px-3 py-2 text-base": size === "md",
            "px-4 py-3 text-lg": size === "lg",
        },

        // variant 조건
        {
            "border-gray-300 focus:border-blue-500 focus:ring-blue-200": variant === "default" && !error,
            "border-transparent bg-gray-100 focus:bg-white focus:border-blue-500 focus:ring-red-200": variant === "filled" && error,
            "border-gray-300 bg-transparent focus:border-blue-500 focus:ring-blue-200": variant === "outlined" && !error,
        },

        fullWidth && "w-full",
        
        error && "border-red-500 focus:border-red-500 focus:ring-red-200",
        disabled && "bg-gray-100 text-gray-500",
        className,
    )

    const labelClassArray = clsx(
        "block mb-1",
        "text-black",
        {
            "text-sm": size === "sm",
            "text-base": size === "md",
            "text-lg": size === "lg",
        },
        error && "text-red-500",
        disabled && "text-gray-500",
    )
    return (
        <div>
            <label htmlFor={id} className={labelClassArray}>{label}</label>
            <input
                id={id}
                type={type}
                disabled={disabled}
                className={classArray}
                placeholder={placeholder}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
};