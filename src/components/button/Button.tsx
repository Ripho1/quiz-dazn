import "./Button.css"

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

export const Button = ({className, children, ...props}: ButtonProps) => {
    return <button className={`basic-button ${className}`} {...props}>
        {children}
    </button>
}