import { ColorCell, NameAndTypeCell, TextCell } from "components/TableCells";
import { IWine } from "generated/rest";
import React, { ReactElement } from "react";

interface ISearchWinesResultProps {
    result: IWine;
}

export class SearchWinesResult extends React.Component<ISearchWinesResultProps> {
    public render(): ReactElement {
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
