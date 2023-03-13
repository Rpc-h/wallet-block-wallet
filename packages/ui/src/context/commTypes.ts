enum ACCOUNT {
    CREATE = "CREATE_ACCOUNT",
    EXPORT_JSON = "EXPORT_ACCOUNT_JSON",
    EXPORT_PRIVATE_KEY = "EXPORT_ACCOUNT_PK",
    IMPORT_JSON = "IMPORT_ACCOUNT_JSON",
    IMPORT_PRIVATE_KEY = "IMPORT_ACCOUNT_PK",
    REMOVE = "REMOVE_ACCOUNT",
    RESET = "RESET_ACCOUNT",
    RENAME = "RENAME_ACCOUNT",
    SELECT = "SELECT_ACCOUNT",
    GET_BALANCE = "GET_ACCOUNT_BALANCE",
    REFRESH_TOKEN_ALLOWANCES = "REFRESH_TOKEN_ALLOWANCES",
    HIDE = "HIDE_ACCOUNT",
    UNHIDE = "UNHIDE_ACCOUNT",
    GET_NATIVE_TOKEN_BALANCE = "GET_NATIVE_TOKEN_BALANCE",
}

enum APP {
    LOCK = "LOCK_APP",
    UNLOCK = "UNLOCK_APP",
    GET_IDLE_TIMEOUT = "GET_IDLE_TIMEOUT",
    SET_IDLE_TIMEOUT = "SET_IDLE_TIMEOUT",
    SET_LAST_USER_ACTIVE_TIME = "SET_LAST_USER_ACTIVE_TIME",
    RETURN_TO_ONBOARDING = "RETURN_TO_ONBOARDING",
    OPEN_RESET = "OPEN_RESET",
    OPEN_HW_CONNECT = "OPEN_HW_CONNECT",
    OPEN_HW_REMOVE = "OPEN_HW_REMOVE",
    OPEN_HW_RECONNECT = "OPEN_HW_RECONNECT",
    SET_USER_SETTINGS = "SET_USER_SETTINGS",
    UPDATE_POPUP_TAB = "UPDATE_POPUP_TAB",
    REJECT_UNCONFIRMED_REQUESTS = "REJECT_UNCONFIRMED_REQUESTS",
    SET_USER_ONLINE = "SET_USER_ONLINE",
}

enum BACKGROUND {
    ACTION = "ACTION",
}

enum DAPP {
    CONFIRM_REQUEST = "CONFIRM_DAPP_REQUEST",
    ATTEMPT_REJECT_REQUEST = "ATTEMPT_REJECT_DAPP_REQUEST",
}

enum EXCHANGE {
    CHECK_ALLOWANCE = "CHECK_ALLOWANCE",
    APPROVE = "APPROVE_EXCHANGE",
    GET_QUOTE = "GET_EXCHANGE_QUOTE",
    GET_EXCHANGE = "GET_EXCHANGE",
    GET_SPENDER = "GET_SPENDER",
    EXECUTE = "EXECUTE_EXCHANGE",
}

enum BRIDGE {
    APPROVE_BRIDGE_ALLOWANCE = "APPROVE_BRIDGE_ALLOWANCE",
    GET_BRIDGE_AVAILABLE_CHAINS = "GET_BRIDGE_AVAILABLE_CHAINS",
    GET_BRIDGE_TOKENS = "GET_BRIDGE_TOKENS",
    GET_BRIDGE_QUOTE = "GET_BRIDGE_QUOTE",
    GET_BRIDGE_ROUTES = "GET_BRIDGE_ROUTES",
    EXECUTE_BRIDGE = "EXECUTE_BRIDGE",
}

enum EXTERNAL {
    SET_SITE_DATA = "SET_SITE_DATA",
    REQUEST = "EXTERNAL_REQUEST",
    EVENT_SUBSCRIPTION = "EVENT_SUBSCRIPTION",
}

