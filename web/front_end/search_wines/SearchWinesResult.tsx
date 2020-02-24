import React from "react";
import { ColorCell, NameAndTypeCell, TextCell } from "../../components/TableCells";
import { IWine } from "../../lib/Rest";

interface ISearchWinesResultProps {
    result: IWine
}

export class SearchWinesResult extends React.Component<ISearchWinesResultProps, {}> {
    public render() {
        const result = this.props.result;
        return <tr>
            <ColorCell color={ result.color } />
            {/* TODO: send props to link in order to start in new purchase mode */}
            <NameAndTypeCell id={ result.id }
                name={ result.name }
                wineType={ result.wineType }
                url={ `/wines/${result.id}`}
            />
            <TextCell text={ result.producer } />
            <TextCell text={ result.region } />
            <TextCell text={ result.vitiArea } />
        </tr>;
    }
}
