## Werkwijze
- Maak een eigen private repository aan op GitHub met de naam examen-advanced-frontend
- Clone deze eigen repository naar je lokale machine
- Clone de repo van de docent naar je lokale machine
- Kopieer alles (niet de hidden files zoals bv .git) van de docent repo naar je eigen repo
- Maak een `.gitignore` file waar je 2 regels aan toevoegt:
    - `node_modules`
    - `dist`
- Probeer alvast eens of je op dit punt kan pushen.

## Indienen
- Commit en push je eigen repo naar GitHub
- Stuur de link van je eigen repo naar de docent
- Voeg de docent toe als collaborator aan je eigen repo
- **EXTRA: Comprimeer (zip) de eigen repo (mapje met alle oplossingen) en upload deze bij Teams.**

## Opdrachten
Elke opdracht bevat een eigen README.md-bestand met instructies. Lees deze goed door. Maak de oplossing van een opdracht in de opdrachtmap.

## Installeren van TypeScript voor de oefeningen met TypeScript (opdracht 1 en 2)
- Initialiseer een nieuw npm project in deze folder met `npm init`
- Installeer typescript als devDependency `npm install -D typescript`
- Initialiseer typescript zodat er een tsconfig.json is `npx tsc --init`
- Voeg een npm script toe aan het package.json bestand.
    - Geef de script de naam `prod`
    - Geef het script de waarde `tsc index.ts --outDir dist && node dist/index.js`
- Je kan nu gewoon `npm run prod` in de juiste **opdracht folder** doen en dan zal je typescript code runnen. 

## Puntenverdeling
- Opdracht 1: 5 punten
- Opdracht 2: 10 punten
- Opdracht 3: 10 punten