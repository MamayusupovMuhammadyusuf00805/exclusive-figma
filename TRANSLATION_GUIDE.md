# Ko'p tillilik (Multi-language) Qo'llanma

## O'rnatilgan tillar
- 🇺🇿 O'zbekcha (uz)
- 🇷🇺 Русский (ru)
- 🇬🇧 English (en)

## Qanday ishlatish

### 1. Komponentda tarjimani ishlatish

```jsx
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('product.addToCart')}</p>
    </div>
  );
}
```

### 2. Mavjud tarjima kalitlari

#### Navbar
- `nav.home` - Bosh sahifa / Главная / Home
- `nav.contact` - Aloqa / Контакты / Contact
- `nav.about` - Biz haqimizda / О нас / About
- `nav.signup` - Ro'yxatdan o'tish / Регистрация / Sign Up
- `nav.search` - Qidirish... / Поиск... / Search...
- `nav.wishlist` - Sevimlilar / Избранное / Wishlist
- `nav.cart` - Savatcha / Корзина / Cart

#### Mahsulot (Product)
- `product.addToCart` - Savatga qo'shish / В корзину / Add to Cart
- `product.addToWishlist` - Sevimlilarga qo'shish / В избранное / Add to Wishlist
- `product.inStock` - Mavjud / В наличии / In Stock
- `product.buyNow` - Xarid qilish / Купить сейчас / Buy Now

#### Savat (Cart)
- `cart.title` - Savatcha / Корзина / Cart
- `cart.product` - Mahsulot / Товар / Product
- `cart.price` - Narx / Цена / Price
- `cart.quantity` - Miqdor / Количество / Quantity
- `cart.total` - Umumiy / Всего / Total

#### Akkaunt (Account)
- `account.myAccount` - Mening akkauntim / Мой аккаунт / My Account
- `account.myOrders` - Buyurtmalarim / Мои заказы / My Orders
- `account.logout` - Chiqish / Выйти / Logout

#### Auth
- `auth.login` - Kirish / Войти / Login
- `auth.signup` - Ro'yxatdan o'tish / Регистрация / Sign Up
- `auth.email` - Email
- `auth.password` - Parol / Пароль / Password

### 3. Yangi tarjima qo'shish

`src/i18n/i18n.js` faylini oching va har bir til uchun yangi kalit qo'shing:

```javascript
const resources = {
  uz: {
    translation: {
      "myNewKey": "O'zbek tilidagi matn"
    }
  },
  ru: {
    translation: {
      "myNewKey": "Текст на русском"
    }
  },
  en: {
    translation: {
      "myNewKey": "Text in English"
    }
  }
};
```

### 4. Tilni dasturiy ravishda o'zgartirish

```javascript
import { useTranslation } from 'react-i18next';

function MyComponent() {
  const { i18n } = useTranslation();
  
  const changeToUzbek = () => {
    i18n.changeLanguage('uz');
  };
  
  return <button onClick={changeToUzbek}>O'zbekcha</button>;
}
```

## Xususiyatlar

✅ Avtomatik til aniqlash (brauzer tilidan)
✅ Tanlangan tilni localStorage da saqlash
✅ Navbar da til o'zgartirish tugmasi
✅ 3 ta til: O'zbekcha, Ruscha, Inglizcha
✅ Barcha asosiy sahifalar uchun tarjimalar

## Qo'shimcha ma'lumot

Barcha tarjimalar `src/i18n/i18n.js` faylida joylashgan. Yangi sahifa yoki komponent qo'shganingizda, shu faylga yangi tarjimalarni qo'shing va `useTranslation()` hook orqali foydalaning.
