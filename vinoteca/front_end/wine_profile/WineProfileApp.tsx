import React from "react";
import Logger from "../../lib/Logger";
import { IWineGrape, Wine } from "../../lib/RestTypes";
import { Preloader } from "../../components/Preloader";
import { WineData } from "./WineData";
import { Col } from "../../components/Grid";
import { WineImg } from "./WineImg";

interface IProps {
    id: number;
}

interface IState {
    isEditing: boolean;
    // "Pure" state
    hasImage: boolean;
    grapes: IWineGrape[];
    wine?: Wine;
    purchases: Purchase[];
}

export class WineProfile extends React.Component<IProps, IState> {
    private readonly logger: Logger;

    public constructor(props: IProps) {
        super(props);

        this.logger = new Logger(this.constructor.name);
    }

    public render() {
        if (!this.state.wine) {
            return <Preloader />;
        }
        if (this.state.isEditing) {
            return;
        }

        return (
            <div className="container">
                <Wine
                >
                    { this.renderWineDetails() }
                </Wine>
            </div>
        );
    }

    private renderWineDetails() {
        if (this.state.hasImage && this.state.grapes) {
            return (
                <>
                    <Col s={ 12 } l={ 4 }>
                        { this.renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 4 }>
                        { this.renderGrapes() }
                    </Col>
                    <Col s={ 12 } l={ 4 }>
                        { this.renderWineImg() }
                    </Col>
                </>
            );
        }
        if (this.state.hasImage) {
            return (
                <>
                    <Col s={ 12 } l={ 6 }>
                        { this.renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 6 }>
                        { this.renderWineImg() }
                    </Col>
                </>
            );
        }
        if (this.state.grapes) {
            return (
                <>
                    <Col s={ 12 } l={ 6 }>
                        { this.renderWineData() }
                    </Col>
                    <Col s={ 12 } l={ 6 }>
                        { this.renderGrapes() }
                    </Col>
                </>
            );
        }
        return (
            <Col s={ 12 }>
                { this.renderWineData() }
            </Col>
        );
    }
}

    private renderWineData() {
        return (
            <WineData
            />
        );
    }

    private renderGrapes() {
        {/* TODO: Wine grapes */}
        return (

        );
    }

    private renderWineImg() {
        return <WineImg id={ this.props.id } />;
    }
}
