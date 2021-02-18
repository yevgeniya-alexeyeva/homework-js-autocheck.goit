// Задача 1
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Задача 2
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Генри",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Задача 3
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Пиши код ниже этой строки
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Пиши код выше этой строки

// Задача 4
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Генри",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Пиши код ниже этой строки
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// Пиши код выше этой строки

// Задача 5

const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Пиши код ниже этой строки
const aptRating = apartment["rating"];
const aptDescr = apartment["descr"];
const aptPrice = apartment["price"];
const aptTags = apartment["tags"];
// Пиши код выше этой строки

// Задача 6
const apartment = {
    imgUrl: 'https://via.placeholder.com/640x480',
    descr: 'Просторная квартира в центре',
    rating: 4,
    price: 2153,
    tags: ['premium', 'promoted', 'top'],
    owner: {
      name: 'Генри',
      phone: '982-126-1588',
      email: 'henry.carter@aptmail.com'
    }
  };

  // Пиши код ниже этой строки
  apartment.price = 5000;
  apartment.rating = 4.7;
  apartment.owner.name = 'Генри Сибола';
  apartment.tags.push('trusted');

// Задача 7
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Просторная квартира в центре",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Генри Сибола",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Пиши код ниже этой строки
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
  country: "Ямайка",
  city: "Кингстон",
};

// Задача 8

const name = "Ремонтный дроид";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Пиши код ниже этой строки
  name,
  price,
  image,
  tags,
  // Пиши код выше этой строки
};

// Задача 9
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Пиши код ниже этой строки

  [emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",

  // Пиши код выше этой строки
};

// Задача 10

const apartment = {
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Пиши код ниже этой строки
for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}
// Задача 11
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Просторная квартира в центре";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Пиши код ниже этой строки
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }

  // Пиши код выше этой строки
}

// Задача 12

function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }
  // Пиши код выше этой строки
  return propCount;
}
// Задача 13

const apartment = {
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
};
const values = [];
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
for (const key of keys) {
  values.push(apartment[key]);
}

// Задача 14

function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = Object.keys(object).length;

  return propCount;
  // Пиши код выше этой строки
}

// Задача 15

const apartment = {
  descr: "Просторная квартира в центре",
  rating: 4,
  price: 2153,
};
// Пиши код ниже этой строки
const keys = Object.keys(apartment);
const values = Object.values(apartment);

// Задача 16
function countTotalSalary(salaries) {
    let totalSalary = 0;
    // Пиши код ниже этой строки
  for(const salary of Object.values(salaries)) {
      totalSalary += salary;
  }
    // Пиши код выше этой строки
    return totalSalary;
  }

// Задача 17

  const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2196f3', rgb: '33,150,243' },
    { hex: '#4caf50', rgb: '76,175,80' },
    { hex: '#ffeb3b', rgb: '255,235,59' },
  ];

  const hexColors = [];
  const rgbColors = [];
  // Пиши код ниже этой строки
  for(const color of colors){
    hexColors.push(color.hex);
    rgbColors.push(color.rgb);
  }

// Задача 18

  const products = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроид', price: 400, quantity: 7 },
    { name: 'Захват', price: 1200, quantity: 9 },
  ];

  function getProductPrice(productName) {
    // Пиши код ниже этой строки
    for(const product of products){
        if(product.name === productName){
          return  product.price;
        }
    }
    return null;
    // Пиши код выше этой строки
  }

// Задача 19

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const allPropertyValues = [];
  for (const product of products) {
    if (product[propName]) {
      allPropertyValues.push(product[propName]);
    }
  }

  return allPropertyValues;
  // Пиши код выше этой строки
}
console.log(getAllPropValues("category"));

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки

const yesterday = highTemperatures.yesterday;
const today = highTemperatures.today;
const tomorrow = highTemperatures.tomorrow;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

// Задача 20

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

  let totalPrice = 0;
  for(const product of products){
    if(product.name === productName){
      totalPrice = product.price * product.quantity;
    }

  }
  return totalPrice;
  // Пиши код выше этой строки
}

// Задача 21

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

// Задача 22
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday, today, tomorrow, icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (yesterday + today + tomorrow) / 3;

// Задача 23

const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Пиши код ниже этой строки
const {yesterday: highYesterday, today:highToday, tomorrow: highTomorrow, highIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} = highTemperatures;

// Пиши код выше этой строки
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// Задача 24

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Пиши код ниже этой строки

for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}

// Задача 25

