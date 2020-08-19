import React from 'react';
import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import {Redirect} from "react-router-dom";

interface Props {
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

        if (this.state.redirectTo) {
            return <Redirect to={this.state.redirectTo} />;
        }

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
            </IonContent>
        </IonPage>
    }

    go = async () => {
        this.setState({redirectTo: "/tab1"})
    };
}

export default Tab2;


