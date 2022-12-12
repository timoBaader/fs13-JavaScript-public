let myArr = [
  "12-24-2014",
  "09-2022-23",
  "12-30-2021",
  "08-02-2021",
  "07-15-2018",
  "2019-12-14",
  "2022-14-12",
];

const fixDate = (array) => {
  let result = array.map((item) => {
    // check for first - to know the format
    let index = item.indexOf("-", 3);
    // index == 7 means the year is in the middle
    if (index == 7) {
      item = item.slice(0, 2) + item.slice(7) + "-" + item.slice(3, 7);
    }
    // index == 4 means the year is at the start
    else if (index == 4) {
      item = item.slice(5) + "-" + item.slice(0, 4);
    }
    // if the month is bigger than 12, it is supposed to be the day instead
    if (item.slice(3, 5) > 12) {
      item = item.slice(3, 5) + "-" + item.slice(0, 2) + item.slice(5);
    }
    return item;
  });
  return result;
};
let newArr = fixDate(myArr);
console.log(newArr);
