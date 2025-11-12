import got from 'got';
import { Method, MethodParams, MethodPayload } from '../../methods.js';
import { Payload } from '../../payloads.js';
/**
 * Checks wether payload have any errors and if it does — throws them
 * Bitrix payload types do not provide discriminators, so we're forced to type cast them
 */
export declare const handlePayload: <P extends Payload<unknown>>(payload: P) => P;
export type Call = <M extends Method>(method: M, params: MethodParams<M>) => Promise<MethodPayload<M>>;
type Dependencies = {
    readonly get: typeof got.get;
};
/**
 * Dispatches a request with specified method and params. Will fill figure out payload type based on the Method
 */
declare const _default: ({ get }: Dependencies) => Call;
export default _default;
