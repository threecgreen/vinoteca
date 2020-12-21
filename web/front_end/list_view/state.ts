import { IRestModel } from "lib/api/common";

export type Mode =
    | {type: "display"}
    | {type: "edit", id: number};

export interface IListViewState<T extends IRestModel> {
    mode: Mode;
    /** id -> record */
    records: Record<number, T>;
    hasLoaded: boolean;
}

export const initListViewState: <T extends IRestModel>() => IListViewState<T> = () => ({
    records: {},
    mode: {type: "display"},
    hasLoaded: false,
});

type Action<T extends IRestModel> =
    | {type: "setToDisplay"}
    | {type: "setToEdit", id: number}
    | {type: "setRecords", records: T[]}
    | {type: "updateRecord", record: T}
    | {type: "deleteRecord", id: number}
    | {type: "hasLoaded"};

export const listViewReducer = <T extends IRestModel>(
    state: IListViewState<T>, action: Action<T>
): IListViewState<T> => {
    switch (action.type) {
        case "setToDisplay":
            return { ...state, mode: {type: "display"} };
        case "setToEdit":
            return { ...state, mode: {type: "edit", id: action.id} };
        case "setRecords": {
            const records = action.records.reduce((acc: Record<number, T>, record) => {
                acc[record.id] = record;
                return acc;
            }, {});
            return {...state, records};
        }
        case "updateRecord": {
            const records = {...state.records};
            records[action.record.id] = action.record;
            return {...state, records};
        }
        case "deleteRecord": {
            const record = state.records[action.id];
            if (record) {
                const records = {...state.records};
                delete records[action.id];
                return {...state, records};
            }
            return state;
        }
        case "hasLoaded":
            return {...state, hasLoaded: true};
        default:
            return state;
    }
};
