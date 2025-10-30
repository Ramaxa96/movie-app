import './Button.scss'

const Button = (props) => {
    const {
        className,
        children,
        size = "md",
        color = "blue",
    } = props

    return (
        <button className={`button button--${size} button--${color} ${className}`}>
            <span>
            {children}
            </span>
        </button>
    )
}

export default Button