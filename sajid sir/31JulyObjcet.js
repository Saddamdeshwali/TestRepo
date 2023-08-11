      let obj = {
        name: "Wecode",
        age: 12,
        sum: function (a, b) {
          console.log(a + b);
        },
        12: 2000,
        numbers: [1, 2, 3, 4, 5],
        age2: 100,
      };

      // Annotation Dot

      console.log(obj.age);
      // console.log(obj.numbers);
      // console.log(obj);
      // //console.log(obj.12); //will not work
      // obj.sum(1, 2);
      // console.log(obj.numbers[2]);

      // Annotation Bracket
      // console.log(obj["age"]);
      // console.log(obj["numbers"]);
      // console.log(obj["12"]); //will work
      // console.log(obj["numbers"][2]);
      // console.log(obj.age + 2); //14
      // console.log(obj["age" + 2]); //100

      // let obj = {
      //   name: "Wecode",
      //   age: 12,
      //   address: {
      //     pincode: 302012,
      //     city: "Jaipur",
      //     address: {
      //       pincode: 302012,
      //       city: "Jaipur",
      //       address: {
      //         pincode: 302020,
      //         city: "Jaipur",
      //       },
      //     },
      //   },
      //   sum: function (a, b) {
      //     console.log(a + b);
      //   },
      //   12: 2000,
      //   numbers: [1, 2, 3, 4, 5],
      //   age2: 100,
      // };

      //   console.log(obj.address.address.address.pincode);
      //   console.log(obj["address"]["address"]["address"]["pincode"]);

      // let age = +prompt("What is your age?");
      // let obj = {
      //   ["age" + age]: 5000,
      // };
      // console.log(obj);
      // console.log(obj["age" + age]);

      // let obj = {
      //   name: "Wecode",
      //   mobile: 9435453454,
      //   aadharCard: 4554654656546,
      //   address: {
      //     pincode: 302012,
      //     city: "Jaipur",
      //   },
      //   marks: [12, 80, 90, 32, 45],
      // };
      // console.log(Object.keys(obj));
      // console.log(Object.keys(obj.address));

      // for (let a in obj) {
      //   console.log(a + " : " + obj[a]);
      // }

      //   console.log(Object.values(obj));
      //   console.log(Object.values(obj.address));

      //   console.log(Object.entries(obj));
      //   console.log(Object.entries(obj.address));

      // let arr = [1, 2, 3, 4, 5];
      // for (let value of arr) {
      //   console.log(value * 10);
      // }

      // let arr = [1, 2, 3, 4, 5];
      // for (let value in arr) {
      //   console.log(value + " " + arr[value]);
      // }

      // let arr = [1, 2, 3, 4, 5];
      // for (let value in arr) {
      //   console.log(arr[value]);
      // }

      // let obj = {
      //   name: "Wecode",
      //   mobile: 9435453454,
      //   aadharCard: 4554654656546,
      //   address: {
      //     pincode: 302012,
      //     city: "Jaipur",
      //   },
      //   marks: [12, 80, 90, 32, 45],
      // };
      // for (let value of Object.keys(obj)) {
      //   console.log(value);
      // }
      // for (let value of Object.values(obj)) {
      //   console.log(value);
      // }
      // for (let value of Object.values(obj)) {
      //   console.log(value);
      // }

      const car = {
        make: "Honda",
        model: "Accord",
        year: 1998,
      };
      console.log("make" in car); // output: true
      delete car.make;
      if ("make" in car === false) {
        car.make = "Suzuki";
      }
      console.log(car.make); //output: "Suzuki"

