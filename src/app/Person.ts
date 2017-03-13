export class Person {
    id: number;
    navn: string;
    status: string;
    rank: number;
    rankNytt: number;
    akronymer: string;
    poeng: number;
    poengNytt: number;
    produksjon: Array<any>;
    assosiasjoner: Array<any>;
    tidligereAssosiasjoner: Array<any>;
    konkurrenter: Array<Person>;
    aarlig: Array<any>; // objekter
}