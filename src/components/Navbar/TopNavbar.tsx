import React from 'react';
import TopLeftNavbar from './TopLeftNavbar';
import TopRightNavbar from './TopRightNavbar';


const TopNavbar = (props: any) => {
    const open: string | boolean = props.open;
    const links: Array<{ name: string, href: string }> = props.links;

    /**
     * Handles the click event for the primary menu items.
     * Prevents the default anchor behavior, sets the active primary menu
     * to the one specified by the primaryMenuName prop, and logs the
     * primaryMenuName to the console.
     *
     * @param {Event} event - The event object for the click event.
     */
    const onClick = (event: React.MouseEvent<HTMLDivElement>) => {
        event.preventDefault();
        props.setActivePrimaryMenu(props.primaryMenuName);
    }

    return (
        <div onClick={onClick} className='top-header'>
            <TopLeftNavbar />
            <TopRightNavbar />
        </div>
    );

}

export default TopNavbar;