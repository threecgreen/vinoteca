import * as React from "react";

interface IMaterializeIconProps {
    className: string;
    iconName: string;
}

export const MaterialIcon: React.FunctionComponent<IMaterializeIconProps> = (props) => {
    return (
         <i className={ `material-icons ${props.className}` }>
            { props.iconName }
        </i>
    );
};
MaterialIcon.displayName = "MaterialIcon";
