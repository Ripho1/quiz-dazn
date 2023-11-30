import "./Circle.css"

interface CircleProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * Medium is the default
     */
    size?: "small" | "medium" | "large"
}

/**
 * Basic Circle component with 3 sizes
 */
export const Circle = ({ children, className, size = "medium", ...props }: CircleProps) => {
    return (
        <div className={`circle ${size} ${className}`} {...props}>
            {children}
        </div>
    )
}