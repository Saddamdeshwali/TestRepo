        // let arr = [1, 2, 3, 4, 5];
        // let ans = arr.forEach((value) => {
        //   console.log(value);
        // });
        // ans = arr.map((value) => {
        //   return value * 10;
        // });
        // console.log(ans);

      //   let arr = ["Shoaib", "Tahir", "Aamir", "Saad", "Ali Sher", "Anis", "Aarif"];
      //   arr.sort(); //Natural Sorting
      //   console.log(arr);

      //   let arr = [1, 3, 5, 4, 2, 8, 7, 9];
      //   arr.sort(); //Natural Sorting
      //   console.log(arr);

      //   let arr = [1, 30, 15, 24, 2, 18, 27, 39, 40];
      //   arr.sort(); //Natural Sorting
      //   console.log(arr);

      //   num1 10 num2  5  num1 >
      //   num1 5 num2 10 num2 >
      //   num1 5 num2 5   ===

      //   a b
      //   a 10 - b 5 +  5 a>
      //   a 5 -b 10  -  -5 a<
      //   a 5 -b 5  0  a==b

      //   let arr = [1, 30, 15, 24, 2, 18, 27, 39, 40];
      //   arr.sort((a, b) => {
      //     //console.log("a", a, "b", b);
      //     return b - a;
      //   });
      //   console.log(arr);

      //   let arr = [1, 30, 15, 24, 2, 18, 24, 27, 39, 40];
      //   arr.sort((a, b) => {
      //     return 0;
      //   });
      //   console.log(arr);

      //   let arr = [1, 2, 3, [10, 11, [15, 16], 12, 13], 4, 5];

      //   let arr = [1, 2, 3, 4, 5];
      //   let arr2 = [arr, 6, 7, 8, 9, 10];
      //   console.log(arr2.flat());

      //   1. Vocab - NO
      //   2. Grammar
      //   3. Pronounciation
      //   4. Listening Skill
      //   5. Speaking Practice
      //   6. Confidence
      //   7. Common Pharases and expressions
      //   8. Reading - No
      //   9. Writing - No
      //   10. Apps/Youtube/Telegram

      //   Team, I can not join the call due to some exigency
      //   Is your pet fine now ?
      //   Education
      //   Hotel
      //   Alarm
      //   Phone cut kr dia
      //   Have a safe journey
      //   Police - Cops

      // --------------------------------------------------------------------------------

      // let arr = [1, 23, 6, 9, 50, 30, 20, 11, 45, 3, 8, 4];
      // arr.sort(); //Natural Sorting
      // console.log(arr); //[1, 11, 20, 23, 3, 30, 4, 45, 50, 6, 8, 9] ye asa es liy aayga kunki ye 1 vale first me 2 se start hone vale second me fir 3 vale ase le rah he
      // ///ase nhi 1,3,4,6,8,9,11

      // let arr = [11, 12, 13, 14, 15, 10, 8, 4];
      // arr.sort((a, b) => {
      //   // console.log("a", a, "b", b);
      //   // return a - b; // asading order me dekhayga
      //   return b - a; // desading order me dekhayga
      // });
      // console.log(arr);

      // let arr = [11, 12, 13, 14, 15, 10, 8, 4]; // 0 se kesi bhi number ki position chang nhi hogi jesa he wesa rehga
      // arr.sort((a, b) => {
      //   return 0; // 0 return ho rha he by defoult sort function chle or jo number jha he whi rhe eske liy 0 dena hoga
      //   // return a === b; // a === b nhi he yani ki koy bhi number sem nhi es liy false aayga to ye sem hi he// es se bhi sem aayga array me lakin ye false he or false ko jab number me converd krte he to 0 value hote he es liy wo chl gya sem
      // }); // 0 return krne se sort function ko 3 value chat hote he - me + me or 0 me sort function ko 0 melte he dekha ki ye to brabr he
      // console.log(arr);

      // let arr = [11, 12, 13, 14, 15, 10, 8, 4];
      // arr.sort((a, b) => {
      //   return +1;
      // }); //esa aayga [4, 8, 10, 15, 14, 13, 12, 11] sorting huy he lakin desading order me nhi hoy he] kunki jub jub 2 numbers ko campyer keya to -1 return kerne se hemasha jis number ko jis number se compyer kiy wo chota he to chote ke hisab se sorting ke di
      // // +1 [11, 12, 13, 14, 15, 10, 8, 4]esa aayga sorting huy he lakin asading order me nhi hoy he] kunki jub jub 2 numbers ko campyer keya to +1 return kerne se hemasha jis number ko jis number se compyer kiy wo big he to big ke hisab se sorting ke di
      // console.log(arr);

      // asading order me krne ke liy -1 b krna
      // desading order me krne ke liy  b -1 krna
      // -1 karne se jub bhi 2 number ko campyer krega to hemasa number ke chota btayga or uski hisab sorting krke de dega

      // let arr = [1, 2, 3, [10, 11, [15, 16], 12, 13], 4, 5];
      // let arr2 = [arr, 6, 7, 8, 9, 10]; // Nested array
      // console.log(arr); //[1, 2, 3, Array(5), 4, 5]
      // console.log(arr2); //[Array(6), 6, 7, 8, 9, 10]
      // console.log(arr2[0]); // 0 pe sara array de dega arr ka // (6) [1, 2, 3, Array(5), 4, 5]
      // console.log(arr2[0][2]); /// 3
      // console.log(arr2[0][3][2][1]); //16
      // console.log(arr[3][2][1]); //dayerect 16 arr me

      // let a = [1, 2, 3, 4, 5];
      // let b = [a, 6, 7, 8, 9, 10];
      // console.log(b.flat());

      // let a = [1, 2, 3, 4, 5];
      // let b = [a, 6, 7, 8, 9, 10];
      // let c = [a, b, 11, 12, 13, 14];
      // console.log(c.flat());

