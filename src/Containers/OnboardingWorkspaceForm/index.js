import React, { useState } from 'react'
import { Button, TextField } from '../../Components'
import { ButtonType } from '../../Components/Button'

import styles from './index.scss'

const WorkspaceForm = ({ onSubmit, data }) => {
    const [workspace, setName] = useState({ ...data })
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        setName((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const handleSubmit = () => {
        // clear errors.
        setErrorMessage('')

        if (!workspace.name) {
            setErrorMessage('Workspace name cannot be empty.')
            return
        }

        onSubmit({ workspaceName: workspace.name, workspaceUrl: workspace.url })
    }

    return (
        <>
            {/* Workspace form*/}
            <h1 className={styles.title}>
                {"Let's set up a home for all your work"}
            </h1>
            <span className={styles.subTitle}>
                {'You can always create another workspace later.'}
            </span>
            <div className={styles.formContainer}>
                <TextField
                    label={'Workspace Name'}
                    value={workspace.name}
                    name={'name'}
                    error={errorMessage}
                    wrapperStyles={styles.inputWrapper}
                    onChange={handleChange}
                />

                <div className={styles.urlInputWrapper}>
                    <label className={styles.urlInputLabel}>
                        Workspace URL{' '}
                        <span className={styles.optional}>(optional)</span>
                    </label>
                    <div className={styles.urlInput}>
                        <div className={styles.inputPrefix}>
                            {' '}
                            {'www.eden.com/'}
                        </div>
                        <TextField
                            value={workspace.url}
                            name={'url'}
                            wrapperStyles={styles.inputWrapper}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <Button
                    label={'Create Workspace'}
                    onClick={handleSubmit}
                    type={ButtonType.primary}
                    buttonClass={styles.button}
                />
            </div>
        </>
    )
}

export default WorkspaceForm
