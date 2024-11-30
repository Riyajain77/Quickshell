import React, { useState } from 'react';
import filterIcon from '../../Assets/Images/Tuning.svg';
import downIcon from '../../Assets/Images/Down.svg';

import './Navbar.css';

export default function Navbar({ groupValue, orderValue, handleGroupValue, handleOrderValue }) {
    const [isFilterVisible, setIsFilterVisible] = useState(false);

    const toggleFilterDisplay = () => setIsFilterVisible(!isFilterVisible);

    const handleGroupingChange = (e) => {
        if (e.target.value !== undefined) {
            handleGroupValue(e.target.value);
        }
        setIsFilterVisible(false);
    };

    const handleOrderingChange = (e) => {
        if (e.target.value !== undefined) {
            handleOrderValue(e.target.value);
        }
        setIsFilterVisible(false);
    };

    return (
        <section className="nav">
            <div className="nav-container">
                <div>
                    <button className="nav-disp-btn" onClick={toggleFilterDisplay}>
                        <div className="nav-disp-icon nav-disp-filter">
                            <img src={filterIcon} alt="Filter Icon" />
                        </div>
                        <div className="nav-disp-heading">Display</div>
                        <div className="nav-disp-icon nav-disp-drop">
                            <img src={downIcon} alt="Dropdown Icon" />
                        </div>
                    </button>
                    <div className={`nav-disp-dropdown ${isFilterVisible ? 'nav-disp-dropdown-show' : ''}`}>
                        <div className="nav-disp-filters">
                            <div className="nav-dropdown-category">Grouping</div>
                            <div className="nav-dropdown-selector">
                                <select
                                    value={groupValue}
                                    onChange={handleGroupingChange}
                                    className="nav-selector"
                                    name="grouping"
                                >
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="nav-disp-filters">
                            <div className="nav-dropdown-category">Ordering</div>
                            <div className="nav-dropdown-selector">
                                <select
                                    value={orderValue}
                                    onChange={handleOrderingChange}
                                    className="nav-selector"
                                    name="ordering"
                                >
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
