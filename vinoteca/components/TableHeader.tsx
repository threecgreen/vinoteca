import * as React from "react";

export interface ISorting<T> {
    ascending: boolean;
    sorting: T;
}

interface ITableHeaderProps<T> {
    setSorting: (sorting: ISorting<T>) => void;
    ascending: boolean;
    sorting: T;
}

export class TableHeader<T> extends React.Component<ITableHeaderProps<T>, {}> {
    public constructor(props: ITableHeaderProps) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }
    public render() {
        // TODO: show up or down arrow depending on sorting
        return (
            <th onClick={ this.onClick }>

            </th>
        )
    }

    public onClick(e: React.MouseEvent) {
        e.preventDefault();
        this.props.setSorting({
            ascending: !this.props.ascending,
            sorting: this.props.sorting,
        });
    }
}
