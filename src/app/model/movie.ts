import { Actor } from "./actor";
 
export interface Movie
{
    id : number;
    name: String;
    director: String;
    actorlist: Actor[];
    yearOfProduction: String;
    filmGenre: String;
    filmCode: String;
    

}