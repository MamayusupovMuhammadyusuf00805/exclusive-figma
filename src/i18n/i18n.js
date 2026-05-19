import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Tarjima resurslari
const resources = {
  uz: {
    translation: {
      // Navbar
      "nav.home": "Bosh sahifa",
      "nav.contact": "Aloqa",
      "nav.about": "Biz haqimizda",
      "nav.signup": "Ro'yxatdan o'tish",
      "nav.search": "Qidirish...",
      "nav.wishlist": "Sevimlilar",
      "nav.cart": "Savatcha",
      
      // Home page
      "home.categories": "Kategoriyalar",
      "home.flashSales": "Tezkor sotuvlar",
      "home.bestSelling": "Eng ko'p sotilgan",
      "home.exploreProducts": "Mahsulotlarni ko'rish",
      "home.newArrival": "Yangi kelganlar",
      "home.viewAll": "Hammasini ko'rish",
      "home.addToCart": "Savatga qo'shish",
      
      // Product
      "product.addToWishlist": "Sevimlilarga qo'shish",
      "product.removeFromWishlist": "Sevimlilardan o'chirish",
      "product.quickView": "Tez ko'rish",
      "product.inStock": "Mavjud",
      "product.outOfStock": "Tugagan",
      "product.colors": "Ranglar",
      "product.size": "O'lcham",
      "product.quantity": "Miqdor",
      "product.buyNow": "Xarid qilish",
      "product.freeDelivery": "Bepul yetkazib berish",
      "product.returnDelivery": "30 kun ichida qaytarish",
      "product.relatedItems": "O'xshash mahsulotlar",
      
      // Cart
      "cart.title": "Savatcha",
      "cart.product": "Mahsulot",
      "cart.price": "Narx",
      "cart.quantity": "Miqdor",
      "cart.subtotal": "Jami",
      "cart.returnToShop": "Do'konga qaytish",
      "cart.updateCart": "Savatni yangilash",
      "cart.cartTotal": "Savat jami",
      "cart.total": "Umumiy",
      "cart.shipping": "Yetkazib berish",
      "cart.freeShipping": "Bepul",
      "cart.proceedToCheckout": "To'lovga o'tish",
      "cart.couponCode": "Kupon kodi",
      "cart.applyCoupon": "Kuponni qo'llash",
      
      // Checkout
      "checkout.title": "To'lov ma'lumotlari",
      "checkout.firstName": "Ism",
      "checkout.lastName": "Familiya",
      "checkout.companyName": "Kompaniya nomi",
      "checkout.streetAddress": "Ko'cha manzili",
      "checkout.apartment": "Kvartira/Uy",
      "checkout.city": "Shahar",
      "checkout.phone": "Telefon raqami",
      "checkout.email": "Email manzil",
      "checkout.saveInfo": "Ma'lumotlarni saqlash",
      "checkout.paymentMethod": "To'lov usuli",
      "checkout.cash": "Naqd pul",
      "checkout.bank": "Bank kartasi",
      "checkout.placeOrder": "Buyurtma berish",
      
      // Account
      "account.myAccount": "Mening akkauntim",
      "account.myOrders": "Buyurtmalarim",
      "account.myProfile": "Profilim",
      "account.addressBook": "Manzillar",
      "account.paymentOptions": "To'lov usullari",
      "account.editProfile": "Profilni tahrirlash",
      "account.logout": "Chiqish",
      
      // Auth
      "auth.login": "Kirish",
      "auth.signup": "Ro'yxatdan o'tish",
      "auth.email": "Email",
      "auth.password": "Parol",
      "auth.name": "Ism",
      "auth.forgotPassword": "Parolni unutdingizmi?",
      "auth.createAccount": "Akkaunt yaratish",
      "auth.alreadyHaveAccount": "Akkauntingiz bormi?",
      "auth.dontHaveAccount": "Akkauntingiz yo'qmi?",
      "auth.signupWithGoogle": "Google orqali ro'yxatdan o'tish",
      
      // Contact
      "contact.title": "Biz bilan bog'laning",
      "contact.callUs": "Bizga qo'ng'iroq qiling",
      "contact.writeUs": "Bizga yozing",
      "contact.name": "Ismingiz",
      "contact.email": "Email",
      "contact.phone": "Telefon",
      "contact.message": "Xabar",
      "contact.sendMessage": "Xabar yuborish",
      
      // About
      "about.ourStory": "Bizning hikoyamiz",
      "about.statistics": "Statistika",
      "about.sellers": "Sotuvchilar",
      "about.customers": "Mijozlar",
      "about.products": "Mahsulotlar",
      "about.revenue": "Daromad",
      
      // Footer
      "footer.subscribe": "Obuna bo'ling",
      "footer.get10off": "10% chegirma oling",
      "footer.enterEmail": "Email kiriting",
      "footer.support": "Qo'llab-quvvatlash",
      "footer.account": "Akkaunt",
      "footer.quickLink": "Tezkor havolalar",
      "footer.privacyPolicy": "Maxfiylik siyosati",
      "footer.termsOfUse": "Foydalanish shartlari",
      "footer.faq": "FAQ",
      
      // Services
      "service.freeDelivery": "BEPUL VA TEZ YETKAZIB BERISH",
      "service.freeDeliveryDesc": "140$ dan ortiq buyurtmalar uchun bepul yetkazib berish",
      "service.customerService": "24/7 MIJOZLARGA XIZMAT",
      "service.customerServiceDesc": "Do'stona mijozlarga xizmat ko'rsatish",
      "service.moneyBack": "PULNI QAYTARISH KAFOLATI",
      "service.moneyBackDesc": "30 kun ichida pulni qaytaramiz",
      
      // Common
      "common.loading": "Yuklanmoqda...",
      "common.error": "Xatolik",
      "common.success": "Muvaffaqiyatli",
      "common.cancel": "Bekor qilish",
      "common.save": "Saqlash",
      "common.delete": "O'chirish",
      "common.edit": "Tahrirlash",
      "common.view": "Ko'rish",
      "common.back": "Orqaga",
      "common.next": "Keyingi",
      "common.previous": "Oldingi",
      "common.submit": "Yuborish",
      "common.close": "Yopish",
    }
  },
  ru: {
    translation: {
      // Navbar
      "nav.home": "Главная",
      "nav.contact": "Контакты",
      "nav.about": "О нас",
      "nav.signup": "Регистрация",
      "nav.search": "Поиск...",
      "nav.wishlist": "Избранное",
      "nav.cart": "Корзина",
      
      // Home page
      "home.categories": "Категории",
      "home.flashSales": "Быстрые продажи",
      "home.bestSelling": "Бестселлеры",
      "home.exploreProducts": "Обзор товаров",
      "home.newArrival": "Новинки",
      "home.viewAll": "Смотреть все",
      "home.addToCart": "В корзину",
      
      // Product
      "product.addToWishlist": "В избранное",
      "product.removeFromWishlist": "Удалить из избранного",
      "product.quickView": "Быстрый просмотр",
      "product.inStock": "В наличии",
      "product.outOfStock": "Нет в наличии",
      "product.colors": "Цвета",
      "product.size": "Размер",
      "product.quantity": "Количество",
      "product.buyNow": "Купить сейчас",
      "product.freeDelivery": "Бесплатная доставка",
      "product.returnDelivery": "Возврат в течение 30 дней",
      "product.relatedItems": "Похожие товары",
      
      // Cart
      "cart.title": "Корзина",
      "cart.product": "Товар",
      "cart.price": "Цена",
      "cart.quantity": "Количество",
      "cart.subtotal": "Итого",
      "cart.returnToShop": "Вернуться в магазин",
      "cart.updateCart": "Обновить корзину",
      "cart.cartTotal": "Итого в корзине",
      "cart.total": "Всего",
      "cart.shipping": "Доставка",
      "cart.freeShipping": "Бесплатно",
      "cart.proceedToCheckout": "Оформить заказ",
      "cart.couponCode": "Код купона",
      "cart.applyCoupon": "Применить купон",
      
      // Checkout
      "checkout.title": "Данные для оплаты",
      "checkout.firstName": "Имя",
      "checkout.lastName": "Фамилия",
      "checkout.companyName": "Название компании",
      "checkout.streetAddress": "Адрес улицы",
      "checkout.apartment": "Квартира/Дом",
      "checkout.city": "Город",
      "checkout.phone": "Номер телефона",
      "checkout.email": "Email адрес",
      "checkout.saveInfo": "Сохранить информацию",
      "checkout.paymentMethod": "Способ оплаты",
      "checkout.cash": "Наличные",
      "checkout.bank": "Банковская карта",
      "checkout.placeOrder": "Оформить заказ",
      
      // Account
      "account.myAccount": "Мой аккаунт",
      "account.myOrders": "Мои заказы",
      "account.myProfile": "Мой профиль",
      "account.addressBook": "Адреса",
      "account.paymentOptions": "Способы оплаты",
      "account.editProfile": "Редактировать профиль",
      "account.logout": "Выйти",
      
      // Auth
      "auth.login": "Войти",
      "auth.signup": "Регистрация",
      "auth.email": "Email",
      "auth.password": "Пароль",
      "auth.name": "Имя",
      "auth.forgotPassword": "Забыли пароль?",
      "auth.createAccount": "Создать аккаунт",
      "auth.alreadyHaveAccount": "Уже есть аккаунт?",
      "auth.dontHaveAccount": "Нет аккаунта?",
      "auth.signupWithGoogle": "Регистрация через Google",
      
      // Contact
      "contact.title": "Свяжитесь с нами",
      "contact.callUs": "Позвоните нам",
      "contact.writeUs": "Напишите нам",
      "contact.name": "Ваше имя",
      "contact.email": "Email",
      "contact.phone": "Телефон",
      "contact.message": "Сообщение",
      "contact.sendMessage": "Отправить сообщение",
      
      // About
      "about.ourStory": "Наша история",
      "about.statistics": "Статистика",
      "about.sellers": "Продавцы",
      "about.customers": "Клиенты",
      "about.products": "Товары",
      "about.revenue": "Доход",
      
      // Footer
      "footer.subscribe": "Подписаться",
      "footer.get10off": "Получите скидку 10%",
      "footer.enterEmail": "Введите email",
      "footer.support": "Поддержка",
      "footer.account": "Аккаунт",
      "footer.quickLink": "Быстрые ссылки",
      "footer.privacyPolicy": "Политика конфиденциальности",
      "footer.termsOfUse": "Условия использования",
      "footer.faq": "FAQ",
      
      // Services
      "service.freeDelivery": "БЕСПЛАТНАЯ И БЫСТРАЯ ДОСТАВКА",
      "service.freeDeliveryDesc": "Бесплатная доставка для заказов от $140",
      "service.customerService": "ОБСЛУЖИВАНИЕ КЛИЕНТОВ 24/7",
      "service.customerServiceDesc": "Дружелюбное обслуживание клиентов",
      "service.moneyBack": "ГАРАНТИЯ ВОЗВРАТА ДЕНЕГ",
      "service.moneyBackDesc": "Возврат денег в течение 30 дней",
      
      // Common
      "common.loading": "Загрузка...",
      "common.error": "Ошибка",
      "common.success": "Успешно",
      "common.cancel": "Отмена",
      "common.save": "Сохранить",
      "common.delete": "Удалить",
      "common.edit": "Редактировать",
      "common.view": "Просмотр",
      "common.back": "Назад",
      "common.next": "Далее",
      "common.previous": "Предыдущий",
      "common.submit": "Отправить",
      "common.close": "Закрыть",
    }
  },
  en: {
    translation: {
      // Navbar
      "nav.home": "Home",
      "nav.contact": "Contact",
      "nav.about": "About",
      "nav.signup": "Sign Up",
      "nav.search": "Search...",
      "nav.wishlist": "Wishlist",
      "nav.cart": "Cart",
      
      // Home page
      "home.categories": "Categories",
      "home.flashSales": "Flash Sales",
      "home.bestSelling": "Best Selling",
      "home.exploreProducts": "Explore Products",
      "home.newArrival": "New Arrival",
      "home.viewAll": "View All",
      "home.addToCart": "Add to Cart",
      
      // Product
      "product.addToWishlist": "Add to Wishlist",
      "product.removeFromWishlist": "Remove from Wishlist",
      "product.quickView": "Quick View",
      "product.inStock": "In Stock",
      "product.outOfStock": "Out of Stock",
      "product.colors": "Colors",
      "product.size": "Size",
      "product.quantity": "Quantity",
      "product.buyNow": "Buy Now",
      "product.freeDelivery": "Free Delivery",
      "product.returnDelivery": "Return Delivery within 30 days",
      "product.relatedItems": "Related Items",
      
      // Cart
      "cart.title": "Cart",
      "cart.product": "Product",
      "cart.price": "Price",
      "cart.quantity": "Quantity",
      "cart.subtotal": "Subtotal",
      "cart.returnToShop": "Return to Shop",
      "cart.updateCart": "Update Cart",
      "cart.cartTotal": "Cart Total",
      "cart.total": "Total",
      "cart.shipping": "Shipping",
      "cart.freeShipping": "Free",
      "cart.proceedToCheckout": "Proceed to Checkout",
      "cart.couponCode": "Coupon Code",
      "cart.applyCoupon": "Apply Coupon",
      
      // Checkout
      "checkout.title": "Billing Details",
      "checkout.firstName": "First Name",
      "checkout.lastName": "Last Name",
      "checkout.companyName": "Company Name",
      "checkout.streetAddress": "Street Address",
      "checkout.apartment": "Apartment/Suite",
      "checkout.city": "City",
      "checkout.phone": "Phone Number",
      "checkout.email": "Email Address",
      "checkout.saveInfo": "Save Information",
      "checkout.paymentMethod": "Payment Method",
      "checkout.cash": "Cash",
      "checkout.bank": "Bank Card",
      "checkout.placeOrder": "Place Order",
      
      // Account
      "account.myAccount": "My Account",
      "account.myOrders": "My Orders",
      "account.myProfile": "My Profile",
      "account.addressBook": "Address Book",
      "account.paymentOptions": "Payment Options",
      "account.editProfile": "Edit Profile",
      "account.logout": "Logout",
      
      // Auth
      "auth.login": "Login",
      "auth.signup": "Sign Up",
      "auth.email": "Email",
      "auth.password": "Password",
      "auth.name": "Name",
      "auth.forgotPassword": "Forgot Password?",
      "auth.createAccount": "Create Account",
      "auth.alreadyHaveAccount": "Already have an account?",
      "auth.dontHaveAccount": "Don't have an account?",
      "auth.signupWithGoogle": "Sign up with Google",
      
      // Contact
      "contact.title": "Contact Us",
      "contact.callUs": "Call Us",
      "contact.writeUs": "Write to Us",
      "contact.name": "Your Name",
      "contact.email": "Email",
      "contact.phone": "Phone",
      "contact.message": "Message",
      "contact.sendMessage": "Send Message",
      
      // About
      "about.ourStory": "Our Story",
      "about.statistics": "Statistics",
      "about.sellers": "Sellers",
      "about.customers": "Customers",
      "about.products": "Products",
      "about.revenue": "Revenue",
      
      // Footer
      "footer.subscribe": "Subscribe",
      "footer.get10off": "Get 10% off",
      "footer.enterEmail": "Enter your email",
      "footer.support": "Support",
      "footer.account": "Account",
      "footer.quickLink": "Quick Links",
      "footer.privacyPolicy": "Privacy Policy",
      "footer.termsOfUse": "Terms of Use",
      "footer.faq": "FAQ",
      
      // Services
      "service.freeDelivery": "FREE AND FAST DELIVERY",
      "service.freeDeliveryDesc": "Free delivery for all orders over $140",
      "service.customerService": "24/7 CUSTOMER SERVICE",
      "service.customerServiceDesc": "Friendly 24/7 customer support",
      "service.moneyBack": "MONEY BACK GUARANTEE",
      "service.moneyBackDesc": "We return money within 30 days",
      
      // Common
      "common.loading": "Loading...",
      "common.error": "Error",
      "common.success": "Success",
      "common.cancel": "Cancel",
      "common.save": "Save",
      "common.delete": "Delete",
      "common.edit": "Edit",
      "common.view": "View",
      "common.back": "Back",
      "common.next": "Next",
      "common.previous": "Previous",
      "common.submit": "Submit",
      "common.close": "Close",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    lng: localStorage.getItem('language') || 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
