import BN from 'bn.js';

export interface LockInput {
    duration: number;
    amount: BN;
    affiliation: string;
    rate: number;
}

export interface TimeFormat {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

export interface LockEvent {
    eth: BN; // this uses BN.js instead of BigNumber.js because that is what eth helper uses
    duration: number;
    lock: string;
    introducer: string;
    blockNo: number;
    timestamp: string; // in Unix epoch
}

// option data is the type that is going to be passed to the component
export type OptionData = {
    dataSets: OptionItem[];
    onChoose: Function;
};

// option item type is used to provide the data for dropdown items
export type OptionItem = {
    label: string; // the dropdown display label
    value: number | string; // dropdown select return value
};