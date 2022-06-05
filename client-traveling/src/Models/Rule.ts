import { Characteristic } from "./Characteristic";
import { TEntity } from "./TEntity";

export interface Rule extends TEntity, Characteristic{
    location: Location
}