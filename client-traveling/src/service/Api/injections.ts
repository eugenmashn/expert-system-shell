import { apiCrudInject } from "./CreateApi";

export const apiLocation = apiCrudInject("location", 'location');
export const apiRule = apiCrudInject("rule", 'rule');