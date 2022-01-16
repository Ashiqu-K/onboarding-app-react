import React, { useState } from "react";

import styles from "./index.scss"
import { Icon } from "../../Components";
import { IconType } from "../../Components/Icon";
import { OnboardingType } from "../../Pages/Onboarding";

const OnboardingOptions = ({onSubmit, selectedType}) => {
    const [selectedOption, setSelectedOption] = useState(selectedType);

    return (
        <>
            {/* Onboarding options form*/}
            <h1 className={styles.title}>{"How are you planning to use Eden?"}</h1>
            <span className={styles.subTitle}>{"We'll streamline your setup experience accordingly."}</span>
            <div className={styles.formContainer}>
                <div className={styles.optionWrapper}>
                    <div className={selectedOption === OnboardingType.self ? styles.activeOption : styles.option} onClick={() => {setSelectedOption(OnboardingType.self)}}>
                        <Icon name={selectedOption === OnboardingType.self ? IconType.userActive: IconType.user} alt={"user icon"} />   
                        <div className={styles.optionTitle}>{"For myslef"}</div>
                        <div className={styles.optionDescription}>{"Write better. Think more clearly. Stay organized."}</div>
                    </div>

                    <div className={selectedOption === OnboardingType.team ? styles.activeOption : styles.option} onClick={() => {setSelectedOption(OnboardingType.team)}}>
                        <Icon name={selectedOption === OnboardingType.team ? IconType.userGroupActive: IconType.userGroup} alt={"user icon"} />
                        <div className={styles.optionTitle}>{"With my team"}</div>
                        <div className={styles.optionDescription}>{"Wikis, docs, tasks & projects, all in one place."}</div>
                    </div>
                </div>

                <button className={styles.button} onClick={() => {onSubmit(selectedType)}}>{"Create Workspace"}</button>
            </div>
        </>
    )
}

export default OnboardingOptions;