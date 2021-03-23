import React from 'react';

import './Sorry.css';

export default function Sorry() {
    return (
        <div className="welcome-container">
            <div className="welcome-content">
            
                <div className="sorry-title">Nothing Found</div>
                <div className="sorry-subtitle">We Have NO Results</div>
               
                <div className="sorry-text">
                    We Are Sorry to Inform You that the Search you Just tried, have no results.

                    Try with another one!
                </div>

            </div>            
        </div>
    )
}
