## Opdracht 3
**Voer deze volledige opdracht uit in de map opdracht3**
- Maak een functie `getTodos` die een input parameter `userId` aanneemt.
- Doe in de functie `getTodos` een `fetch` call naar `https://jsonplaceholder.typicode.com/todos?userId=${userId}`.
- Het is de bedoeling dat de input parameter die je binnenkrijgt in `getTodos`, in de url gebruikt wordt op de plaats van `userId`
- Maak een tweede functie `myTodos` die `getTodos` aanroept en de resolved value afprint. Je mag kiezen of je met Promises of met async/await werkt.
- Voeg ook error handling toe in `myTodos` die een boodschap uitprint als de lijst niet opgehaald kan worden. 

**TIP** Je kan je catch block testen door de url aan te passen naar `https://jsonplaceholder.typicode/todos/${numberOfTodos}` (de `.com` weglaten). Vergeet het niet terug te veranderen.