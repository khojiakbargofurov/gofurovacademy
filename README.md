# Gofurov Academy

Gofurov Academy uchun responsive landing sahifa. Arizalar Google Sheets va Telegram botga bir vaqtda yuboriladi.

## Ishga tushirish

```bash
npm install
npm run dev
```

Sayt `http://localhost:3000` manzilida ochiladi.

## Muhit sozlamalari

`.env.example` faylidan `.env.local` yarating va quyidagi qiymatlarni kiriting:

- `GOOGLE_SHEETS_WEBHOOK_URL`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`

`.env.local` maxfiy bo‘lib, GitHub’ga yuklanmaydi.

## Asosiy buyruqlar

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Production: [gofurovacademy.vercel.app](https://gofurovacademy.vercel.app)
