import React from "react";
import { IChildrenProp, IClassesProp } from "./IProps";

interface IProps extends IChildrenProp, IClassesProp {
    title: string;
}

const Card: React.FC<IProps> = ({classes, children, title}) => {
    const joinedClasses = classes?.join(" ") ?? "";
    return (
        <div className={ `card ${joinedClasses}` }>
            <div className="card-content">
                <h2 className="card-title">{ title }</h2>
                { ...children }
            </div>
        </div>
    );
};
Card.displayName = "Card";

export const RedCard: React.FC<IProps> = ({classes, children, title}) => {
    const allClasses = (classes ?? []).concat(["wine-red-card"]);
    return Card({classes: allClasses, children, title});
};
RedCard.displayName = "RedCard";

export const GreenCard: React.FC<IProps> = ({classes, children, title}) => {
    const allClasses = (classes ?? []).concat(["wine-green-card"]);
    return Card({classes: allClasses, children, title});
};
GreenCard.displayName = "GreenCard";

export const YellowCard: React.FC<IProps> = ({classes, children, title}) => {
    const allClasses = (classes ?? []).concat(["golden-yellow-card"]);
    return Card({classes: allClasses, children, title});
};
YellowCard.displayName = "YellowCard";
