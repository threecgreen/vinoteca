import { IChildrenProp } from "components/IProps";
import { IVersion } from "generated/rest";
import { getVersion } from "lib/api/version";
import { useInterval } from "lib/interval";
import { useLogger } from "lib/Logger";
import React from "react";

const VersionContext = React.createContext<IVersion | null>(null);
VersionContext.displayName = "VersionContext";

const HOUR_IN_MS = 60 * 60 * 1000;

export const VersionProvider: React.FC<IChildrenProp> = ({children}) => {
    const logger = useLogger("VersionProvider");
    const [state, setState] = React.useState<IVersion | null>(null);

    const updateVersion = async () => {
        try {
            const version = await getVersion();
            logger.logInfo("Updated version");
            if (state && (state.version !== version.version || state.gitSha !== version.version)) {
                logger.logInfo("Version changed",
                               {oldVersion: state.version, oldGitSha: state.gitSha, ...version});
            }
            setState(version);
        } catch (e) {
            logger.logWarning("Unable to update version", {errorMessage: e.message});
        }
    }

    // First time
    React.useEffect(() => {
        updateVersion();
    }, []);
    // Schedule every hour
    useInterval(updateVersion, HOUR_IN_MS);

    return (
        <VersionContext.Provider value={ state }>
            { children }
        </VersionContext.Provider>
    );
}
VersionProvider.displayName = "VersionProvider";

export const useVersion = () => {
    const version = React.useContext(VersionContext);
    if (version === undefined) {
        throw new Error("useVersion must be used within a VersionProvider");
    }
    return version;
}
