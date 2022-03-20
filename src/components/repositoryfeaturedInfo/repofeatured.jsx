import React from 'react';
import "./repofeatured.css";

export default function RepoFeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Total Windows Repository
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 10 </span>
                    <span className="featuredMoneyRate">

                    </span>
                </div>
                <span className="featuredSubject"> OS Patch : 3 , Application Patch 7  </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Total Linux Repository
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 10 </span>
                    <span className="featuredMoneyRate">

                    </span>
                </div>
                <span className="featuredSubject"> OS Patch : 3 , Application Patch 7  </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Total Mac Repository
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 10 </span>
                    <span className="featuredMoneyRate">
                        
                    </span>
                </div>
                <span className="featuredSubject"> OS Patch : 3 , Application Patch 7  </span>
            </div>


        </div>
    );
}