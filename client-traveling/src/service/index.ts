import { LocationPlace } from "../Models/Location";
import { Rule } from "../Models/Rule";
import { BaseService } from "./base-service";

export const ruleService = new BaseService<Rule>('Rule');
export const locationService = new BaseService<LocationPlace>('Location');