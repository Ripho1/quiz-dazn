import "./Option.css"

interface OptionProp extends React.HTMLAttributes<HTMLLabelElement> {
    /**
     * used to indicate one option over the rest (can highlight multiple as well)
     */
    highlight?: boolean,
    /**
     * Prevents pointer css events
     */
    preventPointer?: boolean
}

export const Option = ({ className, children, highlight, preventPointer, ...props }: OptionProp) => {
    const finalClassName = `option ${highlight && "highlight"} ${preventPointer && "not-clickable" } ${className}`

    return <label className={finalClassName} {...props}>
        {children}
    </label>
}