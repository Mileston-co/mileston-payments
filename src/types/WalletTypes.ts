/**
 * Supported wallet types for API operations
 * @typedef {("sui" | "eth" | "avax" | "pol" | "base" | "arb" | "solana")} WalletApiType
 */
export type WalletApiType = "sui" | "eth" | "avax" | "pol" | "base" | "arb" | "solana";

/**
 * Payload for creating a new sub wallet
 * @interface CreateSubWalletPayload
 */
export interface CreateSubWalletPayload {
    /** UUID of the sub wallet to create */
    subWalletUuid: string;
    /** Type of wallet to create (e.g., "eth", "solana") */
    walletType: WalletApiType;
}

/**
 * Supported wallet types for API operations
 */
export type WalletType = "sui" | "eth" | "avax" | "pol" | "base" | "arb" | "solana" | "all";

/**
 * Interface representing wallet addresses across different blockchains
 */
export interface IWalletAddress {
    sui?: string;
    eth?: string;
    avax?: string;
    pol?: string;
    base?: string;
    arb?: string;
    solana?: string;
}

/**
 * Interface representing wallet balances across different blockchains
 */
export interface IWalletBalances {
    sui?: string;
    eth?: string;
    avax?: string;
    pol?: string;
    base?: string;
    arb?: string;
    solana?: string;
}

/**
 * Response data for creating a new sub wallet
 */
export interface CreateSubWalletResponseData {
    /** Public key of the created wallet */
    publicKey: string;
    /** UUID of the created wallet */
    uuid: string;
    /** Recovery phrase for the wallet */
    recoveryPhrase: string;
}

/**
 * Response data for getting a specific sub wallet
 */
export interface GetSubWalletResponseData {
    /** Type of wallet data */
    type: 'all';
    /** Addresses across different blockchains */
    address: IWalletAddress;
    /** Total balance across all chains */
    balance: string;
    /** Balances for each blockchain */
    balances: IWalletBalances;
}

/**
 * Response data for getting all sub wallets
 */
export interface GetAllSubWalletsResponseData {
    /** Type of wallet data */
    type: 'all';
    /** Addresses for each sub wallet across different blockchains */
    address: {
        [subWalletUuid: string]: IWalletAddress;
    };
    /** Total balance across all wallets and chains */
    balance: string;
    /** Balances for each sub wallet and blockchain */
    balances: {
        [subWalletUuid: string]: IWalletBalances;
    };
}

/**
 * Response data for creating a new wallet in a sub wallet
 */
export interface CreateNewSubWalletResponseData {
    /** Type of the created wallet */
    type: WalletType;
    /** Address of the created wallet */
    address: string;
    /** Initial balance of the wallet */
    balance: string;
}

/**
 * Generic response wrapper for all wallet operations
 */
export interface WalletResponse<T = any> {
    /** HTTP status code */
    statusCode: number;
    /** Response message */
    message: string;
    /** Response data */
    data: T;
}

/**
 * Payload for sending funds from a wallet
 */
export interface SendFundsPayload {
    /** Amount of funds to send */
    amount: string;
    /** Recipient's blockchain address */
    recipientAddress: string;
    /** Type of wallet to send from */
    walletType: WalletType;
}

/**
 * Response from a successful fund transfer
 */
export interface SendFundsResponse {
    /** Status code of the response */
    statusCode: number;
    /** Message from the transaction */
    message: string;
} 