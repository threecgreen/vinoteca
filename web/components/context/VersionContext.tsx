import { IChildrenProp } from "components/IProps";
import { IVersion } from "generated/rest";
import { getVersion } from "lib/api/version";
import { useInterval } from "lib/interval";
import Logger, { LogLevel, useLogger } from "lib/Logger";
import React from "react";

const VersionContext = React.createContext<IVersion | null>(null);
VersionContext.displayName = "VersionContext";

const HOUR_IN_MS = 60 * 60 * 1000;

const updateVersion = async (
    logger: Logger,
    setState: (v: IVersion | null) => void
) => {
    try {
        const version = await getVersion();
        logger.logInfo("Updated version");
        if (version
            && (version.version !== version.version || version.gitSha !== version.version)) {

            logger.logInfo("Version changed",
                        {oldVersion: version.version, oldGitSha: version.gitSha, ...version});
        }
        setState(version);
    } catch (e) {
        logger.logException("Unable to update version", e, {}, LogLevel.Warning);
    }
}
export const VersionProvider: React.FC<IChildrenProp> = ({children}) => {
    const logger = useLogger("VersionProvider");
    const [version, setVersion] = React.useState<IVersion | null>(null);

    // First time
    React.useEffect(() => {

        void updateVersion(logger, setVersion);
    }, [logger, setVersion]);
    // Schedule every hour
    useInterval(() => updateVersion(logger, setVersion), HOUR_IN_MS);

    return (
        <VersionContext.Provider value={ version }>
            { children }
        </VersionContext.Provider>
    );
}
VersionProvider.displayName = "VersionProvider";

export const useVersion = (): IVersion | null => {
    const version = React.useContext(VersionContext);
    if (version === undefined) {
        throw new Error("useVersion must be used within a VersionProvider");
    }
    return version;
}
