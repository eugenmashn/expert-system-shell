import { Characteristic } from "./Characteristic";
import { TEntity } from "./TEntity";

export interface LocationPlace extends TEntity, Characteristic{
    name: string;
    photoBase64: string;
}