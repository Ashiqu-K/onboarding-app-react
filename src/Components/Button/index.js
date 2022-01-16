import React from 'react'
import classNames from 'classnames'

import styles from './index.scss'

export const ButtonType = {
    primary: 'PRIMARY',
    secondary: 'SECONDARY',
}

const Button = ({ label, onClick, buttonClass, type = ButtonType.primary }) => {
    const buttonStyles = classNames(
        styles.button,
        type === ButtonType.primary ? styles.primary : styles.secondary,
        buttonClass
    )

    return (
        <button className={buttonStyles} onClick={onClick}>
            {label}
        </button>
    )
}

export default Button
