import "./Options.css"

interface OptionsProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Options = ({ children, className, ...props }: OptionsProps) => {
    return <div className={`options ${className}`} {...props}>
        {
            children
        }
    </div>
}