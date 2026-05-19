# 🌍 Ko'p Tillilik Tizimi / Система Многоязычности / Multi-Language System

## ✅ O'rnatildi / Установлено / Installed

Sizning saytingizga **3 ta til** qo'shildi:
- 🇺🇿 **O'zbekcha** (uz)
- 🇷🇺 **Русский** (ru)  
- 🇬🇧 **English** (en)

## 🚀 Qanday ishlaydi / Как работает / How it works

### 1️⃣ Til o'zgartirish / Смена языка / Language Switching

Navbar (yuqori menyu)da til o'zgartirish tugmasi mavjud. Foydalanuvchi tilni tanlashi bilan:
- Butun sayt tanlangan tilga o'zgaradi
- Tanlangan til **localStorage** da saqlanadi
- Keyingi safar saytga kirganida oxirgi tanlangan til avtomatik yuklanadi

### 2️⃣ Tarjima qilingan qismlar / Переведенные части / Translated Parts

✅ **Navbar** - Menyu, qidiruv, tugmalar
✅ **Footer** - Barcha havolalar va matnlar
✅ **Home sahifasi** - Asosiy sahifa elementlari
✅ **Mahsulot kartochkalari** - Tugmalar va matnlar
✅ **Savat** - Cart sahifasi
✅ **Akkaunt** - Account bo'limlari
✅ **Auth** - Login/Signup sahifalari

### 3️⃣ Qo'shimcha sahifalarni tarjima qilish / Перевод дополнительных страниц / Translating Additional Pages

Boshqa sahifalarni tarjima qilish uchun:

1. **Sahifa komponentiga import qo'shing:**
```jsx
import { useTranslation } from 'react-i18next';
```

2. **Komponent ichida hook ishlatish:**
```jsx
function MyPage() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('myKey')}</h1>
    </div>
  );
}
```

3. **Tarjimalarni qo'shish:**
`src/i18n/i18n.js` faylini oching va har 3 ta tilga tarjima qo'shing:

```javascript
const resources = {
  uz: {
    translation: {
      "myKey": "Mening matnimiz"
    }
  },
  ru: {
    translation: {
      "myKey": "Мой текст"
    }
  },
  en: {
    translation: {
      "myKey": "My text"
    }
  }
};
```

## 📁 Fayl Tuzilmasi / Структура Файлов / File Structure

```
src/
├── i18n/
│   └── i18n.js              # Barcha tarjimalar shu yerda
├── components/
│   ├── LanguageSwitcher.jsx # Til o'zgartirish komponenti
│   ├── LanguageSwitcher.css # Stil
│   ├── Navbar.jsx           # ✅ Tarjima qo'shilgan
│   └── Footer.jsx           # ✅ Tarjima qo'shilgan
└── pages/
    └── home/
        └── Home.jsx         # ✅ Tarjima qo'shilgan
```

## 🎯 Mavjud Tarjima Kalitlari / Доступные Ключи / Available Translation Keys

### Navigation
- `nav.home`, `nav.contact`, `nav.about`, `nav.signup`
- `nav.search`, `nav.wishlist`, `nav.cart`

### Product
- `product.addToCart`, `product.addToWishlist`
- `product.inStock`, `product.outOfStock`
- `product.buyNow`, `product.colors`, `product.size`, `product.quantity`

### Cart
- `cart.title`, `cart.product`, `cart.price`, `cart.quantity`
- `cart.total`, `cart.shipping`, `cart.proceedToCheckout`

### Account
- `account.myAccount`, `account.myOrders`, `account.logout`

### Auth
- `auth.login`, `auth.signup`, `auth.email`, `auth.password`

### Common
- `common.loading`, `common.error`, `common.success`
- `common.save`, `common.delete`, `common.edit`, `common.view`

## 🔧 Texnik Ma'lumotlar / Техническая Информация / Technical Details

**Ishlatilgan kutubxonalar / Используемые библиотеки / Used Libraries:**
- `i18next` - Asosiy tarjima tizimi
- `react-i18next` - React integratsiyasi
- `i18next-browser-languagedetector` - Avtomatik til aniqlash

**Xususiyatlar / Особенности / Features:**
- ✅ Avtomatik brauzer tilini aniqlash
- ✅ localStorage da saqlash
- ✅ Real-time til o'zgartirish (sahifani yangilamasdan)
- ✅ Responsive dizayn (mobil va desktop)

## 📝 Misol / Пример / Example

```jsx
import { useTranslation } from 'react-i18next';

function ProductCard({ product }) {
  const { t } = useTranslation();
  
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>{t('cart.price')}: ${product.price}</p>
      <button>{t('home.addToCart')}</button>
    </div>
  );
}
```

## 🌐 Server

Loyihani ishga tushirish:
```bash
npm run dev
```

Server manzili: `http://localhost:5174/`

---

**Muallif / Автор / Author:** Kiro AI Assistant  
**Sana / Дата / Date:** 2026  
**Versiya / Версия / Version:** 1.0.0