enum NETWORK {
    CHANGE = "NETWORK_CHANGE",
    SET_SHOW_TEST_NETWORKS = "SHOW_TEST_NETWORKS",
    ADD_NETWORK = "ADD_NETWORK",
    EDIT_NETWORK = "EDIT_NETWORK",
    EDIT_NETWORKS_ORDER = "EDIT_NETWORKS_ORDER",
    REMOVE_NETWORK = "REMOVE_NETWORK",
    GET_SPECIFIC_CHAIN_DETAILS = "GET_SPECIFIC_CHAIN_DETAILS",
    GET_DEFAULT_RPC = "GET_DEFAULT_RPC",
    GET_RPC_CHAIN_ID = "GET_RPC_CHAIN_ID",
    SEARCH_CHAINS = "SEARCH_CHAINS",
}

enum PASSWORD {
    VERIFY = "VERIFY_PASSWORD",
    CHANGE = "CHANGE_PASSWORD",
}

enum PERMISSION {
    ADD_NEW = "ADD_NEW_SITE_PERMISSIONS",
    CONFIRM = "CONFIRM_PERMISSION_REQUEST",
    GET_ACCOUNT_PERMISSIONS = "GET_ACCOUNT_PERMISSIONS",
    REMOVE_ACCOUNT_FROM_SITE = "REMOVE_ACCOUNT_FROM_SITE",
    UPDATE_SITE_PERMISSIONS = "UPDATE_SITE_PERMISSIONS",
}

enum STATE {
    GET = "GET_STATE",
    SUBSCRIBE = "STATE_SUBSCRIBE",
}

enum ENS {
    LOOKUP_ADDRESS = "LOOKUP_ADDRESS_ENS",
    RESOLVE_NAME = "RESOLVE_ENS_NAME",
}

enum UD {
    RESOLVE_NAME = "RESOLVE_UD_NAME",
}

enum TRANSACTION {
    SEND_ETHER = "SEND_ETHER",
    ADD_NEW_SEND_TRANSACTION = "ADD_NEW_SEND_TRANSACTION",
    ADD_NEW_APPROVE_TRANSACTION = "ADD_NEW_APPROVE_TRANSACTION",
    UPDATE_SEND_TRANSACTION_GAS = "UPDATE_SEND_TRANSACTION_GAS",
    APPROVE_SEND_TRANSACTION = "APPROVE_SEND_TRANSACTION",
    GET_SEND_TRANSACTION_RESULT = "GET_SEND_TRANSACTION_RESULT",
    CALCULATE_SEND_TRANSACTION_GAS_LIMIT = "CALCULATE_SEND_TRANSACTION_GAS_LIMIT",
    CALCULATE_APPROVE_TRANSACTION_GAS_LIMIT = "CALCULATE_APPROVE_TRANSACTION_GAS_LIMIT",
    GET_LATEST_GAS_PRICE = "GET_LATEST_GAS_PRICE",
    FETCH_LATEST_GAS_PRICE = "FETCH_LATEST_GAS_PRICE",
    CONFIRM = "CONFIRM_TRANSACTION",
    REJECT = "REJECT_TRANSACTION",
    UPDATE_STATUS = "UPDATE_STATUS",
    CANCEL_TRANSACTION = "CANCEL_TRANSACTION",
    SPEED_UP_TRANSACTION = "SPEED_UP_TRANSACTION",
    GET_SPEED_UP_GAS_PRICE = "GET_SPEED_UP_GAS_PRICE",
    GET_CANCEL_GAS_PRICE = "GET_CANCEL_GAS_PRICE",
    GET_NEXT_NONCE = "GET_NEXT_NONCE",
    REJECT_REPLACEMENT_TRANSACTION = "REJECT_REPLACEMENT_TRANSACTION",
}

