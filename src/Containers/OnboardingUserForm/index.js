import React, { useEffect, useState } from 'react';
import { Button, TextField } from '../../Components';
import { ButtonType } from '../../Components/Button';

import styles from './index.scss';

const initialState = {
    fullName: '',
    displayName: '',
};

const OnboardingUserForm = ({ onSubmit, data }) => {
    const [name, setName] = useState({ ...data });
    const [errorMessage, setErrorMessage] = useState({});

    const handleChange = (e) => {
        setName((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = () => {
        // clear errors.
        setErrorMessage({});

        if (!name.fullName) {
            setErrorMessage({
                fullName: 'Full name cannot be empty.',
                displayName: '',
            });
            return;
        }

        if (!name.displayName) {
            setErrorMessage({
                displayName: 'Display name cannot be empty.',
                fullName: '',
            });
            return;
        }

        onSubmit({ ...name });
    };

    return (
        <>
            {/*user form*/}
            <h1 className={styles.title}>{'Welcome! First things first...'}</h1>
            <span className={styles.subTitle}>
                {'You can always change them later.'}
            </span>
            <div className={styles.formContainer}>
                <TextField
                    label={'Full Name'}
                    value={name.fullName}
                    name={'fullName'}
                    error={errorMessage?.fullName || ''}
                    wrapperStyles={styles.inputWrapper}
                    onChange={handleChange}
                />
                <TextField
                    label={'Display Name'}
                    value={name.displayName}
                    name={'displayName'}
                    error={errorMessage?.displayName || ''}
                    wrapperStyles={styles.inputWrapper}
                    onChange={handleChange}
                />
                <Button
                    label={'Create Workspace'}
                    onClick={handleSubmit}
                    type={ButtonType.primary}
                    buttonClass={styles.button}
                />
            </div>
        </>
    );
};

export default OnboardingUserForm;
