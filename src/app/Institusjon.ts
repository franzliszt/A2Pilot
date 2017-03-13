export class Institusjon {
    id: number;
    navn: string;
    status: string;
    poeng: number;
    nviKroner: number;
    poengNytt: number;
    rank: number;
    rankNytt: number;
    konkurrenter: Array<Institusjon>;
}