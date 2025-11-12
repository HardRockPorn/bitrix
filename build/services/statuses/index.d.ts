import { Call } from '../../client/methods/call.js';
import { Method, MethodParams } from '../../methods.js';
type Dependencies = {
    readonly call: Call;
};
declare const _default: ({ call }: Dependencies) => {
    fields: () => Promise<import("../../payloads.ts").GetPayload<import("../common.ts").Fields>>;
    create: (fields: MethodParams<Method.CRM_STATUS_ADD>["fields"]) => Promise<import("../../payloads.ts").GetPayload<number>>;
    delete: (id: string | number, params?: MethodParams<Method.CRM_STATUS_DELETE>["params"]) => Promise<import("../../payloads.ts").GetPayload<boolean>>;
    get: (id: string | number) => Promise<import("../../payloads.ts").GetPayload<import("./entities.ts").Status>>;
    list: (params?: MethodParams<Method.CRM_STATUS_LIST>) => Promise<import("../../payloads.ts").ListPayload<import("./entities.ts").Status>>;
    update: (id: string | number, fields: MethodParams<Method.CRM_STATUS_UPDATE>["fields"]) => Promise<import("../../payloads.ts").GetPayload<boolean>>;
};
export default _default;
