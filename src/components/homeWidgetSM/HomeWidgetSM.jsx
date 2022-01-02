import React from 'react';
import { VisibilityTwoTone } from "@material-ui/icons";
import "./homeWidgetSM.css";

export default function HomeWidgetSM() {
    return (
        <div className='homeWidgetSM'>
            <span className="homeWidgetSMTitel">Newly Join Members</span>
            <ul className="homeWidgetSMList">
                <li className="homeWidgetSMListItem">
                    <img 
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                    className="homeWidgetSMImg"
                    />
                    <div className="homeWidgetSMUser">
                        <span className="homeWidgetSMUsername">Test User</span>
                        <span className="homeWidgetSMUserTitel">Software Engineer</span>
                    </div>
                    <button className="homeWidgetSMBTN">
                        <VisibilityTwoTone className="homeWidgetSMIcon"/>
                        Display 
                    </button>
                </li>
                <li className="homeWidgetSMListItem">
                    <img 
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                    className="homeWidgetSMImg"
                    />
                    <div className="homeWidgetSMUser">
                        <span className="homeWidgetSMUsername">Test User</span>
                        <span className="homeWidgetSMUserTitel">Software Engineer</span>
                    </div>
                    <button className="homeWidgetSMBTN">
                        <VisibilityTwoTone className="homeWidgetSMIcon"/>
                        Display 
                    </button>
                </li>
                <li className="homeWidgetSMListItem">
                    <img 
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                    className="homeWidgetSMImg"
                    />
                    <div className="homeWidgetSMUser">
                        <span className="homeWidgetSMUsername">Test User</span>
                        <span className="homeWidgetSMUserTitel">Software Engineer</span>
                    </div>
                    <button className="homeWidgetSMBTN">
                        <VisibilityTwoTone className="homeWidgetSMIcon"/>
                        Display 
                    </button>
                </li>
                <li className="homeWidgetSMListItem">
                    <img 
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                    className="homeWidgetSMImg"
                    />
                    <div className="homeWidgetSMUser">
                        <span className="homeWidgetSMUsername">Test User</span>
                        <span className="homeWidgetSMUserTitel">Software Engineer</span>
                    </div>
                    <button className="homeWidgetSMBTN">
                        <VisibilityTwoTone className="homeWidgetSMIcon"/>
                        Display 
                    </button>
                </li>
                <li className="homeWidgetSMListItem">
                    <img 
                    src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                    alt="" 
                    className="homeWidgetSMImg"
                    />
                    <div className="homeWidgetSMUser">
                        <span className="homeWidgetSMUsername">Test User</span>
                        <span className="homeWidgetSMUserTitel">Software Engineer</span>
                    </div>
                    <button className="homeWidgetSMBTN">
                        <VisibilityTwoTone className="homeWidgetSMIcon"/>
                        Display 
                    </button>
                </li>
            </ul>
        </div>
    );
}
