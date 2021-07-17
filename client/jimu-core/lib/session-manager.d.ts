import { UserSession, ICredential, IUser } from '@esri/arcgis-rest-auth';
interface IDeferred<T> {
    promise: Promise<T>;
    resolve: (v: T) => void;
    reject: (v: any) => void;
}
interface PortalInfo {
    portalUrl: string;
    clientId?: string;
    isWebTier?: boolean;
    isMainPortal?: boolean;
}
/**
 * @ignore
 */
export declare enum SessionChangedReasonType {
    ArcGISJSSync = "ARCGIS_JS",
    OtherWindowSync = "OTHER_WINDOW",
    AddOrUpdate = "ADD_OR_UPDATE",
    Remove = "REMOVE"
}
/**
 * To manage sessions
 */
export declare class SessionManager {
    static instance: SessionManager;
    /**
     * The key is combined with urlKey and customBaseUrl for normal portal,
     * but if the customBaseUrl is a map url(start with maps|mapsqa|mapsdevext),
     * the customBaseUrl's prefix will be replaced by www|qaext|devext.
     *
     * urlKey is the first word of a url, such as 'www',
     * and customBaseUrl is a url part before 'sharing/rest' and after urlkey
     *
     * example1:
     * url: https://beijing.mapsqa.arcgis.com
     * urlKey: beijing
     * customBaseUrl: mapsqa.arcgis.com
     * key: qaext.arcgis.com
     *
     * example2:
     * url: http://private.test.com
     * urlKey: private
     * customBaseUrl: test.com
     * key: private.test.com
     *  */
    private _sessions;
    private _mainPortalInfo;
    private _trustedServers;
    private readonly _arcgisJSIM;
    private _isSigning;
    private _signInQueue;
    private _onSessionChangedCallbacks;
    /**
     * Get main session
     * The main session is your portal session
     */
    getMainSession(): UserSession;
    /**
     * Get all sessions
     */
    getSessions(): UserSession[];
    /**
     * Clear all sessions
     */
    clearSessions(): void;
    /**
     * On session changed
     */
    private _onSessionChanged;
    /**
     * Get singleton instance
     */
    static getInstance(): SessionManager;
    /**
     * @ignore
     */
    constructor();
    /**
     * We can init session from 3 places: local storage, cookie(esri_aopc), and parent app.
     *
     * First, we'll check `canReadSessionFromParent()`. If true, return `readSessionFromParent()`. Else,
     * Then, for develop edition, init session from local storage.
     *       for non-develop edition, init session from cookie(esri_aopc) or local storage.
     *
     * About sync session for embed:
     * Ref: https://esri.github.io/arcgis-rest-js/guides/embedded-apps/
     *
     * Note: **Embed** here means embed for auth sync only, by checking `arcgis-auth-origin` URL param.
     *
     * When an exb app is embedded, will call `UserSession.fromParent(arcgisAuthOrigin)` to get auth from host app.
     * When an exb app is as host app, will listen and reply auth message from/to all `*.arcgis.com` domains
     *
     * @param portalInfo
     */
    initSession(portalInfo?: PortalInfo): Promise<void>;
    /**
     * Init session from storage
     */
    private initSessionFromStorage;
    /**
     * Init session from cookie or storage
     * @param portalInfo
     */
    private initSessionFromCookieOrStorage;
    /**
     * Handle the situation for init sessiion failed.
     */
    private failedToInitSession;
    /**
     * Set session by PlatformSelf response
     * @param response
     * @param portalInfo
     */
    private setSesssionByPlatformSelfResponse;
    /**
     * Sends request to check token of session from storage.
     * @param portalUrl
     */
    isValidTokenFromStorage(portalUrl: string): Promise<boolean>;
    /**
     * Reture true if the session is a main session and is valid.
     * @param session
     */
    private readonly _isMainSession;
    /**
     * Handle invalid sign-in session.
     */
    private readonly _processInvalidSignInSession;
    /**
     *
     * Redirect to login page
     */
    gotoLoginInPage: () => void;
    /**
     * Get user info.
     * @param session
     */
    getUserInfo(): Promise<IUser>;
    /**
     * Handle works after got user info.
     * @param session
     */
    private afterGetUserInfo;
    /**
     * because when init from auth info, the client id may be null, so set here
     * @param clientId
     */
    setClientId(clientId: string): void;
    /**
     * because when init from auth info, the portal may be null, so set here
     * @param portalUrl
     */
    setMainPortalUrl(portalUrl: string): void;
    /**
     * because when init from auth info, the portalInfo may be null, so set here
     * @param portalInfo
     */
    setMainPortal(portalInfo: PortalInfo): void;
    /**
     * Get your portal info
     */
    getMainPortal(): PortalInfo;
    /**
     * Get trusted server from authorizedCrossOriginDomains of portalSelf info.
     */
    getTrustedServers(): string[];
    /**
     * Return true if the serverUrl is trusted.
     * @param serverUrl
     */
    isTrustedServer(serverUrl: string): boolean;
    /**
     * Remove the session from manager
     * @param session
     */
    removeSession(session: UserSession): boolean;
    /**
     * Remove session by key.
     * @param key
     */
    private _removeSessionByKey;
    /**
     * Add a new session, if the session's key has exist, replace it and
     * sync to other window's SessionManager.
     * @param session
     */
    addOrReplaceSession(session: UserSession): boolean;
    /**
     * Add a new session, if the session's key has exist, replace it.
     * @param session
     */
    private _addOrReplaceSession;
    /**
     * Set session
     * @param key
     * @param session
     *
     * NOTE: this is fire and forget and swallows the promise returned by _setSession
     */
    private _setSession;
    /**
     * Get session by url
     * @param url
     */
    getSessionByUrl(url: string): UserSession;
    /**
     * The key is used as session key.
     *
     * resource urls' session can't be used by sign in session,
     * but sign in session can be used by resource urls
     * @param url
     */
    getSessionKeyFromUrl(url: string): string;
    /**
     * Get portal url info.
     * @param portalUrl
     */
    private _getPortalUrlInfo;
    /**
     * Get session from auth info.
     * @param authInfo
     */
    private getSessionFromAuthInfo;
    /**
     * Get session from storage.
     */
    private getSessionFromStorage;
    /**
     * Remvoe cookie by key.
     * @param key
     */
    private readCookie;
    /**
     * Get portal from authInfo.
     * @param authInfo
     */
    private getPortalFromAuthInfo;
    /**
     * Reture true if it's a valid session.
     * @param session
     */
    private _isSessionExpired;
    /**
     * Get authInfo from session.
     * @param session
     */
    private _getAuthInfoFromSession;
    /**
     * Reture true if it's a valid authInfo.
     * @param authInfo
     */
    private checkAuthInfo;
    /**
     * Read info by key from localStorage.
     * @param key
     */
    private readAuthInfo;
    /**
     * Write authInfo to storage.
     * @param session
     */
    writeAuthInfo(session: UserSession): void;
    /**
     * Remove authInfo from local storage.
     * @param session
     */
    private removeAuthInfo;
    /**
     * Return the session key for AGOL.
     * If the url is not a public AGOL url or a org url, return undefined.
     * @param url
     */
    private _getStandardAGOLSessionKey;
    /**
     * This method is valid for AGOL only
     * @param sessionKey
     * @param orgUrlKey
     */
    private getOrgUrl;
    /**
     * Get hosted service
     * @param url
     */
    _getHostedService(url: string): Promise<string>;
    /**
     * Get key of hosted service.
     * @param url
     */
    private _getHostedServiceArcgisKey;
    /**
     * Get login domain.
     * @param url
     * @param orgKey
     */
    getLoginDomain(url: string, orgKey: string): Promise<string>;
    /**
     * Lanuch sign in
     * @param fromUrl The page you start sign in
     * @param popup If 'true', the window will popup, or, it will redirect to sign in page
     * @param desUrl The url you want to login
     */
    signIn(fromUrl?: string, popup?: boolean, desUrl?: string): Promise<UserSession>;
    /**
     * You can regist some callbacks for session changing
     * @param listener
     */
    addSessionChangeListener(listener: (session: UserSession[], reasonType: SessionChangedReasonType) => void): void;
    private _executSignIn;
    /**
     * Use it where a request will occur error
     */
    handleAuthError: (error: any, popup?: boolean) => Promise<UserSession>;
    /**
     * Sign out from main portal
     */
    signOut(): void;
    /**
     * Switch account
     */
    switchAccount(): void;
    /**
     * @ignore
     */
    defer<T>(): IDeferred<T>;
    /**
     * Generate token with credentials.
     * @param portalUrl
     * @param getTokenParam
     */
    private _generateToken;
    /**
     * Get portalSelf info with credentials.
     * @param portalUrl
     * @param getTokenParam
     */
    private _getPortalSelfInfo;
    /**
     * Get session from webTier portal.
     * This method can be used to check the portal is wetTier or not.
     * retuan a session means it's a webTier portal.
     * @param portalUrl
     * @param getTokenParam
     */
    getSessionFromWebTierPortal(portalUrl: string, getTokenParam?: string, portalSelfParam?: any): any;
    /**
     * Get session by trusted server url.
     * @param serverUrl
     */
    getSessionFromTrustedServer(serverUrl: any): Promise<any>;
    /****************************************************************
     * Methods for syncing session to IdentityManager of js-api
     ***************************************************************/
    /**
     * rehydrate session from a cached credential
     * @ignore
     * @param credential
     */
    addFromArcGisJSCredential(credential: ICredential): boolean;
    /*****************************************************************
     * Methods for syncing session to other window
     ****************************************************************/
    /**
     * Sync to other window's session manager
     */
    private _syncToOtherWindowSessionManager;
    /**
     * Sync session from other window, this if for build-app sync only.
     *
     * Don't sync to other windows' sessionManager, only use for sync from other window.
     * @ignore
     * @param sessions
     */
    syncSessionsFromOtherWindow(sessions: UserSession[]): void;
    private readSessionFromParent;
    private canReadSessionFromParent;
    private onSessionRequestMessage;
    enablePostMessageAuth(): void;
}
export default SessionManager;
