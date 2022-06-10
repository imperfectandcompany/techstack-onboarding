import { CreateAnimation, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, person, settings } from 'ionicons/icons';
import Tab1 from '../pages/Timeline';
import Tab2 from '../pages/Profile';
import Tab3 from '../pages/Settings';
import { FC, useRef } from "react";
import styles from './AnimatedTabBar.module.css'; // Import css modules stylesheet as styles
import { useEffect, useState } from "react";
import { Redirect, Route } from "react-router";

const AnimatedTabBar = () => {

    const [activeTab, setActiveTab] = useState("tab0");
    const switchRefs = useRef([]);

    const tabs = [

        {
            label: "Home",
            url: "/home",
            icon: home,
            color: "#76b140",
            backgroundColor: "#ddf7c5",
            component: Tab1
        },
        {
            label: "Profile",
            url: "/profile",
            icon: person,
            color: "#e46062",
            backgroundColor: "#fcddde",
            component: Tab2
        },
        {
            label: "Settings",
            url: "/settings",
            icon: settings,
            color: "#3578e5",
            backgroundColor: "#e7f0ff",
            component: Tab3
        }
    ];

    const revealAnimation = {

        property: "transform",
        fromValue: "translateX(-30px)",
        toValue: "translateX(0px)"
    };

    const switchAnimation = {

        duration: 200,
        direction: "normal",
        iterations: "1",
        fromTo: [revealAnimation],
        easing: "ease-in-out"
    };

    const getTabButtonStyle = (tab: { label?: string; url?: string; icon?: string; color: any; backgroundColor: any; component?: FC<{}>; }) => {

        const tabStyle = {

            backgroundColor: tab.backgroundColor,
            color: tab.color,
            transition: "0.5s all ease-in-out"
        };

        return tabStyle;
    }



    return (

        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>

                    {tabs.map((tab, index) => {

                        return (
                            <Route key={index} exact path={tab.url}>
                                <tab.component />
                            </Route>
                        );
                    })}

                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom" onIonTabsDidChange={e => setActiveTab(e.detail.tab)}>

                    {tabs.map((tab, index) => {

                        const tabStyle = getTabButtonStyle(tab);
                        const isActive = activeTab === `tab${index}`;

                        return (
                            <IonTabButton key={index} style={isActive ? tabStyle : {}} tab={`tab${index}`} href={tab.url}>

                                <IonIcon icon={tab.icon} />



                            </IonTabButton>
                        );
                    })}
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    );
}

export default AnimatedTabBar;