import { Method } from './methods.js';
export type Command = {
    readonly method: Method;
    readonly params?: Record<string, any>;
};
export type Commands = {
    readonly [key: string]: Command;
} | {
    readonly [index: number]: Command;
};
