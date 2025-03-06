import React, { useState } from "react";

interface NavigationTabs {
  id: string;
  label: string;
}

const NavigationTabs = (props: any) => {
  const [activeTab, setActiveTab] = useState<string>("overview");

  const tabs: NavigationTabs[] = [
    { id: "overview", label: "Overview" },
    { id: "shipping", label: "Shipping Accounts" },
    { id: "contacts", label: "Contacts" },
    { id: "addresses", label: "Addresses" },
    { id: "financial", label: "Financial Settings" },
    { id: "activity", label: "Activity" },
    { id: "quotes", label: "Quotes" },
    { id: "dsv-restrictions", label: "DSV Restrictions" },
    { id: "dsvs", label: "DSVs" },
    { id: "notes", label: "Notes" },
  ];

  return (
    <ul className="tab-items">
      {tabs.map((tab: NavigationTabs) => (
        <li
          key={tab.id}
          className={`tab ${activeTab === tab.id ? "active" : ""}`}
          onClick={() => setActiveTab(tab.id)}
        >
          {tab.label}
        </li>
      ))}
    </ul>
  );
};

export default NavigationTabs;
