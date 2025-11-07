import './Button.scss'

const Button = (props) => {
    const {
        className,
        children,
    } = props

    return(
        <button className={`button ${className}`}>
            {children}
        </button>
    )
}

export default Button