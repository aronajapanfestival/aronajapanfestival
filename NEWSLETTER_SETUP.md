# Setup Newsletter con Brevo

## Configurazione Brevo

1. **Crea un account su Brevo** (ex Sendinblue):
   - Vai su https://app.brevo.com/
   - Registrati o fai login

2. **Ottieni la tua API Key**:
   - Vai su: https://app.brevo.com/settings/keys/api
   - Clicca su "Generate a new API key"
   - Copia la chiave generata

3. **Crea una Lista di Contatti**:
   - Vai su: https://app.brevo.com/contact/list
   - Clicca su "Create a list"
   - Dai un nome (es. "Newsletter Arona Japan Festival")
   - Copia l'ID della lista (lo trovi nell'URL o nella lista)

## Configurazione Vercel

1. **Deploy del progetto su Vercel**:
   ```bash
   vercel
   ```

2. **Configura le variabili d'ambiente su Vercel**:
   - Vai al dashboard del tuo progetto su Vercel
   - Settings → Environment Variables
   - Aggiungi le seguenti variabili:
     - `BREVO_API_KEY`: La tua API key di Brevo
     - `BREVO_LIST_ID`: L'ID della lista contatti (numero)

3. **Redeploy** (se hai già fatto il deploy):
   ```bash
   vercel --prod
   ```

## Test in locale

1. **Crea un file `.env.local`** nella root del progetto:
   ```bash
   cp .env.example .env.local
   ```

2. **Compila il file `.env.local`** con le tue credenziali:
   ```
   BREVO_API_KEY=xkeysib-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   BREVO_LIST_ID=123
   ```

3. **Avvia il server di sviluppo Vercel**:
   ```bash
   vercel dev
   ```

   Questo comando:
   - Avvia il server locale sulla porta 3000
   - Carica le variabili d'ambiente da `.env.local`
   - Simula l'ambiente Vercel serverless

4. **Testa il form**:
   - Vai su http://localhost:3000/newsletter
   - Compila e invia il form
   - Verifica che il contatto sia stato aggiunto su Brevo

## Funzionamento

La funzione serverless in `/api/subscribe.ts`:
- Riceve email e nome dal form
- Valida i dati
- Chiama l'API di Brevo per aggiungere il contatto
- Gestisce duplicati (se l'email esiste già)
- Ritorna successo o errore

## Note GDPR

- Il form richiede esplicito consenso privacy
- Brevo gestisce automaticamente il double opt-in (configurabile)
- Gli utenti possono disiscriversi in qualsiasi momento
- Tutte le email inviate da Brevo includono link di disiscrizione automatico
