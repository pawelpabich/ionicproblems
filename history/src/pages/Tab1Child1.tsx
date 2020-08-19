import React from 'react';
import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import {Redirect, RouteComponentProps} from "react-router-dom";

interface Props extends RouteComponentProps {
}

interface State {
    redirectTo: string | null;
}

class Tab1Child1 extends React.Component<Props, State> {
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
                    <IonTitle>Tab1 Child 1</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton type="button" onClick={this.go}>Go To Tab2</IonButton>
            </IonContent>
        </IonPage>
    }

    go = async () => {
        this.props.history.replace("/tab2");
    };
}

export default Tab1Child1;

