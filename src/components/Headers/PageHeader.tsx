import React, { useState } from "react";
import PageHeaderTitle from "./PageHeaderTitle";
import PageHeaderActions from "./PageHeaderActions";

const PageHeader = (props: any) => {
  const [toggleAction, setToggleAction] = useState<boolean>(false);
  const toggleActionHandler = () => {
    setToggleAction(!toggleAction);
  };

  return (
    <div className="account-details">
      <PageHeaderTitle />
      <PageHeaderActions
        toggleAction={toggleAction}
        toggleActionHandler={toggleActionHandler}
      />
    </div>
  );
};

export default PageHeader;
