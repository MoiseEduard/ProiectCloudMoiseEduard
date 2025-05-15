1. Introducere
   Acest proiect constă într-o aplicație web realizată cu framework-ul Next.js, ce permite utilizatorilor să exploreze o colecție de cărți românești și internaționale. Utilizatorul are posibilitatea de a adăuga o carte, de a vizualiza toate carțile din baza de date, dar și de a șterge sau edita înregistrările curente. Aplicația afișează și informații meteo folosind un API extern, pentru a demonstra integrarea cu servicii cloud, alături de celalalt serviciu cloud utilizat, MongoDB Atlas. Aplicația este găzduită pe platforma Vercel.

2. Descriere problemă
   Utilizatorii au nevoie de o platformă online unde pot să-și creeze și să țina evidența propriilor cărți din diverse genuri, într-un mediu intuitiv și prietenos. În plus, aplicația oferă și informații meteo în timp real pentru orașul selectat, pentru a adăuga un element interactiv și util. Această funcționalitate este realizată prin integrarea cu un API cloud, respectând cerințele proiectului privind utilizarea serviciilor cloud.

3. Descriere API
   3.1 OpenWeatherMap API – un serviciu care oferă date meteo actualizate global.

Autentificare:
Cheia API este transmisă ca parametru appid. Pentru securitate, cheia este stocată în variabila de mediu OPENWEATHER_API_KEY și nu este expusă în frontend.

Exemplu Request:
GET http://localhost:3000/api/weather?city=Bucharest – va returna vremea din București.

3.2 MongoDB Atlas – o bază de date NoSQL cloud, utilizată pentru stocarea și gestionarea colecției de cărți a utilizatorilor.

Aplicația comunică cu MongoDB Atlas prin API-uri REST personalizate implementate în backend. Datele despre cărți sunt stocate în colecții MongoDB, iar operațiile CRUD (creare, citire, actualizare, ștergere) sunt realizate prin aceste API-uri.

Conexiunea către MongoDB Atlas este securizată printr-un URI de conectare ce conține autentificarea, stocat în variabila de mediu NEXT_ATLAS_URI, evitând expunerea informațiilor sensibile.

Exemplu Request:
GET http://localhost:3000/api/records – va returna toate cartile din baza de date.

Metode HTTP utilizate
GET — pentru citirea datelor (ex: lista de cărți)

POST — pentru crearea unei noi înregistrări (ex: adăugarea unei cărți)

PUT — pentru actualizarea unei înregistrări existente

DELETE — pentru ștergerea unei cărți

4. Flux de date
   Utilizatorul accesează pagina principală a aplicației.
   Componenta React face un request către endpoint-ul intern /api/weather cu orașul dorit (implicit "Bucharest").
   Endpoint-ul API din Next.js face un request extern către OpenWeatherMap API, folosind cheia secretă stocată în variabilele de mediu.
   Răspunsul meteo este prelucrat și trimis înapoi către client.
   Componenta React afișează datele meteo în interfață.
   Pagina principală conține un mesaj adresat utilizatorului, alături de butonul Get Started, care prin apăsarea lui va trimite utilizatorul pe pagina de meniu. Acolo utilizatorul are 3 opțiuni: să creeze o nouă înregistrare, implicit să adauge o nouă carte în colecția sa, poate să vizualizeze întreaga sa colecție unde, de asemenea, are posibilitatea de a edita sau șterge înregistrări, dar are și posibilitatea de a reveni de fiecare dată la pagina de dinainte.

5. Referințe
   OpenWeatherMap API Documentation

Next.js API Routes

Next.js Environment Variables

Vercel Documentation
