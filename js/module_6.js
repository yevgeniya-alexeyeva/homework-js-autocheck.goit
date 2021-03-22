//Задание 1

function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // Пиши код ниже этой строки
  orderedItems.forEach((element) => {
    totalPrice += element;
  });
  // Пиши код выше этой строки
  return totalPrice;
}

//Задание 2

function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
  numbers.forEach((el) => {
    if (el > value) {
      filteredNumbers.push(el);
    }
  });
  // Пиши код выше этой строки
  return filteredNumbers;
}

//Задание 3

function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки
  firstArray.forEach((el) => {
    if (secondArray.includes(el)) {
      commonElements.push(el);
    }
  });

  return commonElements;
  // Пиши код выше этой строки
}

//Задание 4

const calculateTotalPrice = (quantity, pricePerItem) => {
  // Пиши код выше этой строки
  return quantity * pricePerItem;
};

//Задание 5

const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

//Задание 6

// Пиши код ниже этой строки
const calculateTotalPrice = (orderedItems) => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
};
// Пиши код выше этой строки

//Задание 7

// Пиши код ниже этой строки
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Пиши код выше этой строки
  return filteredNumbers;
};

//Задание 8

// Пиши код ниже этой строки
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Пиши код выше этой строки
  return commonElements;
};

// Задание 9

function changeEven(numbers, value) {
  // Пиши код ниже этой строки
  const newArray = [];
  numbers.forEach((e) => {
    if (e % 2 === 0) e += value;
    newArray.push(e);
  });
  return newArray;

  // Пиши код выше этой строки
}
console.log(changeEven([1, 2, 3, 4, 5], 10));

//Задание 10

const planets = ["Земля", "Марс", "Венера", "Юпитер"];
// Пиши код ниже этой строки
const planetsLengths = planets.map((i) => i.length);

//Задание 11

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки

const titles = books.map((i) => i.title);

//Задание 12

const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика"],
  },
];
// Пиши код ниже этой строки

const genres = books.flatMap((i) => i.genres);

//Задание 13
// Пиши код ниже этой строки
const getUserNames = (users) => {
  const names = users.map((i) => i.name);

  return names;
};
// Пиши код выше этой строки

//Задание 14

// Пиши код ниже этой строки
const getUserEmails = (users) => {
  return users.map((user) => user.email);
};
// Пиши код выше этой строки

//Задание 15

const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

//Задание 16

const books = [
  {
    title: "Последнее королевство",
    author: "Бернард Корнуэлл",
    genres: ["приключения", "историческое"],
  },
  {
    title: "На берегу спокойных вод",
    author: "Роберт Шекли",
    genres: ["фантастика", "мистика"],
  },
  {
    title: "Красна как кровь",
    author: "Ли Танит",
    genres: ["ужасы", "мистика", "приключения"],
  },
];
// Пиши код ниже этой строки
const allGenres = books.flatMap((book) => book.genres);
const uniqueGenres = allGenres.filter(
  (book, index, array) => array.indexOf(book) === index
);

//Задание 17

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Бернард Корнуэлл";
// Пиши код ниже этой строки

const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
const booksByAuthor = books.filter((book) => book.author === AUTHOR);

//Задание 18

// Пиши код ниже этой строки
const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};
// Пиши код выше этой строки

//Задание 19

// Пиши код ниже этой строки
const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter((user) => user.age >= minAge && user.age <= maxAge);
};
// Пиши код выше этой строки

//Задание 20

// Пиши код ниже этой строки
const getUsersWithFriend = (users, friendName) => {
  return users.filter((user) => user.friends.indexOf(friendName) !== -1);
};
// Пиши код выше этой строки

//Задание 21

// Пиши код ниже этой строки
const getFriends = (users) => {
  return users
    .flatMap((user) => user.friends)
    .filter((friend, index, array) => array.indexOf(friend) === index);
};
// Пиши код выше этой строки

//Задание 22

// Пиши код ниже этой строки
const getActiveUsers = (users) => {
  return users.filter((user) => user.isActive);
};
// Пиши код выше этой строки

//Задание 23

const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};

//Задание 24

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
];
const BOOK_TITLE = "Сон смешного человека";
const AUTHOR = "Роберт Шекли";
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
const bookByAuthor = books.find((book) => book.author === AUTHOR);

