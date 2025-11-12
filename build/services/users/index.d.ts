import { Call } from '../../client/methods/call.js';
type Dependencies = {
    readonly call: Call;
};
declare const _default: ({ call }: Dependencies) => {
    fields: () => Promise<import("../../payloads.ts").GetPayload<import("./entities.ts").User>>;
    get: (id?: string) => Promise<import("../../payloads.ts").GetPayload<readonly import("./entities.ts").User[]>>;
};
export default _default;
