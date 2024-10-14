## Opdracht 2
**Voer deze volledige opdracht uit in de map opdracht2**

- Installeer typescript in deze folder. Zie de [home pagina](./../README.md) als je niet meer weet hoe.
- Maak je volledige oefening in `index.ts`
- Definieer een **enum** `Vak` die volgende waardes kan bevatten: "Frontend", "Netwerkbeheer", "CyberSecurity".
- Definieer een **type alias** `DocentID` die eigenlijk een `string` is.
- Definieer een **interface** `Docent`. Een `Docent` heeft een naam (string), vakken (array van Vak), een uurloon en een aantal gewerkte uren (number).
- Definieer een functie `calculateInvoice` die als input parameter een docent heeft en een te factureren bedrag teruggeeft. (op basis van een uurloon en het aantal gewerkte uren).
- Definieer een **interface** `Student` met een naam (string), vakken (array van Vak) en punten (array van numbers).
- Definieer een **type** `SyntraProfile` die een `Student` of een `Docent` kan zijn.

**Tip**: gebruik geen any of unknown types.