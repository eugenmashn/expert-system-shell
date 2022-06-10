import { Characteristic } from "./Characteristic";
import { LocationPlace } from "./Location";
import { TEntity } from "./TEntity";

export interface Rule extends TEntity, Characteristic{
    location: LocationPlace;
}