enum TOKEN {
    GET_BALANCE = "GET_TOKEN_BALANCE",
    GET_TOKENS = "GET_TOKENS",
    GET_USER_TOKENS = "GET_USER_TOKENS",
    GET_TOKEN = "GET_TOKEN",
    ADD_CUSTOM_TOKEN = "ADD_CUSTOM_TOKEN",
    ADD_CUSTOM_TOKENS = "ADD_CUSTOM_TOKENS",
    DELETE_CUSTOM_TOKEN = "DELETE_CUSTOM_TOKEN",
    SEND_TOKEN = "SEND_TOKEN",
    POPULATE_TOKEN_DATA = "POPULATE_TOKEN_DATA",
    SEARCH_TOKEN = "SEARCH_TOKEN",
    APPROVE_ALLOWANCE = "APPROVE_ALLOWANCE",
}

enum WALLET {
    CREATE = "CREATE_WALLET",
    IMPORT = "IMPORT_WALLET",
    RESET = "RESET",
    VERIFY_SEED_PHRASE = "VERIFY_SEED_PHRASE",
    REQUEST_SEED_PHRASE = "REQUEST_SEED_PHRASE",
    SETUP_COMPLETE = "SETUP_COMPLETE",
    DISMISS_WELCOME_MESSAGE = "DISMISS_WELCOME_MESSAGE",
    DISMISS_DEFAULT_WALLET_PREFERENCES = "DISMISS_DEFAULT_WALLET_PREFERENCES",
    DISMISS_RELEASE_NOTES = "DISMISS_RELEASE_NOTES",
    TOGGLE_RELEASE_NOTES_SUBSCRIPTION = "TOGGLE_RELEASE_NOTES_SUBSCRIPTION",
    UPDATE_ANTI_PHISHING_IMAGE = "UPDATE_ANTI_PHISHING_IMAGE",
    TOGGLE_ANTI_PHISHING_PROTECTION = "TOGGLE_ANTI_PHISHING_PROTECTION",
    TOGGLE_DEFAULT_BROWSER_WALLET = "TOGGLE_DEFAULT_BROWSER_WALLET",
    SET_NATIVE_CURRENCY = "SET_NATIVE_CURRENCY",
    GET_VALID_CURRENCIES = "GET_VALID_CURRENCIES",
    GENERATE_ON_DEMAND_RELEASE_NOTES = "GENERATE_ON_DEMAND_RELEASE_NOTES",
    HARDWARE_CONNECT = "HARDWARE_CONNECT",
    HARDWARE_REMOVE = "HARDWARE_REMOVE",
    HARDWARE_GET_ACCOUNTS = "HARDWARE_GET_ACCOUNTS",
    HARDWARE_IMPORT_ACCOUNTS = "HARDWARE_IMPORT_ACCOUNTS",
    HARDWARE_GET_HD_PATH = "HARDWARE_GET_HD_PATH",
    HARDWARE_SET_HD_PATH = "HARDWARE_SET_HD_PATH",
    HARDWARE_IS_LINKED = "HARDWARE_IS_LINKED",
    SET_DEFAULT_GAS = "SET_DEFAULT_GAS",

    // qr hardware devices
    HARDWARE_QR_SUBMIT_CRYPTO_HD_KEY_OR_ACCOUNT = "HARDWARE_QR_SUBMIT_CRYPTO_HD_KEY_OR_ACCOUNT",
    HARDWARE_QR_SUBMIT_SIGNATURE = "HARDWARE_QR_SUBMIT_SIGNATURE",
    HARDWARE_QR_CANCEL_SIGN_REQUEST = "HARDWARE_QR_CANCEL_SIGN_REQUEST",
}

enum ADDRESS_BOOK {
    CLEAR = "CLEAR",
    DELETE = "DELETE",
    SET = "SET",
    GET = "GET",
    GET_BY_ADDRESS = "GET_BY_ADDRESS",
    GET_RECENT_ADDRESSES = "GET_RECENT_ADDRESSES",
}

enum BROWSER {
    GET_WINDOW_ID = "GET_WINDOW_ID",
}

enum FILTERS {
    SET_ACCOUNT_FILTERS = "SET_ACCOUNT_FILTERS",
}

export const Messages = {
    ACCOUNT,
    APP,
    BACKGROUND,
    DAPP,
    EXCHANGE,
    EXTERNAL,
    NETWORK,
    PASSWORD,
    PERMISSION,
    STATE,
    TOKEN,
    ENS,
    UD,
    TRANSACTION,
    WALLET,
    ADDRESS_BOOK,
    BROWSER,
    FILTERS,
    BRIDGE,
}

