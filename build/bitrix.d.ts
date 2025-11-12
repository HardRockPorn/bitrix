import { ExtendOptions } from 'got';
/**
 * Construct a Bitrix client with generic methods
 * @param restURI REST endpoint, like a `https://hello.bitrix24.ua/rest` or an inbound webhook endpoint,
 *                like a `https://hello.bitrix24.ua/rest/1/WEBHOOK_TOKEN`.
 * @param accessToken Bitrix application Access Token. Do not specify in case inbound webhook endpoint used.
 * @param clientOptions an object that will overwrite underlying configuration for HTTP client,
 *                see `https://github.com/sindresorhus/got/blob/main/documentation/2-options.md`.
 */
export declare const Bitrix: (restURI: string, accessToken?: string, clientOptions?: ExtendOptions) => {
    call: import("./client/methods/call.ts").Call;
    batch: import("./client/methods/batch.ts").Batch;
    list: import("./client/methods/list.ts").List;
    companies: {
        fields: () => Promise<import("./payloads.ts").GetPayload<import("./services/common.js").Fields>>;
        create: <D extends import("./methods.js").MethodParams<import("./methods.js").Method.CRM_COMPANY_ADD>>(fields: D["fields"], params?: D["params"]) => Promise<import("./payloads.ts").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads.ts").GetPayload<import("./services/companies/entities.js").Company>>;
        list: (params?: import("./methods.js").MethodParams<import("./methods.js").Method.CRM_COMPANY_LIST>) => Promise<import("./payloads.ts").ListPayload<import("./services/companies/entities.js").Company>>;
        update: <D extends import("./methods.js").MethodParams<import("./methods.js").Method.CRM_COMPANY_UPDATE>>(id: string, fields: D["fields"], params?: D["params"]) => Promise<import("./payloads.ts").GetPayload<boolean>>;
    };
    contacts: {
        fields: () => Promise<import("./payloads.ts").GetPayload<import("./services/common.js").Fields>>;
        create: <D extends import("./methods.js").MethodParams<import("./methods.js").Method.CRM_CONTACT_ADD>>(fields: D["fields"], params?: D["params"]) => Promise<import("./payloads.ts").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads.ts").GetPayload<import("./services/contacts/entities.js").Contact>>;
        list: (params?: import("./methods.js").MethodParams<import("./methods.js").Method.CRM_CONTACT_LIST>) => Promise<import("./payloads.ts").ListPayload<import("./services/contacts/entities.js").Contact>>;
        update: <D extends import("./methods.js").MethodParams<import("./methods.js").Method.CRM_CONTACT_UPDATE>>(id: string, fields: D["fields"], params?: D["params"]) => Promise<import("./payloads.ts").GetPayload<boolean>>;
    };
    deals: {
        fields: () => Promise<import("./payloads.ts").GetPayload<import("./services/common.js").Fields>>;
        create: <D extends import("./methods.js").MethodParams<import("./methods.js").Method.CRM_DEAL_ADD>>(fields: D["fields"], params?: D["params"]) => Promise<import("./payloads.ts").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads.ts").GetPayload<import("./services/deals/entities.js").Deal>>;
        list: (params?: import("./methods.js").MethodParams<import("./methods.js").Method.CRM_DEAL_LIST>) => Promise<import("./payloads.ts").ListPayload<import("./services/deals/entities.js").Deal>>;
        update: <D extends import("./methods.js").MethodParams<import("./methods.js").Method.CRM_DEAL_UPDATE>>(id: string, fields: D["fields"], params?: D["params"]) => Promise<import("./payloads.ts").GetPayload<boolean>>;
    };
    leads: {
        fields: () => Promise<import("./payloads.ts").GetPayload<import("./services/common.js").Fields>>;
        create: <D extends import("./methods.js").MethodParams<import("./methods.js").Method.CRM_LEAD_ADD>>(fields: D["fields"], params?: D["params"]) => Promise<import("./payloads.ts").GetPayload<number>>;
        get: (id: string) => Promise<import("./payloads.ts").GetPayload<import("./services/leads/entities.js").Lead>>;
        list: (params?: import("./methods.js").MethodParams<import("./methods.js").Method.CRM_LEAD_LIST>) => Promise<import("./payloads.ts").ListPayload<import("./services/leads/entities.js").Lead>>;
        update: <D extends import("./methods.js").MethodParams<import("./methods.js").Method.CRM_LEAD_UPDATE>>(id: string, fields: D["fields"], params?: D["params"]) => Promise<import("./payloads.ts").GetPayload<boolean>>;
    };
    statuses: {
        fields: () => Promise<import("./payloads.ts").GetPayload<import("./services/common.js").Fields>>;
        create: (fields: import("./methods.js").MethodParams<import("./methods.js").Method.CRM_STATUS_ADD>["fields"]) => Promise<import("./payloads.ts").GetPayload<number>>;
        delete: (id: string | number, params?: import("./methods.js").MethodParams<import("./methods.js").Method.CRM_STATUS_DELETE>["params"]) => Promise<import("./payloads.ts").GetPayload<boolean>>;
        get: (id: string | number) => Promise<import("./payloads.ts").GetPayload<import("./services/statuses/entities.js").Status>>;
        list: (params?: import("./methods.js").MethodParams<import("./methods.js").Method.CRM_STATUS_LIST>) => Promise<import("./payloads.ts").ListPayload<import("./services/statuses/entities.js").Status>>;
        update: (id: string | number, fields: import("./methods.js").MethodParams<import("./methods.js").Method.CRM_STATUS_UPDATE>["fields"]) => Promise<import("./payloads.ts").GetPayload<boolean>>;
    };
    users: {
        fields: () => Promise<import("./payloads.ts").GetPayload<import("./services/users/entities.js").User>>;
        get: (id?: string) => Promise<import("./payloads.ts").GetPayload<readonly import("./services/users/entities.js").User[]>>;
    };
};
export default Bitrix;
export * from './methods.js';
export * from './commands.js';
export * from './services/common.js';
export * from './services/companies/entities.js';
export * from './services/contacts/entities.js';
export * from './services/currencies/entities.js';
export * from './services/deals/entities.js';
export * from './services/leads/entities.js';
export * from './services/statuses/entities.js';
export * from './services/users/entities.js';
