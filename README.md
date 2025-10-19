# Arona Japan Festival 2025 - Sito Web Ufficiale

Sito web ufficiale del festival dedicato alla cultura giapponese ad Arona, 15-16 Novembre 2025.

🌐 **URL Produzione**: https://www.aronajapanfestival.it

---

## 📋 Indice

- [Tecnologie](#tecnologie)
- [Requisiti](#requisiti)
- [Installazione](#installazione)
- [Sviluppo](#sviluppo)
- [Configurazione](#configurazione)
- [Gestione Contenuti](#gestione-contenuti)
- [Deploy](#deploy)
- [Struttura Progetto](#struttura-progetto)

---

## 🛠 Tecnologie

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Routing**: React Router v6
- **Newsletter**: Brevo (ex Sendinblue) con double opt-in
- **Privacy**: Iubenda
- **Hosting**: Vercel
- **Package Manager**: npm

---

## 📦 Requisiti

- Node.js 18+
- npm 9+
- Account Brevo (per newsletter)
- Account Vercel (per deploy)

---

## 🚀 Installazione

```bash
# 1. Clona il repository
git clone <repository-url>
cd website

# 2. Installa le dipendenze
npm install

# 3. Copia il file di esempio delle variabili d'ambiente
cp .env.example .env

# 4. Configura le variabili d'ambiente in .env o mise.toml
# Vedi sezione "Configurazione" per i dettagli
```

---

## 💻 Sviluppo

### Avviare il server di sviluppo

```bash
# Con Vite (porta 5173)
npm run dev

# Con Vercel Dev (porta 3000, include API)
vercel dev
```

### Build di produzione

```bash
npm run build
```

### Preview build locale

```bash
npm run preview
```

### Type checking

```bash
npx tsc --noEmit
```

---

## ⚙️ Configurazione

### Variabili d'Ambiente

Crea un file `.env` o configura `mise.toml` con le seguenti variabili:

```bash
# Brevo API Configuration
BREVO_API_KEY=your_brevo_api_key_here
BREVO_LIST_ID=2
BREVO_TEMPLATE_ID=5

# Site URL
NEXT_PUBLIC_SITE_URL=https://www.aronajapanfestival.it
```

### Configurazione Brevo

1. Accedi a [Brevo](https://app.brevo.com)
2. Vai su **Settings > API Keys** e crea una nuova API key
3. Vai su **Contacts > Lists** per trovare il `BREVO_LIST_ID`
4. Vai su **Campaigns > Email Templates** per trovare il `BREVO_TEMPLATE_ID` del double opt-in
5. Configura il template DOI con il redirect URL: `https://www.aronajapanfestival.it/newsletter?confirmed=true`

### Configurazione Iubenda

Script già configurati in `index.html`:
- Widget ID: `a5439bc2-f002-48e4-b01d-ab68381d2305`
- Privacy Policy ID: `63594851`

---

## 📝 Gestione Contenuti

### File JSON Dinamici

I contenuti dinamici sono gestiti tramite file JSON in `/src/data/`:

#### 1. **News** (`news.json`)

```json
{
  "id": 1,
  "title": "Titolo della news",
  "date": "01/10/2025",
  "category": "Comunicato",
  "text": "Testo in **markdown**. Supporta immagini: ![Alt](news/image.jpg)"
}
```

- Le immagini vanno in `/public/news/`
- Supporta markdown per formattazione testo

#### 2. **Programma** (`programma.json`)

```json
{
  "id": 1,
  "day": "15/11/2025",
  "title": "Titolo evento",
  "from": "10:00",
  "to": "12:00",
  "description": "Descrizione evento",
  "notes": "Note aggiuntive",
  "category": "Conference"
}
```

Categorie disponibili: `Conference`, `Workshop`, `Food`, `Music`, `Movies`, `Art`

#### 3. **Protagonisti** (`protagonisti.json`)

```json
{
  "id": 1,
  "name": "Nome Cognome",
  "role": "Descrizione in **markdown**",
  "events": ["4", "5"],
  "photo": "filename.jpg"
}
```

- **IMPORTANTE**: `events` deve contenere **stringhe** (non numeri)
- Le foto vanno in `/public/protagonisti/`
- Formato consigliato foto: 3:3.5 (stile card)

#### 4. **Installazioni** (`installazioni.json`)

```json
{
  "id": 1,
  "title": "Titolo installazione",
  "description": "Descrizione dell'installazione",
  "artist": "Nome artista",
  "location": "Dove si trova",
  "image": "filename.jpg"
}
```

- Le immagini vanno in `/public/installazioni/`

---

## 🚢 Deploy

### Deploy su Vercel

```bash
# 1. Installa Vercel CLI (se non già installato)
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

### Configurazione Vercel

1. Vai su **Project Settings > Environment Variables**
2. Aggiungi le variabili d'ambiente:
   - `BREVO_API_KEY`
   - `BREVO_LIST_ID`
   - `BREVO_TEMPLATE_ID`
   - `NEXT_PUBLIC_SITE_URL`

3. Configura il dominio custom in **Settings > Domains**

### File di Configurazione

- `vercel.json`: Configurazione routing SPA
- Output directory: `dist/`

---

## 📁 Struttura Progetto

```
website/
├── api/                      # Serverless functions Vercel
│   └── subscribe.ts          # Endpoint newsletter Brevo
├── public/                   # File statici
│   ├── installazioni/        # Immagini installazioni
│   ├── japan/                # Gallery festival
│   ├── news/                 # Immagini news
│   ├── protagonisti/         # Foto protagonisti
│   ├── og-image.jpg          # Open Graph image
│   └── favicon files...
├── src/
│   ├── assets/               # Assets importati
│   ├── components/           # Componenti React
│   │   ├── ui/               # shadcn-ui components
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   ├── data/                 # Dati JSON dinamici
│   │   ├── installazioni.json
│   │   ├── news.json
│   │   ├── programma.json
│   │   └── protagonisti.json
│   ├── lib/                  # Utilities
│   │   ├── newsUtils.ts      # Helper per news (slug, date, preview)
│   │   └── utils.ts          # Utility generali
│   ├── pages/                # Pagine applicazione
│   │   ├── Home.tsx
│   │   ├── Festival.tsx
│   │   ├── Programma.tsx
│   │   ├── Installazioni.tsx
│   │   ├── Protagonisti.tsx
│   │   ├── DoveSiamo.tsx
│   │   ├── Newsletter.tsx
│   │   ├── NewsletterConferma.tsx
│   │   ├── News.tsx
│   │   ├── NewsDetail.tsx
│   │   ├── Seguici.tsx
│   │   ├── Privacy.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx               # Router principale
│   └── main.tsx              # Entry point
├── .env.example              # Template variabili d'ambiente
├── mise.toml                 # Configurazione mise (locale)
├── vercel.json               # Configurazione Vercel
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── vite.config.ts
```

---

## 🔧 Comandi Utili

```bash
# Validare JSON
cat src/data/news.json | python3 -m json.tool

# Build e preview
npm run build && npm run preview

# Type checking
npx tsc --noEmit

# Vercel dev con API
vercel dev
```

---

## 📞 Supporto

Per problemi tecnici o domande:
- **Email**: info@aronajapanfestival.it
- **GitHub Issues**: [Link al repository]

---

## 📄 Licenza

© 2025 Arona Japan Festival. Tutti i diritti riservati.
