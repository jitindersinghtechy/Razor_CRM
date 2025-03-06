import React from 'react';
import search from '../../assets/images/search-icon.svg';
import bell from '../../assets/images/bell-icon.svg';
import settings from '../../assets/images/settings-icon.svg';
import question from '../../assets/images/question-icon.svg';
import profile from '../../assets/images/profile.png';
import menuIcon from '../../assets/images/menu-icon.svg';

interface TopRightNavbarProps {
  setResponsiveMenuHandler: () => void; // Function type with no parameters and void return type
}

const TopRightNavbar: React.FC<TopRightNavbarProps> = ({ setResponsiveMenuHandler }) => {
  return (
    <div className='icons'>
      <img src={search} alt='' />
      <img src={bell} alt='' />
      <img src={settings} alt='' />
      <img src={question} alt='' />
      <img src={profile} alt='' className='profile' />
      <img src={menuIcon} alt='' onClick={setResponsiveMenuHandler} className='toggle-icon' /> {/* Calling function on click */}
    </div>
  );
};

export default TopRightNavbar;
