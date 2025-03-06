import React from "react";
import UserInfoCard from "./Headers/UserInfoCard";
import NavigationTabs from "./NavigationTabs";
import PageHeader from "./Headers/PageHeader";
import TopNavbar from "./Navbar/TopNavbar";

type MenuLinkTypes = Array<{ name: string; href: string }>;

const menulinks: MenuLinkTypes = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const TopPageSection = (props: unknown) => {
  const [activePrimaryMenu, setActivePrimaryMenu] = React.useState<
    string | null
  >(null);
  const setActiveMenu = (menu: string) => {
    if (activePrimaryMenu === menu) {
      setActivePrimaryMenu(null);
    } else {
      setActivePrimaryMenu(menu);
    }
  };

  return (
    <>
      <TopNavbar
        links={menulinks}
        activePrimaryMenu={activePrimaryMenu}
        setActivePrimaryMenu={setActiveMenu}
      />
      <PageHeader />
      <UserInfoCard />
      <NavigationTabs />
    </>
  );
};

export default TopPageSection;
