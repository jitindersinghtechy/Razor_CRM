import React from "react";
import TopPageSection from "../components/TopPageSection";
import "../assets/style/_global.scss";
import account from "../assets/images/account-icon.svg";
import summaryIcon from "../assets/images/summary-icon.svg";
import billingIcon from "../assets/images/billing-icon.svg";
import Card from "../components/GirdCards/Card";
import AccountInformation from "../components/AccountInformation/AccountInformation";
import AccountSummary from "../components/AccountSummary/AccountSummary";
import BillingAddress from "../components/BillingAddress/BillingAddress";
import contactIcon from "../assets/images/contact-icon.svg";
import addressIcon from "../assets/images/address-icon.svg";
import addIcon from "../assets/images/add-icon.svg";
import Contacts from "../components/Contacts/Contacts";
import Addresses from "../components/Addresses/Addresses";
import locationIcon from "../assets/images/location-icon.svg";
import frameMap from "../assets/images/map-frame.png";
import infoIcon from "../assets/images/info-icon.svg";
import avatar from "../assets/images/profile.png";
import Headquarters from "../components/Headquarters/Headquarters";
import Activity from "../components/Activity/Activity";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="main-wrapper">{children}</div>;
};

const Home = (props: any) => {
  return (
    <>
      <TopPageSection />
      <MainWrapper>
        <div className="row">
          <Card title="Account Information" image={account} classname={"col-4"}>
            <AccountInformation />
          </Card>
          <Card title="Summary" image={summaryIcon} classname={"col-4"}>
            <AccountSummary />
          </Card>
          <Card title="Billing Address" image={billingIcon} classname={"col-4"}>
            <BillingAddress />
          </Card>
        </div>
        <div className="row">
          <Card title="Contacts" image={contactIcon} classname={"col-6"}>
            <Contacts addIcon={addIcon} />
          </Card>
          <Card title="Addresses" image={addressIcon} classname={"col-6"}>
            <Addresses addIcon={addIcon} />
          </Card>
        </div>
        <div className="row">
          <Card title="Headquarters" image={locationIcon} classname={"col-6"} withHeaderBorderClass="with-header-border">
            <Headquarters frameMap={frameMap} />
          </Card>
          <Card title="Activity" image={addressIcon} classname={"col-6"}>
            <Activity infoIcon={infoIcon} avatar={avatar} />
          </Card>
        </div>
      </MainWrapper>
    </>
  );
};

export default Home;
