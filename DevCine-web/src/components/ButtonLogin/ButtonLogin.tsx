import React, {ButtonHTMLAttributes, Children } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonLogin: React.FC<ButtonProps> = ({children, ...rest }) => {
    return(
        <button type="button" {...rest}>
        {children}
      </button>
    )
}
export default ButtonLogin