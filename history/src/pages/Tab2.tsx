import React from 'react';
import {IonButton, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {Redirect, Route, RouteComponentProps} from "react-router-dom";
import Tab1 from "./Tab1";
import Tab3 from "./Tab3";
import Tab1Child1 from "./Tab1Child1";

interface Props extends RouteComponentProps {
}

interface State {
    redirectTo: string | null;
}

class Tab2 extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.state = {
            redirectTo: null
        };
    }

    render() {
        return <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Tab 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton type="button" onClick={this.go}>Go To Tab1</IonButton>
                <IonButton type="button" onClick={this.goChild}>Go To Tab1Child1</IonButton>

            </IonContent>
        </IonPage>
    }

    go = async () => {
        this.props.history.replace("/tab1");
    };

    goChild = async () => {
        this.props.history.replace("/tab1/tab1child1");
    };
}

export default Tab2;


