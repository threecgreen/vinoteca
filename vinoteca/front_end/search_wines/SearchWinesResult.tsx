import * as React from "react";
import { ColorCell, NameAndTypeCell, TextCell } from "../../components/TableCells";
import { Wine } from "../../lib/RestTypes";
import { WineResult } from "./SearchWinesApp";

interface ISearchWinesResultProps {
    result: WineResult
}

export class SearchWinesResult extends React.Component<ISearchWinesResultProps, {}> {
    public render() {
        const result = this.props.result;
        return <tr>
            <ColorCell color={ result.color } />
            <NameAndTypeCell id={ result.id }
                nameAndType={ Wine.getNameAndType(result.name, result.wineType) }
                url={ `/wines/${result.id}/new-purchase/`}
            />
            <TextCell text={ result.producer } />
            <TextCell text={ result.region } />
            <TextCell text={ result.vitiArea } />
        </tr>;
    }
}
