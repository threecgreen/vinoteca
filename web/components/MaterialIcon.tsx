import * as React from "react";

interface IProps {
    className?: string;
    iconName: string;
}

export const MaterialIcon: React.FC<IProps> = (props) => {
    return (
         <i className={ `material-icons ${props.className}` }>
            { props.iconName }
        </i>
    );
};
MaterialIcon.displayName = "MaterialIcon";