//Задание 25

const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};

//Задание 26

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const eachElementInFirstIsEven = firstArray.every((el) => el % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every((el) => el % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every((el) => el % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every((el) => el % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every((el) => el % 2 === 0);
const eachElementInThirdIsOdd = thirdArray.every((el) => el % 2 !== 0);

//Задание 27

// Пиши код ниже этой строки
const isEveryUserActive = (users) => {
  return users.every((u) => u.isActive);
};
// Пиши код выше этой строки

//Задание 28

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Пиши код ниже этой строки

const anyElementInFirstIsEven = firstArray.some((el) => el % 2 === 0);
const anyElementInFirstIsOdd = firstArray.some((el) => el % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some((el) => el % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some((el) => el % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some((el) => el % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some((el) => el % 2 !== 0);

//Задание 29

// Пиши код ниже этой строки
const isAnyUserActive = (users) => {
  return users.some((i) => i.isActive);
};
// Пиши код выше этой строки

//Задание 30

const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Пиши код ниже этой строки

const totalPlayTime = playtimes.reduce((result, item) => {
  return result + item;
}, 0);

// Пиши код выше этой строки
const averagePlayTime = totalPlayTime / playtimes.length;

//Задание 31

const players = [
  { name: "Манго", playtime: 1270, gamesPlayed: 4 },
  { name: "Поли", playtime: 469, gamesPlayed: 2 },
  { name: "Аякс", playtime: 690, gamesPlayed: 3 },
  { name: "Киви", playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce(
  (acc, player) => acc + player.playtime / player.gamesPlayed,
  0
);

//Задание 32

// Пиши код ниже этой строки
const calculateTotalBalance = (users) => {
  return users.reduce((acc, item) => acc + item.balance, 0);
};
// Пиши код выше этой строки

//Задание 33

// Пиши код ниже этой строки
const getTotalFriendCount = (users) => {
  return users.reduce((acc, user) => acc + user.friends.length, 0);
};
// Пиши код выше этой строки

//Задание 34

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();

//Задание 35

const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Пиши код ниже этой строки

const ascendingReleaseDates = [...releaseDates].sort();

const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

//Задание 36

const authors = [
  "Ли Танит",
  "Бернард Корнуэлл",
  "Роберт Шекли",
  "Федор Достоевский",
  "Говард Лавкрафт",
];
// Пиши код ниже этой строки

const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

//Задание 37

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
  { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort((a, b) =>
  a.author.localeCompare(b.author)
);

const sortedByReversedAuthorName = [...books].sort((a, b) =>
  b.author.localeCompare(a.author)
);

const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

//Задание 38

// Пиши код ниже этой строки
const sortByAscendingBalance = (users) => {
  return users.sort((a, b) => a.balance - b.balance);
};
// Пиши код выше этой строки

//Задание 39

// Пиши код ниже этой строки
const sortByDescendingFriendCount = (users) => {
  return [...users].sort((a, b) => b.friends.length - a.friends.length);
};
// Пиши код выше этой строки

//Задание 40

// Пиши код ниже этой строки
const sortByName = (users) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
// Пиши код выше этой строки

//Задание 41

const books = [
  { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
  { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
  { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
  { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
  { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
];
const MIN_BOOK_RATING = 8;
// Пиши код ниже этой строки

const names = [...books]
  .filter((book) => book.rating >= MIN_BOOK_RATING)
  .map((book) => book.author)
  .sort((a, b) => a.localeCompare(b));

//Задание 42

// Пиши код ниже этой строки
const getNamesSortedByFriendCount = (users) => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map((user) => user.name);
};
// Пиши код выше этой строки

//Задание 43

// Пиши код ниже этой строки
const getSortedFriends = (users) => {
  return [...users]
    .flatMap((user) => user.friends)
    .filter((friend, index, arr) => arr.indexOf(friend) === index)
    .sort((a, b) => a.localeCompare(b));
};
// Пиши код выше этой строки

//Задание 44

// Пиши код ниже этой строки
const getTotalBalanceByGender = (users, gender) => {
  return [...users]
    .filter((user) => user.gender === gender)
    .reduce((acc, user) => acc + user.balance, 0);
};
// Пиши код выше этой строки
