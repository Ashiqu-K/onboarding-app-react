import React from "react";
import styles from "./index.scss";
import Step from "./Step.js";

const Stepper = ({activeStep, stepComponents, goToStep}) => {
    const renderCurrentStep = () => {
        if(!stepComponents?.length || !stepComponents[activeStep-1]) return null;

        return stepComponents[activeStep-1].component
    };

    return (
        <>
            <div className={styles.stepperContainer}>
                {
                    stepComponents.map((_,step) => (
                        <Step key={step} number={step+1} total={stepComponents.length} isCompleted={step+1 <= activeStep} isActive={step+1 === activeStep} goToStep={goToStep} />
                    ))
                }
            </div>

            { renderCurrentStep() }
        </>
    )
}

export default Stepper;