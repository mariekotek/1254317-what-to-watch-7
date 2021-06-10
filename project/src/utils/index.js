const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const getRandom = () => getRandomNumber(1, 10000);
