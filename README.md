# TravelTrack Hub

TravelTrack Hub — це вебзастосунок для пошуку та перегляду кемперів для подорожей. Проєкт реалізовано на Next.js (App Router) з TypeScript, фільтрацією каталогу та детальною сторінкою кожного кемпера.

## Основні функції

- Перегляд каталогу кемперів із пагінацією (`Load More`).
- Фільтрація за локацією, формою кузова, типом двигуна та трансмісією.
- Детальна сторінка кемпера з галереєю, характеристиками та відгуками.
- Форма бронювання на сторінці кемпера.
- Зручна навігація між головною сторінкою та каталогом.

## Технології

- Next.js 16 (App Router)
- React 19 + TypeScript
- TanStack React Query
- Axios
- Formik + Yup
- Swiper
- CSS Modules

## Встановлення

1. Клонуйте репозиторій:

```bash
git clone <URL_ВАШОГО_РЕПОЗИТОРІЮ>
cd traveltrack-hub
```

2. Встановіть залежності:

```bash
npm install
```

## Використання

Запуск у режимі розробки:

```bash
npm run dev
```

Збірка production-версії:

```bash
npm run build
```

Запуск production-сервера:

```bash
npm run start
```

Перевірка коду лінтером:

```bash
npm run lint
```

Після запуску `dev` відкрийте у браузері:

- `http://localhost:3000`

## Автор

- Ім'я: Vladyslav Byshov
- Email: byshov1998@gmail.com
