// Модуль 1
"use strict";
// Задача 16
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered > available) {
    message = "На складе недостаточно товаров!";
  } else {
    message = "Заказ оформлен, с вами свяжется менеджер";
  }
  // Пиши код выше этой строки
  return message;
}
// Задача 17
a += 2;
b -= 4;
c *= 3;
d /= 10;

// Пиши код ниже этой строки
a = a += 2;
b = b -= 4;
c = c *= 3;
d = d /= 10;

// Задача 18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Пиши код ниже этой строки
  const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
    message = `Недостаточно средств на счету!`;
  } else {
    customerCredits -= totalPrice;
    message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`;
  }
  // Пиши код выше этой строки
  return message;
}
makeTransaction(3000, 5, 23000);

// Задача 19
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  if (password === null) {
    // Дополни эту строку
    message = "Отменено пользователем!";
  } else if (password === ADMIN_PASSWORD) {
    // Дополни эту строку
    message = "Добро пожаловать!";
  } else {
    message = "Доступ запрещен, неверный пароль!";
  }

  return message;
}

// Задача 20

function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки
  if (ordered === 0) {
    message = "В заказе еще нет товаров";
  } else if (ordered > available) {
    message = "Слишком большой заказ, на складе недостаточно товаров!";
  } else {
    message = "Заказ оформлен, с вами свяжется менеджер";
  }
  // Пиши код выше этой строки
  return message;
}

// Задача 21
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // дополни эту строку

  return isInRange;
}

// Задача 22
function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === "pro" || subType === "vip"; // дополни эту строку

  return canAccessContent;
}
// Задача 23
function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !isInRange; // Дополни эту строку

  return isNotInRange;
}
// Задача 24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Пиши код ниже этой строки
  if (totalSpent >= 50000) {
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    discount = BRONZE_DISCOUNT;
  } else if (totalSpent < 5000) {
    discount = BASE_DISCOUNT;
  }
  // Пиши код выше этой строки
  return discount;
}
// Задача 25
function checkStorage(available, ordered) {
  let message;
  // Пиши код ниже этой строки

  message =
    ordered > available
      ? "На складе недостаточно товаров!"
      : "Заказ оформлен, с вами свяжется менеджер";

  // Пиши код выше этой строки
  return message;
}

// Задача 26

function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Пиши код ниже этой строки
  message =
    password === ADMIN_PASSWORD
      ? "Доступ разрешен"
      : "Доступ запрещён, неверный пароль!";
  // Пиши код выше этой строки
  return message;
}

// Задача 27
function getSubscriptionPrice(type) {
  let price;
  // Пиши код ниже этой строки

  switch (
    type // Дополни эту строку
  ) {
    case "starter": // Дополни эту строку
      price = 0; // Дополни эту строку
      break;

    case "professional": // Дополни эту строку
      price = 20; // Дополни эту строку
      break;

    case "organization": // Дополни эту строку
      price = 50; // Дополни эту строку
      break;
  }

  // Пиши код выше этой строки
  return price;
}
// Задача 28
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  switch (password) {
    case null:
      message = "Отменено пользователем!";
      break;
    case ADMIN_PASSWORD:
      message = "Добро пожаловать!";
      break;

    default:
      message = "Доступ запрещён, неверный пароль!";
  }
  return message;
}
// Задача 29
function getShippingCost(country) {
  let message;
  // Пиши код ниже этой строки
  let price;
  switch (country) {
    case "Китай":
      price = 100;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "Чили":
      price = 250;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "Австралия":
      price = 170;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "Ямайка":
      price = 120;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    default:
      message = "Извините, в вашу страну доставки нет";
  }
  // Пиши код выше этой строки
  return message;
}

// Задача 30

function getNameLength(name) {
  const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

  return message;
}

// Задача 31

const courseTopic = "JavaSript для начинающих";
// Пиши код ниже этой строки

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// Задача 32

function getSubstring(string, length) {
  const substring = string.slice(0, length); // Дополни эту строку

  return substring;
}

// Задача 33
function formatMessage(message, maxLength) {
  let result;
  // Пиши код ниже этой строки
  result =
    message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
  // Пиши код выше этой строки
  return result;
}
// Задача 34
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Дополни эту строку
  return normalizedInput;
}
// Задача 35
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Дополни эту строку
  return result;
}
// Задача 36
function checkForSpam(message) {
  let result;
  // Пиши код ниже этой строки
  result =
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale");
  // Пиши код выше этой строки
  return result;
}
