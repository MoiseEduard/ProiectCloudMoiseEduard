1. Introducere
   Acest proiect constă într-o aplicație web realizată cu framework-ul Next.js, ce permite utilizatorilor să exploreze o colecție de cărți românești și internaționale. Utilizatorul are posibilitatea de a adăuga o carte, de a vizualiza toate carțile din baza de date, dar și de a șterge sau edita înregistrările curente. Aplicația afișează și informații meteo folosind un API extern, pentru a demonstra integrarea cu servicii cloud, alături de celalalt serviciu cloud utilizat, MongoDB Atlas. Aplicația este găzduită pe platforma Vercel.

2. Descriere problemă
   Utilizatorii au nevoie de o platformă online unde pot să-și creeze și să țina evidența propriilor cărți din diverse genuri, într-un mediu intuitiv și prietenos. În plus, aplicația oferă și informații meteo în timp real pentru orașul selectat, pentru a adăuga un element interactiv și util. Această funcționalitate este realizată prin integrarea cu un API cloud, respectând cerințele proiectului privind utilizarea serviciilor cloud.

3. Descriere API
   Aplicatia mea utilizeaza doua servicii de tip API REST Cloud, unul prin care sunt preluate in timp real date despre vreme despre orice oras existent. La introducerea unui oras care nu exista, aplicatia va return un mesaj corespunzator. Al doilea serviciu cloud este MONGODB Atlas.
   
   3.1 OpenWeatherMap API – un serviciu care oferă date meteo actualizate global.

Autentificare:
Cheia API este transmisă ca parametru appid. Pentru securitate, cheia este stocată în variabila de mediu OPENWEATHER_API_KEY și nu este expusă în frontend.

Exemplu Request:
GET http://localhost:3000/api/weather?city=Bucharest – va returna vremea din București.

Metode HTTP utilizate
GET — pentru citirea datelor (va returna vremea din orasul respectiv)

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

5. Capturi de ecran din aplicatie

   5.1 Pagina de inceput in care utilizatorul are acces la primul rest cloud din aplicatie, cel in care poate vizualiza live vremea din orice oras, doar introducand numele acestuia in input.
   ![image](https://github.com/user-attachments/assets/5349f8bc-eb30-4d07-8c5b-546d6a894717)

   5.2 Mesajul daca orasul introdus de utilizator nu exista.
   ![image](https://github.com/user-attachments/assets/4042c74d-266a-4e71-b7ce-c1ba372c3d2f)


   5.3 La apasarea butonului Get Started, utilizatorul este trimis pe pagina de Meniu.
   ![image](https://github.com/user-attachments/assets/e265f8cc-def5-4dd1-832e-35b1f70718ec)

   5.4 La apasarea butonul Adauga carte, utilizatorul este trimis pe o pagina in care va putea sa adauga o noua carte in colectie.
   ![image](https://github.com/user-attachments/assets/2a1c5003-383d-4361-8d85-8e85e5f95eac)

   5.5 La apasarea butonului Editeaza lista carti, utilizatorul este trimis catre intreaga sa colectie, unde isi poate edita sau sterge cartile.
   ![image](https://github.com/user-attachments/assets/c8e986c2-1135-457f-84ee-922d485ced1d)

   5.6 La apasarea butonul update, utilizatorul este trimis catre pagina de editare carti.
   ![image](https://github.com/user-attachments/assets/ccdb1f75-f08e-49e2-a11d-b6680f78f2e2)



6. Referințe
   OpenWeatherMap API Documentation - https://openweathermap.org/api

   Next.js - https://nextjs.org/docs

   Vercel Documentation - https://vercel.com/docs

   MongoDB Atlas - https://www.mongodb.com/docs/?msockid=3ae2d458ba856acc36ddc0d7bb7f6b6b

Link Prezentare: https://www.youtube.com/watch?v=lEDXvf39SPM

Link aplicatie in Vercel: https://proiect-cloud-moise-eduard-8civ.vercel.app/
