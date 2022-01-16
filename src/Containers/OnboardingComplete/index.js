import React from "react";

import { Button } from "../../Components";
import { ButtonType } from "../../Components/Button";
import styles from "./index.scss"

const OnboardingComplete = ({onSubmit}) => {
    return (
        <>
            {/* Onboarding Complete */}
            <span className={styles.tickCircle}>{"✓"}</span>
            <h1 className={styles.title}>{"Congratulations, Eren!"}</h1>
            <span className={styles.subTitle}>{"You have completed onboarding, you can start using the Eden!"}</span>
            <div className={styles.formContainer}>
                <Button label={"Launch Eden"} onClick={onSubmit} type={ButtonType.primary} buttonClass={styles.button}/>
            </div>
        </>
    )
}

export default OnboardingComplete;