import { Call } from '../../client/methods/call.js';
import { List } from '../../client/methods/list.js';
import { Method, MethodParams } from '../../methods.js';
type Dependencies = {
    readonly call: Call;
    readonly list: List;
};
declare const _default: ({ call, list }: Dependencies) => {
    fields: () => Promise<import("../../payloads.ts").GetPayload<import("../common.ts").Fields>>;
    create: <D extends MethodParams<Method.CRM_COMPANY_ADD>>(fields: D["fields"], params?: D["params"]) => Promise<import("../../payloads.ts").GetPayload<number>>;
    get: (id: string) => Promise<import("../../payloads.ts").GetPayload<import("./entities.ts").Company>>;
    list: (params?: MethodParams<Method.CRM_COMPANY_LIST>) => Promise<import("../../payloads.ts").ListPayload<import("./entities.ts").Company>>;
    update: <D extends MethodParams<Method.CRM_COMPANY_UPDATE>>(id: string, fields: D["fields"], params?: D["params"]) => Promise<import("../../payloads.ts").GetPayload<boolean>>;
};
export default _default;
