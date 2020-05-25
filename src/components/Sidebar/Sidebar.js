import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SideNavItems, SideNavLink } from 'carbon-components-react/lib/components/UIShell';

import { StyledSideNav } from './style';

const items = [
    { name: 'Me', path: '/' },
    { name: 'Project', path: '/projects' },
    { name: 'Work', path: '/work' },
    { name: 'Education', path: '/education' }
];

const Sidebar = () => {
    // useLocation hook which will let us determine which path is active.
    const location = useLocation();

    return (
        <StyledSideNav isFixedNav expanded isChildOfHeader={false} aria-label="Side navigation">
            <SideNavItems>
                {items.map(i => (
                    <SideNavLink
                        isActive={
                            location.pathname === '/' && i.path === '/' ? true : location.pathname === i.path
                        }
                        element={Link}
                        to={i.path}
                        key={i.name}
                    >
                        {i.name}
                    </SideNavLink>
                ))}
            </SideNavItems>
        </StyledSideNav>
    );
};

export default Sidebar;