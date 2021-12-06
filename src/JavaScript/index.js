import React from "react";

export const JsExercises = () => {
  // let exercise1 =
  //   "Write a JS program that compare two integers and display the larger. Use window.prompt, if statement and parseInt ";

  // function compareNumbers() {
  //   let number1 = window.prompt("Input the First integer", "0");
  //   let number2 = window.prompt("Input the Second integer", "0");
  //   if (parseInt(number1, 10) > parseInt(number2, 10)) {
  //     console.log("First number is greater.");
  //   } else if (parseInt(number2, 10) > parseInt(number1, 10)) {
  //     console.log("Second number is greater");
  //   } else {
  //     console.log("Numbers are even.");
  //   }
  // }

  //   compareNumbers()
  // ===============================================================

  //   let exercise2 = "Write a JavaScript function to get the maximum date from an array of dates.";

  //   let datesArray = ["2021/07/01", "2012/11/02", "2020/01/07"];

  //   const getMaxDate = (array) => {
  //     let maxDate = array[0];
  //     let maxDateObject = new Date(array[0]);
  //     array.forEach((date) => {
  //       if (new Date(date) > maxDateObject) {
  //         maxDate = date;
  //         maxDateObject = new Date(date);
  //       }
  //       console.log(`Max date from array is`, maxDate);
  //       return maxDate;
  //     });
  //   };

  //   getMaxDate(datesArray);
  //   ====================================================================

  //   let exercise3 = "Write a JavaScript function that returns array elements larger than a number.";

  //   const arrayOfNumbers = [3, 55, 22, 1, 76, 44];

  //   const getHigherNumber = (number) => {
  //     return arrayOfNumbers.filter((n) => n > number);
  //   };

  //   console.log(getHigherNumber(32));
  // output:  [55, 76, 44]
  // =========================================================

  //   //
  // let exercise4 =
  //   "Write a JS function that check if string is valid URL and redirect to it.";

  // const redirect = (url) => {
  //   var regex =
  //     /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  //   if (!regex.test(url)) {
  //     alert("Please enter valid URL.");
  //     return;
  //   }
  //   window.location.href = url;
  // };
  // redirect("https://google.com");

  //   // example
  //   redirect("https://google.com");
  //   // redirects to google.com
  // =========================================================

  //   let exercise5 ="Write a function to extract a specified number of characters from this string";

  //   const cutString = (string, lenght) => {
  //     if (string.constructor === String && string.length > 0) {
  //       return string.slice(0, lenght);
  //     } else {
  //       console.log("Input a valid string!");
  //     }
  //   };

  //   console.log(cutString(exercise, 10));
  //   //   output: Write a fu

  // =========================================================

  //   let exercise6 =
  //   "Write a JS program that compare two integers and display the larger. Use window.prompt, if statement and parseInt ";

  // function compareNumbers() {
  //   let number1 = window.prompt("Input the First integer", "0");
  //   let number2 = window.prompt("Input the Second integer", "0");
  //   if (parseInt(number1, 10) > parseInt(number2, 10)) {
  //     console.log("First number is greater.");
  //   } else if (parseInt(number2, 10) > parseInt(number1, 10)) {
  //     console.log("Second number is greater");
  //   } else {
  //     console.log("Numbers are even.");
  //   }
  // }

  //   compareNumbers()
  // ===============================================================

  //   let exercise7 = "Write a JavaScript function to get the maximum date from an array of dates.";

  //   let datesArray = ["2021/07/01", "2012/11/02", "2020/01/07"];

  //   const getMaxDate = (array) => {
  //     let maxDate = array[0];
  //     let maxDateObject = new Date(array[0]);
  //     array.forEach((date) => {
  //       if (new Date(date) > maxDateObject) {
  //         maxDate = date;
  //         maxDateObject = new Date(date);
  //       }
  //       console.log(`Max date from array is`, maxDate);
  //       return maxDate;
  //     });
  //   };

  //   getMaxDate(datesArray);
  //   ====================================================================

  //   let exercise8 = "Write a JavaScript function that returns array elements larger than a number.";

  //   const arrayOfNumbers = [3, 55, 22, 1, 76, 44];

  //   const getHigherNumber = (number) => {
  //     return arrayOfNumbers.filter((n) => n > number);
  //   };

  //   console.log(getHigherNumber(32));
  // output:  [55, 76, 44]
  // =========================================================

  //   //
  // let exercise9 =
  //   "Write a JS function that check if string is valid URL and redirect to it.";

  // const redirect = (url) => {
  //   var regex =
  //     /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
  //   if (!regex.test(url)) {
  //     alert("Please enter valid URL.");
  //     return;
  //   }
  //   window.location.href = url;
  // };
  // redirect("https://google.com");

  //   // example
  //   redirect("https://google.com");
  //   // redirects to google.com
  // =========================================================

  //   let exercise10 ="Write a function to extract a specified number of characters from this string";

  //   const cutString = (string, lenght) => {
  //     if (string.constructor === String && string.length > 0) {
  //       return string.slice(0, lenght);
  //     } else {
  //       console.log("Input a valid string!");
  //     }
  //   };

  //   console.log(cutString(exercise5, 10));
  //   //   output: Write a fu

  // =========================================================

  // let exercise11 = "Write function that returns string in alphabet order";
  // let string = "React Native Developer Community";

  // const alphabet_order = (stringToOrder) => {
  //   console.log(stringToOrder);
  //   const alphabeticalOrder = stringToOrder
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .join("");

  //   return alphabeticalOrder;
  // };
  // alphabet_order(string);
  // console.log(alphabet_order(string));

  // =========================================================

  // exercise12
  //   Sample Output : Today is : Tuesday.
  // Current time is : 10 PM : 30 : 38

  // var today = new Date();
  // var day = today.getDay();
  // const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  // console.log("Today is " + dayList[day] + ", " + day + "th" + " day of the week.");

  // const showCurrentTime = () => {
  //   var prepand = "AM";
  //   var todayIs = new Date();

  // =========================================================

  // exercise13

  //   var hour = todayIs.getHours();

  //   if (hour >= 12) {
  //     hour = hour - 12;
  //     prepand = "PM";
  //   }
  //   var minutes = todayIs.getMinutes();
  //   var seconds = todayIs.getSeconds();

  //   console.log(`Current time is : ${hour} ${prepand} : ${minutes} : ${seconds}`);
  // };

  // setTimeout(() => {
  //   showCurrentTime();
  // }, 0);

  // =========================================================

  // exercise14
  // Write a JavaScript function to print the contents of the current window.

  // const printThisPage = () => {
  //   window.print();
  // };

  // exercise15
  //   Write a JavaScript program to get the current date.
  // Expected Output :
  // mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

  // const today = new Date();
  // console.log(today);
  // var day = today.getDate();
  // var month = today.getMonth();
  // var year = today.getFullYear();
  // day = day < 10 ? "0" + day : day;
  // month = month < 10 ? "0" + month : month;
  // day = day.toString();
  // month = month.toString();
  // year=year.toString()

  // console.log(day, month, year);
  // console.log(day + "-" + month + "-" + year);
  //  console.log(month + "-" + day + "-" + year);
  // console.log(day + "/" + month + "/" + year);
  // console.log(month + "/" + day + "/" + year);

  // =========================================================

  // exercise16
  // const list=[4,6,2,9,11,9]

  // const sortedList = list.slice().sort(function (a, b) {
  //   // if (a<b) return -1
  //   return a - b;
  // });
  // console.log("Unsorted List : " + list)
  // console.log(sortedList)

  // =========================================================

  // exercise17
  // const list = [2,8,4,11,3];
  // const [number, setNumber] = useState([6, 7]);

  // list.map((item) => setNumber((prev) => [...prev, { "number=": item }]));
  // console.log(number);

  // =========================================================

  // exercise18

  // const today = new Date();
  // const latYear = today.getFullYear();
  // console.log(latYear - 1);

  // =========================================================

  // exercise19
  // const queryCopy = ["keyword", "limit", "page", "Banana"];

  // console.log(queryCopy);
  // // JS learn
  // const removeFields = ["keyword", "limit", "page"];
  // removeFields.forEach((el) => delete queryCopy[el]);

  // console.log(queryCopy);
  // JS learn

  // ---------------------------------------------------

  // exercise20
  // const employees = [
  //   {
  //     id: 1,
  //     name: "Tom",
  //     salary: 1200
  //   },
  //   {
  //     id: 2,
  //     name: "Karol",
  //     salary: 1800
  //   },
  //   {
  //     id: 3,
  //     name: "Anete",
  //     salary: 2000
  //   }
  // ];

  // const calculateSumSalary=(employeesArr)=>{

  //   let sumSalary=0
  //   for (let i=0; i<employeesArr.length; i++){
  //   sumSalary=sumSalary + employeesArr[i].salary
  //   console.log(sumSalary)
  // }
  // return sumSalary
  // }

  // calculateSumSalary(employees)

  // console.log(calculateSumSalary(employees)
  // )

  // let total=0
  // employees.map((empl)=>{
  //   total+=empl.salary
  //   return total
  // }
  // )
  // console.log(total)

  // const average=(total/employees.length).toFixed(2)
  // console.log("Average salary is  "+ average + ' zł.')

  // var total = 0;

  // total = employees.reduce((calosc, emplSalary) => calosc + emplSalary.salary, 0);

  // console.log("Salary is : " + total);

  // ---------------------------------------------------
  // let sumaSalary=0
  // employees.map((emp)=>{
  //   sumaSalary=sumaSalary+emp.salary
  //   return sumaSalary
  // }
  // )

  // ---------------------------------------------------

  // exercise21

  let exercise = "Write tree methods which clone an array.";

  let array = [1, 2, 3, 4, 5];
  console.log("Original array:");
  console.log(array);

  let cloneArray1 = [...array];
  console.log("Clone of array nr 1: " + cloneArray1);
  console.log(cloneArray1);

  let cloneArray2 = array.slice();
  console.log("Clone of the array nr 2: ");
  console.log(cloneArray2);

  let cloneArray3 = Array.from(array);
  console.log("Clone of the array nr 3: ");
  console.log(cloneArray3);

  return <div></div>;
};
