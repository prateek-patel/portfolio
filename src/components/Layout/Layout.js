import React from 'react';
import Sidebar from '../Sidebar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent } from './style';

const Layout = ({ user, children }) => {
    return (
        <>
            <MobileNav />
            <Sidebar />
            <StyledContent>
                <UserHeader user={user} />
                <div>{children}</div>
            </StyledContent>
        </>
    );
};

export default Layout;