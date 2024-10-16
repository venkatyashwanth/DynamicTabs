import React from 'react';
import "./index.css";

function TabItem(props) {
  const {tabdetails,isActive,clickTabItem} = props;
  const {tabId,displayText} = tabdetails;
  const onclickTab = () => {
    clickTabItem(tabId);
  }
  const activeTabBtnClassName = isActive? 'active-tab': '';

  return (
    <li>
      <button
      className={`tab-btn ${activeTabBtnClassName}`}
      onClick={onclickTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem