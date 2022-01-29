import React from 'react';
import { ArrowDownwardTwoTone, ArrowUpwardTwoTone }  from "@material-ui/icons";
import "./featuredInfo.css";

export default function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Total Computer
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 1000 </span>
                    <span className="featuredMoneyRate"> 
                    -11% <ArrowDownwardTwoTone className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSubject"> Compared to last month </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Up-to-date Devies
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 3000 </span>
                    <span className="featuredMoneyRate"> 
                    11% <ArrowUpwardTwoTone className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSubject"> Compared to last month </span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitel">
                    Critical Vulenrability
                </span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney"> 3650 </span>
                    <span className="featuredMoneyRate"> 
                    11% <ArrowUpwardTwoTone className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSubject"> Need to be Fix ASAP </span>
            </div>

            
        </div>
    );
}