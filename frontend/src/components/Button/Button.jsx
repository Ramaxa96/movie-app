import './Button.scss'

const Button = (props) => {
    const {
        className,
        children,
        size = "md",
        color = "blue",
        type = 'button',
        onClick,
    } = props

    return (
        <button onClick={onClick} type={type} className={`button button--${size} button--${color} ${className}`}>
            {children}
        </button>
    )
}

export default Button