export enum TransactionStatus {
    FAILED = "FAILED",
    DROPPED = "DROPPED",
    CANCELLED = "CANCELLED",
    SIGNED = "SIGNED",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED",
    SUBMITTED = "SUBMITTED",
    CONFIRMED = "CONFIRMED",
    UNAPPROVED = "UNAPPROVED",
}

export enum TransactionCategories {
    BLANK_DEPOSIT = "blankDeposit",
    BLANK_WITHDRAWAL = "blankWithdrawal",
    INCOMING = "incoming",
    SENT_ETHER = "sentEther",
    CONTRACT_DEPLOYMENT = "contractDeployment",
    CONTRACT_INTERACTION = "contractInteraction",
    TOKEN_METHOD_APPROVE = "approve",
    TOKEN_METHOD_TRANSFER = "transfer",
    TOKEN_METHOD_INCOMING_TRANSFER = "incoming_transfer",
    TOKEN_METHOD_TRANSFER_FROM = "transferfrom",
    EXCHANGE = "exchange",
    BRIDGE = "bridge",
    INCOMING_BRIDGE = "incoming_bridge",
    INCOMING_BRIDGE_REFUND = "incoming_bridge_refund",
    // Category that temporarely represents receiving transactions in a bridge operation:
    INCOMING_BRIDGE_PLACEHOLDER = "incoming_bridge_placeholder",
}

export enum PendingWithdrawalStatus {
    UNSUBMITTED = "UNSUBMITTED",
    PENDING = "PENDING",
    CONFIRMED = "CONFIRMED",
    FAILED = "FAILED",
    REJECTED = "REJECTED",
    MINED = "MINED",
}

export enum Origin {
    BACKGROUND = "BLANK_BACKGROUND",
    EXTENSION = "BLANK_EXTENSION",
    PROVIDER = "BLANK_PROVIDER",
}

export enum HardwareWalletOpTypes {
    SIGN_TRANSACTION = "SIGN_TRANSACTION",
    SIGN_MESSAGE = "SIGN_MESSAGE",
    APPROVE_ALLOWANCE = "APPROVE_ALLOWANCE",
    SIGN_SPEEDUP = "SIGN_SPEEDUP",
    SIGN_CANCEL = "SIGN_CANCEL",
}

export enum BackgroundActions {
    CLOSE_WINDOW = "CLOSE_WINDOW",
}

/**
 * The meta type of the transaction.
 * - `REGULAR`: A classic transaction
 * - `CANCEL`: A transaction sent to cancel another one
 * - `SPEED_UP`: A transaction sent to speed up another one
 * - `REGULAR_CANCELLING`: A transaction that we try to cancel
 * - `REGULAR_SPEEDING_UP`: A transaction that we try to speed up
 * - `REGULAR_NO_REPLACEMENT`: The purpose of this type is to have a way to block the feature if an error happen and speed up / cancel can't happen again (example: tx was already mined)
 */
export enum MetaType {
    REGULAR = "REGULAR",
    CANCEL = "CANCEL",
    SPEED_UP = "SPEED_UP",
    REGULAR_CANCELLING = "REGULAR_CANCELLING",
    REGULAR_SPEEDING_UP = "REGULAR_SPEEDING_UP",
    REGULAR_NO_REPLACEMENT = "REGULAR_NO_REPLACEMENT",
}

/**
 * Ethereum transaction types
 */
export enum TransactionType {
    LEGACY = 0,
    ACCESS_LIST_EIP2930 = 1,
    FEE_MARKET_EIP1559 = 2,
}

/**
 * Exchange types
 */
export enum ExchangeType {
    SWAP_1INCH = "SWAP_1INCH",
    SWAP_COWSWAP = "SWAP_COWSWAP",
    LIMIT_1INCH = "LIMIT_1INCH",
}

/**
 * Bridge implementation
 */