const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Пиши код ниже этой строки
const {today: {high: highToday, low: lowToday, icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, tomorrow: {high: highTomorrow, low: lowTomorrow, icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'} } = forecast;

// Задача 26
// Пиши код ниже этой строки
function calculateMeanTemperature(forecast) {
  const {today: {low: todayLow, high: todayHigh}, tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;

  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

// Задача 27

const scores = [89, 64, 42, 17, 93, 51, 26];
// Пиши код ниже этой строки
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);

// Задача 28

const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Пиши код ниже этой строки
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);

// Задача 29

const defaultSettings = {
  theme: 'light',
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Пиши код ниже этой строки
const finalSettings = {...defaultSettings, ...overrideSettings};

// Задача 30

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
return {category, priority, completed, ...data}
  // Пиши код выше этой строки
}

// Задача 31

// Пиши код ниже этой строки
function add(...args) {
  let sum = 0;
  for(let arg of args){
     sum += arg;
  }
  return sum;
  // Пиши код выше этой строки
}

// Задача 32

// Пиши код ниже этой строки
function addOverNum(index,...args) {
  let total = 0;

  for (const arg of args) {
    if(arg > index){
      total += arg;
    }

  }

  return total;
  // Пиши код выше этой строки
}

// Задача 33

// Пиши код ниже этой строки
function findMatches(firstarg, ...secondarg) {
  const matches = []; // Не изменяй эту строку
for (let i = 0; i < secondarg.length; i += 1){
  if(firstarg.includes(secondarg[i])){
matches.push(secondarg[i]);
  }
}
  // Пиши код выше этой строки
  return matches;
}

// Задача 34

const bookShelf = {
  // Пиши код ниже этой строки
  books: ['Последнее королевство', 'Страж снов'],
  getBooks() {

    return 'Возвращаем все книги';
  },
  addBook(bookName) {
    return `Добавляем книгу ${bookName}`;
  },
  removeBook(bookName) {
    return `Удаляем книгу ${bookName}`;
  },
  updateBook(oldName, newName) {
    return `Обновляем книгу ${oldName} на ${newName}`;
  },
  // Пиши код выше этой строки
};

// Задача 35

const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
    this.books.splice(this.books.indexOf(oldName),1, newName);

    // Пиши код выше этой строки
  },
};

// Задача 36

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: [],
  // Пиши код выше этой строки
};

// Задача 37

const atTheOldToad = {
  // Пиши код ниже этой строки
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
getPotions() {return this.potions},
  // Пиши код выше этой строки
};

// Задача 38

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  addPotion(potionName) {
    // Пиши код ниже этой строки
    return this.potions.push(potionName);
    // Пиши код выше этой строки
  },
};

// Задача 39

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  removePotion(potionName) {
    // Пиши код ниже этой строки
    return this.potions = this.potions.filter(poution => poution !== potionName);
    // Пиши код выше этой строки
  },
};

// Задача 40

const atTheOldToad = {
  potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
  updatePotionName(oldName, newName) {
    // Пиши код ниже этой строки
  for(const potion of this.potions){
    if(potion === oldName){
      this.potions.splice(this.potions.indexOf(potion), 1, newName)
    }
  }
  return this.potions;
    // Пиши код выше этой строки
  },
};

// Задача 41

const atTheOldToad = {
  potions: [
    { name: "Зелье скорости", price: 460 },
    { name: "Дыхание дракона", price: 780 },
    { name: "Каменная кожа", price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    if (this.potions.includes(newPotion)) {
      return `Зелье ${newPotion.name} уже есть в инвентаре!`;
    }

    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let potion of this.potions) {
      if (potion.name === potionName) {
        const potionIndex = this.potions.indexOf(potion);
        if (potionIndex === -1) return `Зелья ${potionName} нет в инвентаре!`;
        this.potions.splice(potionIndex, 1);
      }
    }
  },
  updatePotionName(oldName, newName) {
    for (let potion of this.potions) {
      if (potion.name === oldName) potion.name = newName;
    }
  },
  // Пиши код выше этой строки
};
atTheOldToad.removePotion(
  "Дыхание дракона"
); /*[ { name: 'Зелье скорости', price: 460 }, { name: 'Каменная кожа', price: 520 } ]*/
console.log(atTheOldToad.potions);
atTheOldToad.updatePotionName(
  "Дыхание дракона",
  "Полиморф"
); /*[{ name: 'Зелье скорости', price: 460 }, { name: 'Полиморф', price: 780 }, { name: 'Каменная кожа', price: 520 } ] */
console.log(atTheOldToad.potions);
atTheOldToad.updatePotionName(
  "Каменная кожа",
  "Зелье неуязвимости"
); /*[{ name: 'Зелье скорости', price: 460 }, { name: 'Дыхание дракона', price: 780 }, { name: 'Зелье неуязвимости', price: 520 } ] */
console.log(atTheOldToad.potions);
