      //   let arr = [23, 45, 677, 122, 78, 9];
      //   let fun = arr.reduce((crrunt, prive) => {
      //     return crrunt > prive ? crrunt : prive;
      //   }, 0);
      //   console.log(fun);

      //   let arr = [12, 43, 7, 89, 342, 4115, 78];
      //   let b = arr.reduce((currnt, max) => (currnt > max ? currnt : max));
      //   console.log(b);

      // const arr = [1, 2, 3, 40, 55, 6, 7, 8, 9, 10];
      // let ans = arr.reduce((max, currentValue) => {
      //   console.log("max", max, "currentValue", currentValue);
      //   if (max < currentValue) {
      //     return currentValue;
      //   } else {
      //     return max;
      //   }
      // });
      // console.log(ans);

      //   const arr = [1, 2, 3, 3, 2, 6, 10, 10, 4, 10];
      //   const map = new Map();
      //   for (let value of arr) {
      //     map.set(value, 1);
      //   }
      //   console.log(map);

      //   [1, 2, 3, 3, 2, 6, 10, 10, 4, 10];
      //   1 : 1
      //   2 : 2
      //   3 : 2
      //   6 : 1
      //   10 : 3
      //   4 : 1
      // -------------------------------------------------------------------

      //   const arr = [1, 2, 3, 3, 2, 6, 10, 10, 4, 10];
      //   const map = new Map();
      //   map.set(1, 1);
      //   map.set(2, 2);
      //   map.set(3, 2);
      //   map.set(6, 1);
      //   map.set(10, 3);
      //   console.log(map);

      //   const arr = [1, 2, 3, 3, 2, 6, 10, 10, 4, 10];
      //   const map = new Map();
      //   for (let value of arr) {
      //     map.set(value, 1);
      //   }
      //   console.log(map);

      //   let map = new Map();
      //   if (map.get(1)) {
      //     console.log("yes"); /// map 1 h nhi to yes prit nhi hoga
      //   } else {
      //     map.set(1, 100);
      //   }
      //   console.log(map);

      //   let map = new Map();
      //   if (map.get(1)) {
      //     console.log("yes"); // map ke ander 1 nhi he to 1 add ho gya 100 ke sath
      //   } else {
      //     map.set(1, 100);
      //   }
      //   if (map.get(1)) {
      //     // map ke ander 1 he uper chla gya to yes print hoga
      //     console.log("yes");
      //   } else {
      //     map.set(1, 100);
      //   }
      //   console.log(map); // yes and 1 => 100 print hoga

      // koy bhi key map ke ander he ya nhi he ye pta krne ke liy map.get() krna hoga

      //   const map = new Map();
      //   map.set(1, 10);
      //   if (map.get(1) > -1) {
      //     let value = map.get(1);
      //     value = value + 1;
      //     map.set(1, value);
      //   } else {
      //     map.set(1, 1);
      //   }
      //   console.log(map);
