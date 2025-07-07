# ZenoPay Tanzania Webhook Demo

Mfumo huu ni mfano wa web app ya Node.js/Express kwa ajili ya kutuma malipo ya Mobile Money kupitia ZenoPay API, kupokea webhook notification, na kuonyesha taarifa zote kwenye UI ya kisasa.

## Jina la Project (Pendekezo)
**zenopay-tz-webhook-demo**

## Features
- Kutuma malipo ya Mobile Money Tanzania kupitia ZenoPay API
- Kuangalia status ya order
- Kupokea na kuhifadhi webhook notification
- Kuonyesha notification zote kwenye UI
- UI ya kisasa na rahisi kutumia

## Mahitaji
- Node.js (v14+)
- NPM

## Jinsi ya Kuinstall na Kuanza
1. **Clone repo**
   ```bash
   git clone https://github.com/USERNAME/zenopay-tz-webhook-demo.git
   cd zenopay-tz-webhook-demo
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Sanidi API Key**
   - Tengeneza faili la `.env` kwenye root ya project na uweke:
     ```
     API_KEY=weka_api_key_yako_hapa
     ```
4. **Anzisha server**
   ```bash
   node index.js
   ```
5. **Fungua browser**
   - Tembelea: [http://localhost:3000](http://localhost:3000)

## Jinsi Inavyofanya Kazi
- Jaza fomu ya malipo, order_id inageneratiwa kiotomatiki (inaanza na `swaxnet-`)
- Webhook URL inajazwa kiotomatiki (readonly)
- Ukishatuma malipo, notification za webhook zitakazoletwa na ZenoPay zitaonekana kwenye sehemu ya "Webhook Notifications"
- Unaweza kuangalia status ya order kwa kutumia order_id

## Kuchangia (Contributing)
- Pull requests zinakaribishwa!
- Kama una pendekezo, bug, au unataka kuchangia, wasiliana nami:
  - **WhatsApp:** 0657779003
  - **Email:** basanzietech@gmail.com

## Leseni
MIT License

---

> Project hii ni kwa ajili ya mafunzo na demo. Kwa matumizi ya production, hakikisha unafanya security hardening na validation zaidi.

---

# English Version

## Project Name (Suggestion)
**zenopay-tz-webhook-demo**

## Description
This is a sample Node.js/Express web app for sending Mobile Money payments via the ZenoPay API, receiving webhook notifications, and displaying all information in a modern UI.

## Features
- Send Mobile Money payments (Tanzania) via ZenoPay API
- Check order status
- Receive and store webhook notifications
- View all webhook notifications in the UI
- Modern, user-friendly interface

## Requirements
- Node.js (v14+)
- NPM

## Installation & Getting Started
1. **Clone the repo**
   ```bash
   git clone https://github.com/USERNAME/zenopay-tz-webhook-demo.git
   cd zenopay-tz-webhook-demo
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Configure API Key**
   - Create a `.env` file in the project root and add:
     ```
     API_KEY=your_actual_api_key_here
     ```
4. **Start the server**
   ```bash
   node index.js
   ```
5. **Open your browser**
   - Go to: [http://localhost:3000](http://localhost:3000)

## How It Works
- Fill the payment form; order_id is auto-generated (starts with `swaxnet-`)
- Webhook URL is auto-filled (readonly)
- After sending payment, webhook notifications from ZenoPay will appear in the "Webhook Notifications" section
- You can check order status using the order_id

## Contributing
- Pull requests are welcome!
- For suggestions, bug reports, or to contribute, contact me:
  - **WhatsApp:** 0657779003
  - **Email:** basanzietech@gmail.com

## License
MIT License

---

> This project is for demo and educational purposes. For production use, ensure you implement additional security and validation. 