const PageHeaderActions = ({
  toggleAction,
  toggleActionHandler,
}: {
  toggleAction: boolean;
  toggleActionHandler: () => void;
}) => {
  return (
    <div className="header-actions">
      <button className="btn-filled btn-border">Add Tags</button>
      <div className="dropdown">
        <button
          className="btn-filled border-right with-icon"
          onClick={toggleActionHandler}
        >
          Actions{" "}
          <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.46967 0.869694C0.762563 0.576801 1.23744 0.576801 1.53033 0.869694L5 4.33936L8.46967 0.869694C8.76256 0.576801 9.23744 0.576801 9.53033 0.869694C9.82322 1.16259 9.82322 1.63746 9.53033 1.93035L5.53033 5.93035C5.38968 6.07101 5.19891 6.15002 5 6.15002C4.80109 6.15002 4.61032 6.07101 4.46967 5.93035L0.46967 1.93035C0.176777 1.63746 0.176777 1.16259 0.46967 0.869694Z"
              fill="#434D59"
            />
          </svg>
        </button>
        <ul
          className="dropdown-menu"
          style={toggleAction ? { display: "block" } : { display: "none" }}
        >
          <li>Schedule Inbound</li>
          <li>Schedule Walk-In</li>
          <li>Schedule Outbound</li>
          <li>Manage Contracts</li>
          <li>Create Sales Order</li>
          <li>Set this as default</li>
        </ul>
      </div>
      <span className="border-span"></span>
      <button className="btn-filled btn-border">Cancel</button>
      <button className="btn-filled">Save</button>
    </div>
  );
};

export default PageHeaderActions;
