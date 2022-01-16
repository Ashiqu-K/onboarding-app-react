import React from 'react';
import styles from './index.scss';
import classNames from 'classnames';

const Step = ({ number, total, isActive, isCompleted, goToStep }) => {
    const isFirst = number === 1;
    const isLast = number === total;
    const circelStyle =
        isActive || isCompleted ? styles.activeCircle : styles.circle;
    const lineStyles =
        isActive || isCompleted ? styles.activeLine : styles.line;

    const handleClick = () => {
        if (isCompleted) {
            goToStep(number);
        }
    };

    return (
        <div className={styles.stepContainer}>
            <div className={!isFirst ? lineStyles : styles.noLine}></div>
            <div className={circelStyle} onClick={handleClick}>
                <div>{number}</div>
            </div>
            <div className={!isLast ? lineStyles : styles.noLine}></div>
        </div>
    );
};

export default Step;
