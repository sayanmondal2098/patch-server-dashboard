import React from 'react';
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";

import HomeWidgetSM from '../../components/homeWidgetSM/HomeWidgetSM';
import HomeWidgetLG from '../../components/homeWidgetLG/HomeWidgetLG';

import { Userdata } from "../../dummyData";
import "./home.css";


export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={Userdata} titel="Device Analysis" grid Firstdatakey="Active System" Seconddatakey="Patch Installation" XAxisdataKey="name" />
            <div className="homeWidgets">
                <HomeWidgetSM/>
                <HomeWidgetLG />
            </div>
        </div>
    );
}