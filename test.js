// let myArr = [
//   "12-24-2014",
//   "09-2022-23",
//   "12-30-2021",
//   "08-02-2021",
//   "07-15-2018",
//   "2019-12-14",
//   "2022-14-12",
// ];

// const fixDate = (array) => {
//   let result = array.map((item) => {
//     // check for first - to know the format
//     let index = item.indexOf("-", 3);
//     // index == 7 means the year is in the middle
//     if (index == 7) {
//       item = item.slice(0, 2) + item.slice(7) + "-" + item.slice(3, 7);
//     }
//     // index == 4 means the year is at the start
//     else if (index == 4) {
//       item = item.slice(5) + "-" + item.slice(0, 4);
//     }
//     // if the month is bigger than 12, it is supposed to be the day instead
//     if (item.slice(3, 5) > 12) {
//       item = item.slice(3, 5) + "-" + item.slice(0, 2) + item.slice(5);
//     }
//     return item;
//   });
//   return result;
// };
// let newArr = fixDate(myArr);
// console.log(newArr);

// const dateFrom = new Date(500000);
// const dateTo = new Date(1000000000);
// const counter = (from, to) => {
//   let day = 1000 * 60 * 60 * 24;
//   let hour = 1000 * 60 * 60;
//   let minute = 1000 * 60;
//   let second = 1000;

//   let days = Math.floor((dateTo - dateFrom) / day);
//   let hours = Math.floor((dateTo - dateFrom - days * day) / hour);
//   let minutes = Math.floor(
//     (dateTo - dateFrom - days * day - hours * hour) / minute
//   );
//   let seconds = Math.floor(
//     (dateTo - dateFrom - days * day - hours * hour - minutes * minute) / second
//   );

//   return `${days} days - ${hours} hours - ${minutes} minutes - ${seconds} seconds`;
// };
// const timer = counter();
// console.log(timer);

// const generateNewFolderName = (existingFolders) => {
//   if (folder.length == 0) folder.push("New Folder");
//   folder.push(`New Folder (${folder.length})`);
// };

// let folder = [];
// generateNewFolderName(folder);
// generateNewFolderName(folder);
// generateNewFolderName(folder);
// generateNewFolderName(folder);
// console.log(folder); //expect to see ['New Folder', 'New Folder (1)', 'New Folder (2)', 'New Folder (3)']
