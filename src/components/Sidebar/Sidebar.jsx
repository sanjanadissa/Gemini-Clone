import React, { useContext, useState, useEffect, useRef } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const sidebarRef = useRef(null);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  // Handle mouse enter/leave for hover effect
  const handleMouseEnter = () => {
    setExtended(true);
  };

  const handleMouseLeave = () => {
    setExtended(false);
  };

  return (
    <div 
      className={`sidebar ${extended ? "expanded" : "collapsed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={sidebarRef}
    >
      <div className="top-section">
        <img className="menu" src={assets.menu_icon} alt="menu_icon" />
        
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt="plus_icon" />
          {extended && <p>New Chat</p>}
        </div>

        {extended && (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div 
                  key={index}
                  onClick={() => loadPrompt(item)} 
                  className="recent-entry"
                >
                  <img src={assets.message_icon} alt="message_icon" />
                  <p>{item.slice(0, 18)}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question_icon" />
          {extended && <p>Help</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history_icon" />
          {extended && <p>Activity</p>}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="setting_icon" />
          {extended && <p>Settings</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;