import React from 'react';
import classNames from 'classnames';

import styles from './index.scss';

const TextField = ({ label, name, value, error, onChange, wrapperStyles }) => {
    return (
        <div className={classNames(styles.inputWrapper, wrapperStyles)}>
            {label && <label className={styles.inputLabel}>{label}</label>}
            {error && <span className={styles.errorMessage}>{error}</span>}
            <input
                className={styles.input}
                type="text"
                name={name}
                required
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default TextField;
