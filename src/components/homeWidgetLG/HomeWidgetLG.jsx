import React from 'react';
import "./homeWidgetLG.css";

export default function HomeWidgetLG() {

    const Button = ({ type }) => {
        return <button className={"homeWidgetLGButton " + type}>{type}</button>;
    };

    return (
    <div className='homeWidgetLG'>
        <span className ="homeWidgetLGTitel">Latest Installed Patch</span>
        <table className="homeWidgetLGTable">
            <tr className="homeWidgetLGTableRow">
                <th className="homeWidgetLGTableCell">Patch Name</th>
                    <th className="homeWidgetLGTableCell">Installation Date</th>
                    <th className="homeWidgetLGTableCell">Installed On</th>
                    <th className="homeWidgetLGTableCell">Status</th>
                </tr>
                <tr className="homeWidgetLGTableRow">
                    <td className="homeWidgetLGUser">
                        <span className="homeWidgetLGUserName">
                            Patch 1
                        </span>
                    </td>
                    <td className="homeWidgetLGDate">1 Jan 2022</td>
                    <td className="homeWidgetLGSysNo">100</td>
                    <td className="homeWidgetLGStatus">
                        <Button type="Success"/>
                    </td>
                </tr> 
                <tr className="homeWidgetLGTableRow">
                    <td className="homeWidgetLGUser">
                    <span className="homeWidgetLGUserName">
                        Patch 2
                    </span>
                    </td>
                    <td className="homeWidgetLGDate">1 Jan 2022</td>
                    <td className="homeWidgetLGSysNo">170</td>
                    <td className="homeWidgetLGStatus">
                    <Button type="Running"/>
                    </td>
                </tr> 
                <tr className="homeWidgetLGTableRow">
                    <td className="homeWidgetLGUser">
                    <span className="homeWidgetLGUserName">
                        Patch 3
                    </span>
                    </td>
                    <td className="homeWidgetLGDate">1 Jan 2022</td>
                    <td className="homeWidgetLGSysNo">320</td>
                    <td className="homeWidgetLGStatus">
                    <Button type="Failed"/>
                    </td>
                </tr> 
                <tr className="homeWidgetLGTableRow">
                <td className="homeWidgetLGUser">
                    <span className="homeWidgetLGUserName">
                        Patch 4
                    </span>
                    </td>
                    <td className="homeWidgetLGDate">1 Jan 2022</td>
                    <td className="homeWidgetLGSysNo">8</td>
                    <td className="homeWidgetLGStatus">
                    <Button type="Declined"/>
                    </td>
                </tr>        
       
      
            </table>
        </div>
    );  // end return
}