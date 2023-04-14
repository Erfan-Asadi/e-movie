import React from 'react'
import './style.scss';
import { useState } from 'react';

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);
  
  const activeTab = (tab, index) => {
    // because width's of each tab is 100px
    setLeft(100 * index);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  }

  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab, index) => (
          <span key={index} className={`tabItem ${selectedTab === index ? "active" : ""}`} onClick={() => activeTab(tab, index)}>{tab}</span>
        ))}
        <span className='movingBg' style={{ left: left }}></span>
      </div>

    </div>
  )
}

export default SwitchTabs