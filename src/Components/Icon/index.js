import React from 'react';
import classNames from 'classnames';

import styles from './index.scss';
import user from '../../Assets/Images/user.png';
import userActive from '../../Assets/Images/user-active.png';
import userGroup from '../../Assets/Images/user-group.png';
import userGroupActive from '../../Assets/Images/user-group-active.png';
import logo from '../../Assets/Images/brand-logo.png';
import error from '../../Assets/Images/error.png';

export const IconType = {
    user: 'user',
    userActive: 'user-active',
    userGroup: 'user-group',
    userGroupActive: 'user-group-active',
    logo: 'logo',
};

const Icon = ({ name, iconStyles, alt }) => {
    const getIcon = () => {
        switch (name) {
            case IconType.user:
                return user;
            case IconType.userActive:
                return userActive;
            case IconType.userGroup:
                return userGroup;
            case IconType.userGroupActive:
                return userGroupActive;
            case IconType.logo:
                return logo;
            default:
                return error;
        }
    };

    return (
        <img
            className={classNames(styles.icon, iconStyles)}
            src={getIcon()}
            alt={alt || 'icon'}
        />
    );
};

export default Icon;
