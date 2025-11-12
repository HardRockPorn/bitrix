export type NumberString = string;
export type ISODate = string;
export type BoolString = 'Y' | 'N';
export type GenderString = 'M' | 'F' | '';
export type Fields = {
    readonly [key: string]: {
        readonly type: string;
        readonly isRequired: boolean;
        readonly isReadOnly: boolean;
        readonly isImmutable: boolean;
        readonly isMultiple: boolean;
        readonly isDynamic: boolean;
        readonly title: string;
    };
};
export type MultiField = {
    readonly ID: NumberString;
    readonly VALUE_TYPE: string;
    readonly VALUE: string;
    readonly TYPE_ID: string;
};
export type MultiFieldArray = ReadonlyArray<Pick<MultiField, 'VALUE' | 'VALUE_TYPE'>>;
