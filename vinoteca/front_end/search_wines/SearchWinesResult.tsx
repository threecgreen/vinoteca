import * as React from "react";
import { WineResult } from "./SearchWinesApp";
import { ColorCell, NameAndTypeCell, TextCell } from "../../components/TableCells";

interface ISearchWinesResultProps {
    result: WineResult
}

export class SearchWinesResult extends React.Component<ISearchWinesResultProps, {}> {
    public render() {
        const result = this.props.result;
        return <tr>
            <ColorCell color={ result.color } />
            <NameAndTypeCell id={ result.id } name={ result.name } wineType={ result.wineType }
                             url={ `/wines/${result.id}/new-purchase/`} />
            <TextCell text={ result.producer } />
            <TextCell text={ result.region } />
            <TextCell text={ result.vitiArea } />
        </tr>;
    }
}
