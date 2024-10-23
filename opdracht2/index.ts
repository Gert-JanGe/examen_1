/**
 * Punten 10/10
 */

enum Vak{
    Frontend,
    Netwerkbeheer,
    CyberSecurity
}

type DocentID = string;

interface Docent {
    naam: string;
    vakken: Vak[];
    uurloon: number;
    gewerkteUren: number;
}

function calculateInvoice(docent: Docent): number{
    return docent.uurloon * docent.gewerkteUren;
}

interface Student {
    naam: string;
    vakken: Vak[];
    punten: number[];
}

type SyntraProfile = Student | Docent;

const myTeacher: Docent = { naam: "Anneleen", vakken: [Vak.Frontend], uurloon: 100, gewerkteUren: 10 };
console.log(calculateInvoice(myTeacher));