import * as React from "react";
import { CSRFToken } from "../../components/CSRFToken";
import { Row } from "../../components/Grid";
import { PurchaseInputs } from "../../components/PurchaseInputs";

export class NewWineApp extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="container">
                <h3 id="page-title">Enter new wine information</h3>
                <form action="" className="col s12" method="post" encType="multipart/form-data">
                    <CSRFToken />
                    <PurchaseInputs displayInventoryBtn={ true } />
                    <Row s={ 12 }>

                    </Row>
                </form>
            </div>
        );
    }
}
