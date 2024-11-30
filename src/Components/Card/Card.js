import React from 'react';
import './Card.css';

export default function Card({ cardDetails }) {
  const { id, userObj, title, priority, tag } = cardDetails;

  const renderPriorityIcon = (priorityLevel) => {
    const icons = {
      0: (
        <div className="card-tag-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 1024 1024">
            <path fill="currentColor" d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z" />
          </svg>
        </div>
      ),
      1: (
        <div className="card-tag-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 48 48">
            <g fill="currentColor">
              <path
                fillRule="evenodd"
                d="M35 6a3 3 0 0 0-3 3v30a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-4Zm-1 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v30a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V9ZM19 21a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V21Zm3-1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V21a1 1 0 0 0-1-1h-4Z"
                clipRule="evenodd"
              />
              <path d="M6 33a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" />
            </g>
          </svg>
        </div>
      ),
      // Add cases for 2, 3, 4 as in original code
    };

    return icons[priorityLevel];
  };

  return (
    <div className="card-wrapper">
      <div className="card-header">
        <div className="card-identifier">{id}</div>
        <div className="card-avatar">
          <div className="card-avatar-initial">
            {userObj.name.slice(0, 2).toUpperCase()}
          </div>
          <div
            className={`card-avatar-status ${
              userObj.available ? 'card-avatar-status-active' : ''
            }`}
          ></div>
        </div>
      </div>
      <div className="card-heading">{title}</div>
      <div className="card-label">
        {renderPriorityIcon(priority)}
        {tag.map((tagItem, index) => (
          <div key={index} className="card-label-box">
            <div className="card-label-title">{tagItem}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
