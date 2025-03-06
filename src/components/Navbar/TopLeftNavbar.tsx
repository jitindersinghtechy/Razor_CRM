import MenuItem from "./MenuItem";
import AppLogo from "../AppLogo/AppLogo";

const TopLeftNavbar = ({openResponsiveMenu}:{openResponsiveMenu:boolean}) => {
  return (
    <div className="left-content">
      <AppLogo />
      <ul className={`menu-items ${openResponsiveMenu?'fixed':''}`}>
        <MenuItem title="Dashboard" />
        <MenuItem title="CRM" />
        <MenuItem title="Inventory" />
        <MenuItem title="Purchases" />
        <MenuItem title="Sales" />
        <MenuItem title="Recycling" />
        <MenuItem title="Shredding" />
        <MenuItem title="Finance" />
        <MenuItem title="Reports" />
        <MenuItem title="More" />
      </ul>
    </div>
  );
};

export default TopLeftNavbar;
