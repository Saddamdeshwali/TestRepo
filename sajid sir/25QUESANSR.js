
      //    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      // // console.log(arr.flat(3));
      // // console.log(arr.slice(4));
      // // console.log(arr.slice(5, 7));
      // // console.log(arr.slice(-4, -1));
      // // console.log(arr.slice(-4));
      // arr.splice(4, 2, 101, 102, 103);
      // console.log(arr);

      // let arr = [10, 50, 32, 101, 98, 34, 56, 78, 72];
      // let index = arr.findIndex((value) => {
      //   return value === 98;
      // });
      // console.log(index);
      // arr.splice(index, 1);
      // console.log(arr);

      // let a = 123;
      // let b = a;
      // console.log(a, b); //equal
      // a = 1234;
      // console.log(a, b); //not equal

      // let sajidHouse = [1, 23, 4, 57];
      // let vajidHouse = sajidHouse;
      // console.log(sajidHouse, vajidHouse); //equal
      // sajidHouse.sort((a, b) => {
      //   return a - b;
      // }); //change original array
      // console.log(sajidHouse, vajidHouse);

      // let obj = {
      //   bankName: "SBI",
      //   accountHolderName: "WECode",
      //   address: "Jaipur",
      //   mobile: 944545454,
      //   deposit: function () {
      //     console.log("Deposit function");
      //   },
      //   withdraw: function () {
      //     console.log("Withdraw function");
      //   },
      // };

      // let student = {
      //   name: "Wecode",
      //   id: 101,
      //   address: "jaipur",
      //   mobile: 94354354543,
      //   feeDeposit: () => {
      //     console.log("Deposit fee");
      //   },
      //   attendClass: () => {
      //     console.log("Attend Class");
      //   },
      // };
      // console.log(student.name, student.mobile, student.address);
      // //student.feeDeposit();
      // console.log(student.feeDeposit());

      // let arr = [
      //   [
      //     () => {
      //       console.log("hello");
      //     },
      //     [
      //       () => {
      //         console.log("World");
      //       },
      //     ],
      //   ],
      // ];
      // arr[0][1][0]();

      //   --------------------------sir code end----------------------------------------------------

      //   -------------flat()------------------------------------------------------------

      //   let arr = [1, 2, 3, [4, 5, 6], 7, [8, 9], 10];
      //   console.log(arr.flat());

      //   let arr = [1, 2, 3, [4, [5, 6]], 7, [8, 9], 10];
      //   console.log(arr.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

      //   let arr = [1, 2, 3, [4, [5, [10, 11], 6]], 7, [8, 9], 10]; // flat() ye ek lavel tk to krta he uske jitne ander jayge fir ye nhi krga jitne ander lavel tk jana he  uske liy Defth dane padte he jitne ander jana
      //   console.log(arr.flat(3));

      //   [1, 2, 3, [4, [5, [10, 11], 6]], 7, [8, 9], 10]; ye jo mane kiya huaa he
      //   [1, 2, 3, 4, Array(3), 7, 8, 9, 10]; // // flat ke ander 3 nhi krenge to ye asse aayga array ke ander 3 array hoga
      //   [1, 2, 3, 4, 5, 10, 11, 6, 7, 8, 9, 10] // flat ke ander 3 kernge to ye ase aayga

      //    -------------------------slice()-----(tukda,catna)-----------------------------------------------------------

      //   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      // console.log(arr.slice(4)); // 5 se start hoke purr aayga
      // console.log(arr.slice(0, 5)); 1,2,3,4,5
      // console.log(arr.slice(5,7)) // 6,7
      //   console.log(arr) // orignal array ne kuch nhi hoga ye sem hi rhega

      //   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      //   console.log(arr.slice(-4, -1)); // 10,11,12 // 13 es liy nhi aaya kunki  - me jo index likhte he usse ek kum tk leta he matlb ki - 2 tk hi krega 0 nhi de skte he 0 to 1 ki index he 13 0 nhi he
      //   console.log(arr.slice(-4)); // 13 ko bhi print krne ke liy -4

      //    ------------------------------splice()------------------------------------------------------------

      //   let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      //   arr.splice(4, 2); // 4 se start krna chate he or 2 remove krna yani 4 ,5 ko remove kr dega
      //   console.log(arr);

      //   let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      //   arr.splice(4, 0, 101, 102, 103); // 4 se start krna he 0 remove yani kuch bhi nhi 4 ki jghe aa jayge or 4 ko aage move kr dege // remove krne ke sath ye add bhi krta he
      //   console.log(arr);

      //   let arr = [12, 45, 67, 90, 34, 68, 37, 28, 19];
      //   let ans = arr.findIndex((value) => {
      //     return value === 34; // 4 index pe he to 4 aayga
      //   });
      //   console.log(ans);
      //   arr.splice(ans, 1);
      //   console.log(arr); // esme 34 nhi he

      //   -------------------------student questions---------------------------------------------

      //   let a = 123;
      //   let b = a;
      //   console.log(a, b); // equal he
      //   a = 1234;
      //   console.log(a, b); // not equal

      //   let ab = [1, 23, 4, 57];
      //   let abc = ab;
      //   console.log(ab, abc); /// equal
      //   ab.sort((a, b) => {
      //     return a - b;
      //   });
      //   console.log(ab, abc); // donu sort aake aaynge

      //   let ab = [1, 23, 4, 57];
      //   let abc = ab.slice(); // yha slice krne se sirf ab sort hoga abc sem rhga [1,23,4,57]
      //   console.log(ab, abc);
      //   ab.sort((a, b) => {
      //     return a - b;
      //   });
      //   console.log(ab, abc);

      // --------------------------------object----------------------------------------------------

      /// object oriented programing hoti he jase abi phle jo kr krte the wo functionla programing he matlb function bna bna ke kam kr the
      //  object oriented programing me hr chij ka object bnaya jata he

      // generally class me 2 hi chij hote he 1 proparty or 2 behavers
      // kuch to proparty hoti he jase account name , bank name,mobil no,father name,
      // or behaver matlb ki uska kam jo kr skte he account ke uper
      // let me key hogi or right me value hoge

      //   let obj = {
      //     bankName: "SBI", // bankName key he or SBI value he
      //     accountHolderName: "Wecode",
      //     address: "Jaipur",
      //     mobil: 1290347856,
      //     deposit: function () {
      //       console.log("Deposit Function");
      //     }, // function ka name de ya na de koy fark nhi pdta kunki name to left me de rhe he
      //     withdraw: function () {
      //       console.log();
      //     },
      //   };
      //   console.log(obj);

      //   let student = {
      //     name: "Husain", // bankName key he or SBI value he
      //     id: "Wecode",
      //     address: "Jaipur",
      //     mobil: 1290347856,
      //     feeDeposit: function () {
      //       console.log("Deposit fee");
      //     },
      //     attendClass: function () {
      //       console.log("attendCalss");
      //     },
      //   };
      //   console.log(student.name, student.id, student.address, student.mobil);
      //   //   student.feeDeposit();
      //   console.log(student.feeDeposit()); //console me call krne se undefined aayga kunki function kuch return nhi kr rha he // agr function kuch return nhi kr rhe he to console me undefined aayga

      //   let arr = [
      //     () => {
      //       console.log("hello"); // ye function 0 index pe he
      //     },
      //     () => {
      //       console.log("World"); // ye function 1 index pe he
      //     },
      //   ];
      //   arr[1](); // arr ke ander 1 index pe function he to 1 krke () kr diya

      //   let arr = [
      //     [
      //       () => {
      //         console.log("hello"); // ye function 0 index pe he
      //       },
      //       () => {
      //         console.log("World"); // ye function 1 index pe he
      //       },
      //     ],
      //   ];
      //   arr[0][1](); // World

      // let arr = [
      //   [
      //     () => {
      //       console.log("hello");
      //     },
      //     [
      //       () => {
      //         console.log("World");
      //       },
      //     ],
      //   ],
      // ];
      // arr[0][1][0](); // World
