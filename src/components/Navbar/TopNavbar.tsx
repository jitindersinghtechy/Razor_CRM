import React, {useState} from 'react';
import TopLeftNavbar from './TopLeftNavbar';
import TopRightNavbar from './TopRightNavbar';


const TopNavbar = (props: any) => {
    const open: string | boolean = props.open;
    const links: Array<{ name: string, href: string }> = props.links;
    const [openResponsiveMenu, setOpenResponsiveMenu] = useState<boolean>(false)

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

    const setResponsiveMenuHandler = () => {
        setOpenResponsiveMenu(!openResponsiveMenu)
    }
    

    return (
        <div onClick={onClick} className='top-header'>
            <TopLeftNavbar openResponsiveMenu={openResponsiveMenu} />
            <TopRightNavbar setResponsiveMenuHandler={setResponsiveMenuHandler} />
        </div>
    );

}

export default TopNavbar;