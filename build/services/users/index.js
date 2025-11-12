import { Method } from "../../methods.js";
export default (({ call })=>({
        fields: ()=>call(Method.USER_FIELDS, {}),
        get: (id)=>call(Method.USER_GET, {
                id
            })
    }));
