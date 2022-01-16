import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { Icon, Stepper } from "../../Components";
import { IconType } from "../../Components/Icon";
import OnboardingComplete from "../../Containers/OnboardingComplete";
import OnboardingOptions from "../../Containers/OnboardingOptions";
import OnboardingUserForm from "../../Containers/OnboardingUserForm";
import OnboardingWorkspaceForm from "../../Containers/OnboardingWorkspaceForm";

import styles from "./index.scss"

export const OnboardingType = {
    self: "self",
    team: "team"
};

const initialState = {
    fullName: "",
    displayName: "",
    workspaceName: "",
    workspaceUrl: "",
    type: OnboardingType.self
};

const Onboarding = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [onboardingData, setOnboardingData] = useState(initialState);
    const history = useHistory();

    const nextStep = () => {
        setCurrentStep(currentStep+1)
    };

    const goToStep = (step) => {
        setCurrentStep(step);
    }

    const saveOnboardingData = (data) => {
        setOnboardingData((state) => ({...state, ...data}));
        nextStep();
    }

    const handleConfirm = () => {
        // Do necessary calls here, to sumbit onboarding data to server.

        // Redirect to home/dashboard.
        history.push("/dashboard");
    }

    const getStepComponents = () => {
        const {fullName, displayName, workspaceName, workspaceUrl, type } = onboardingData;
        const steps = [
            {
                step: 1,
                component: <OnboardingUserForm onSubmit={saveOnboardingData} data={{fullName, displayName}}/>
            },
            {
                step: 2,
                component: <OnboardingWorkspaceForm onSubmit={saveOnboardingData} data={{name: workspaceName, url: workspaceUrl}}/>
            },
            {
                step: 3,
                component: <OnboardingOptions onSubmit={saveOnboardingData}  selectedType={type} />
            },
            {
                step: 4,
                component: <OnboardingComplete onSubmit={handleConfirm} />
            }
        ];

        return steps;
    }

    return (
        <div className={styles.pageWrapper}>
            <div className={styles.container}>
                <div className={styles.headerWrapper}>
                    <Icon name={IconType.logo} iconStyles={styles.logo}  alt="logo" />
                    <span className={styles.title} >Eden</span>
                </div>
                <Stepper activeStep={currentStep} stepComponents={getStepComponents()} goToStep={goToStep}/>
            </div>
        </div>
    )
}

export default Onboarding;