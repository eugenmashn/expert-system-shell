import { Characteristic } from "./Characteristic";
import { TEntity } from "./TEntity";

export interface Location extends TEntity, Characteristic{
    name: string;
    photoBase64: string;
}