export enum BridgeImplementation {
    LIFI_BRIDGE = "LIFI_BRIDGE",
}

/**
 * Allowance status for the bridged asset
 */
export enum BridgeAllowanceCheck {
    NOT_CHECKED = "NOT_CHECKED",
    ENOUGH_ALLOWANCE = "ENOUGH_ALLOWANCE",
    INSUFFICIENT_ALLOWANCE = "INSUFFICIENT_ALLOWANCE",
}

/**
 * Hardware Wallet Devices Vendors
 */
export enum Devices {
    LEDGER = "LEDGER",
    TREZOR = "TREZOR",
    KEYSTONE = "KEYSTONE",
}

/**
 * Hardware Wallet HD Paths
 */

type HDPath = {
    name: string
    path: string
    default?: boolean
}
type DevicesHDPath = {
    [device in Devices]: HDPath[]
}

export const BIP44_PATH = `m/44'/60'/0'/0`
export const HDPaths: DevicesHDPath = {
    LEDGER: [
        { name: "BIP44 Standard", path: BIP44_PATH },
        { name: "Legacy (MEW / MyCrypto)", path: `m/44'/60'/0'` },
        { name: "Ledger Live", path: `m/44'/60'/0'/0/0`, default: true },
    ],
    TREZOR: [
        { name: "BIP44 Standard", path: BIP44_PATH, default: true },
        // { name: "Trezor Testnets", path: `m/44'/1'/0'/0` },
    ],
    KEYSTONE: [
        { name: "Ledger Live", path: `m/44'/60'/0'/0/0`, default: true },
        // https://support.keyst.one/3rd-party-wallets/eth-and-web3-wallets-keystone/bind-metamask-with-keystone/how-to-switch-eth-path-to-ledger-live-legacy-format
        { name: "Legacy (MEW / MyCrypto)", path: `m/44'/60'/0'` },
        { name: "BIP44 Standard", path: BIP44_PATH },
    ],
}

/**
 * The type of the added account
 */
export enum AccountType {
    HD_ACCOUNT = "HD Account",
    LEDGER = "Ledger",
    TREZOR = "Trezor",
    KEYSTONE = "Keystone",
    EXTERNAL = "External",
}

/**
 * The account status
 */
export enum AccountStatus {
    ACTIVE = "ACTIVE",
    HIDDEN = "HIDDEN",
}

//So far this statuses has been done using Li.Fi convention.
//To learn how do they work, please refer to their documentation: https://docs.li.fi/products/more-integration-options/li.fi-api/checking-the-status-of-a-transaction
export enum BridgeStatus {
    NOT_FOUND = "NOT_FOUND",
    INVALID = "INVALID",
    PENDING = "PENDING",
    DONE = "DONE",
    FAILED = "FAILED",
}

export enum BridgeSubstatus {
    //Substatus of Pending state
    WAIT_SOURCE_CONFIRMATIONS = "WAIT_SOURCE_CONFIRMATIONS",
    WAIT_DESTINATION_TRANSACTION = "WAIT_DESTINATION_TRANSACTION",
    BRIDGE_NOT_AVAILABLE = "BRIDGE_NOT_AVAILABLE",
    CHAIN_NOT_AVAILABLE = "CHAIN_NOT_AVAILABLE",
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    NOT_PROCESSABLE_REFUND_NEEDED = "NOT_PROCESSABLE_REFUND_NEEDED",
    REFUND_IN_PROGRESS = "REFUND_IN_PROGRESS",

    //Substatus of Done state
    COMPLETED = "COMPLETED",
    PARTIAL = "PARTIAL",
    REFUNDED = "REFUNDED",
}

export enum QuoteFeeStatus {
    OK = "OK",
    INSUFFICIENT_BALANCE_TO_COVER_FEES = "INSUFFICIENT_BALANCE_TO_COVER_FEES",
}

export enum TokenAllowanceStatus {
    UPDATED = "UPDATED",
    AWAITING_TRANSACTION_RESULT = "AWAITING_TRANSACTION_RESULT",
}
