import { Entry } from '../context/entries/index';

export interface IColumns {
    [key: string]: {
        name: string;
        items: Entry[];
    }
}