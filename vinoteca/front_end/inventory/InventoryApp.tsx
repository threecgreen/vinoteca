import * as React from "react";
import { Wine } from "../../lib/RestTypes";
import { Col, Row } from "../../components/Grid";


interface IState {
    wines: Wine[]
}

export class InventoryApp extends React.Component<{}, IState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            wines: [],
        };
    }

    public render() {
        return (
            <div className="container">
                <Row>
                    <Col s={ 12 }>
                        <h3 className="page-title">Current Inventory</h3>
                    </Col>
                </Row>
            </div>
        );
    }

    public componentDidMount() {

    }

    public onInventoryChange(e: React.MouseEvent, id: number, change: InventoryChange) {

    }
}
