# ICT-jaarplanner — installatie (GitHub Pages + Firebase)

## Wat je krijgt
Een installeerbare PWA die je checklist opslaat in Firebase Firestore, zodat elk
apparaat waarop je inlogt dezelfde stand toont. De site zelf host je op GitHub Pages,
samen met je andere apps. Alleen inloggen (Auth) en de database (Firestore) lopen via Firebase.

## Stap 1 — Firebase-project aanmaken
1. Ga naar https://console.firebase.google.com en klik op **Project toevoegen**.
2. Geef een naam (bv. `ict-jaarplanner`) en rond de wizard af (Google Analytics mag uit).

## Stap 2 — Authenticatie aanzetten
1. **Build → Authentication → Get started**.
2. Zet **Google** aan als inlogmethode (Sign-in method → Google → Enable → opslaan).

## Stap 3 — Firestore database aanmaken
1. **Build → Firestore Database → Create database**.
2. Kies **Production mode**.
3. Kies een locatie in de buurt (bv. `eur3 (Europe)`).

## Stap 4 — Beveiligingsregels instellen
1. Ga naar **Firestore Database → Rules** (tabblad).
2. Plak de inhoud van `firestore.rules` (uit dit mapje) erin, ter vervanging van de standaardregels.
3. Klik **Publish**. (Geen CLI nodig voor deze stap.)

## Stap 5 — App-configuratie ophalen
1. **Project settings** (tandwiel) → **Your apps** → **Web app toevoegen** (</> icoon).
2. Geef een naam, klik **Register app**.
3. Kopieer het `firebaseConfig`-object.
4. Open `index.html`, zoek `const firebaseConfig = { ... }` en vul jouw eigen waarden in
   op de plek van `"VUL_HIER_IN"`.

## Stap 6 — Naar GitHub pushen
Zet `index.html`, `manifest.json`, `service-worker.js`, `icon-192.png` en `icon-512.png`
in een (nieuwe of bestaande) repo, bijvoorbeeld in een map `ict-planner/`. Commit en push
zoals je gewend bent.

## Stap 7 — GitHub Pages aanzetten
1. In de repo: **Settings → Pages**.
2. Bij **Source**: kies de branch (meestal `main`) en de map (`/root` of `/docs`,
   afhankelijk van waar je de bestanden hebt gezet).
3. Sla op. Na een minuut krijg je een URL zoals:
   `https://<jouw-gebruikersnaam>.github.io/<repo-naam>/`

## Stap 8 — Belangrijk: domein toestaan voor Google-login
Zonder deze stap werkt inloggen niet vanaf GitHub Pages.
1. Firebase Console → **Authentication → Settings → Authorized domains**.
2. Klik **Add domain** en voeg toe: `<jouw-gebruikersnaam>.github.io`
   (dus zonder het pad erachter, alleen het domein zelf).

## Stap 9 — Testen
Open de GitHub Pages-URL op je telefoon en laptop, log in met Google, vink wat aan.
Zie je op beide apparaten dezelfde stand? Klaar. Voeg 'm op je telefoon toe aan het
beginscherm voor de app-ervaring.

## Bijwerken later
Pas de bestanden aan en push naar GitHub — Pages ververst vanzelf na een paar minuten.
Geen `firebase deploy` nodig, dat is alleen voor Firebase Hosting (gebruik je hier niet).

## Kosten
Dit gebruik (1 gebruiker, een handvol documenten) blijft ruim binnen de gratis
Firebase-limieten (Spark-plan) én GitHub Pages is gratis voor publieke (en met een
geschikt account ook private) repo's.
