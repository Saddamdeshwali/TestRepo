      //   let str = "WeCode Academy";
      //   let arr = [...str];
      //   console.log(arr);

      //   function sum(arr) {
      //     let sum = 0;
      //     for (let i = 0; i < arr.length; i++) {
      //       sum = sum + arr[i];
      //     }
      //     console.log(sum);
      //   }

      //   sum([1, 2, 3, 4, 5]);

      //   function sum(...arr) {
      //     console.log(arr);
      //     let sum = 0;
      //     for (let i = 0; i < arr.length; i++) {
      //       sum = sum + arr[i];
      //     }
      //     console.log(sum);
      //   }

      //   sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

      //   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //   let arr2 = [...arr];

      //   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      //   let [one, two, three, ...others] = arr;
      //   console.log(one, two, three, others);

      //   let obj = {
      //     name: "Wecode",
      //     age: 12,
      //     mobile: 943545435435,
      //     email: "test@gmail.com",
      //   };

      //   let { name, email, ...otherObj } = obj;
      //   console.log(name, otherObj);

      //   function sum(a, b, c) {
      //     console.log(a + b + c);
      //   }

      //   let arr = [1, 2, 3];
      //   sum(...arr);

      //   let obj = {
      //     name: "Wecode",
      //     sum(a, b) {
      //       console.log(a + b);
      //     },
      //   };

      //   obj.sum(1, 2);

      //   let name = "Wecode";
      //   let age = 21;
      //   let obj = {
      //     name: name,
      //     age: age,
      //   };
      //   console.log(obj);

      //   let name = "Wecode";
      //   let age = 21;
      //   let obj = {
      //     name,
      //     age,
      //   };
      //   console.log(obj);

      //   let ans = prompt("What is your age");
      //   let obj = {
      //     name: "Wecode",
      //     age: 21,
      //     mobile: 94354354,
      //     ["sajid" + ans]: 9345435435,
      //     [1 + 1]: 1000,
      //     [30 + 40 + 60]: 900000,
      //   };
      //   console.log(obj);
      //   console.log(obj["sajid" + ans]);

      //   ````````````sir code end``````````````````````````````````````````````````````

      //  ####The Spread Operator
      // Assigning values
      // Copy Array
      // Join 2 Arrays
      // String tarray using spread
      // Passing arguments in function
      // Shallow copy

      //   let arr = [1,2,3,4,5] //Shallow copy
      //   let arr2 = [...arr]
      //   console.log(arr2)

      //   let arr = [1, 2, 3, 4, 5]; //Join 2 Arrays
      //   let arr2 = [6, 7, 8, 9];
      //   let arr3 = [...arr, ...arr2];
      //   console.log(arr3);

      //   let str = "ayesha dehswali"; // String tarray using spread
      //   let ans = [...str];
      //   console.log(ans);

      // Passing arguments in function

      //   function sum(arr) {
      //     console.log(arr);
      //     let sum = 0;
      //     for (let i = 0; i < arr.length; i++) {
      //       sum = sum + arr[i];
      //     }
      //     console.log(sum);
      //   }
      //   sum([1, 2, 3, 4,8,42,9]); //arr he to array bnana pdh raha h tbhi ye array me aa rha h // ek treeka ye hota h normal jo array se krte h

      // jo kam array bnake pass kiya tha ab wo kam bina arrya bnane se b ho gya jo number pass kre h un number ko ek array ke ander dalna h cha rhe h to ase lga denge ...arr to aoutmatic ye array bn jayga

      //   function sum(...arr) {
      //     console.log(arr);
      //     let sum = 0;
      //     for (let i = 0; i < arr.length; i++) {
      //       sum = sum + arr[i];
      //     }
      //     console.log(sum);
      //   }
      //   sum(1, 2, 3, 4, 5, 6, 7, 8); // agr hum chate h yaha jo b argument pass ho rhe h unki snkhya(count) fix nhi h 1 ho skte h 2 ho skte h 5 ho skte h  us case me jo variable bnaya h single arr uske age ... ye lga do ye array me converd kr dega

      //   --------------Spread Operator end--------------

      // ########The Rest Parameter
      // Assign values
      // Rest element last element
      // Assign values in object
      // Variable arguments in function

      // rest b sem hi h es me b ... three dote h but eska use alg h matlb ki enko use kase krte h uske hisab se ye chlta h

      //   Assign values
      //   Rest element last element // rest element last element hota h
      //   let arr = [1, 2, 3, 4, 5, 6, 7, 8]; // 1 2 3 enko one, two, three variables me dalna chate or jitna bhi bha un sbko ek tesre chote variable me dalna chate h to uske liy ...ohters jo name dalna chate h uske aage ... lga do
      //   let [one, two, three, ...others] = arr;
      //   console.log(one, two, three, others); // bech me koy number nhi chod skte he  Rest Parameter ye hmesha last me hi hoga aage nhi lga skte he for Example [ ...others,one, two, three] ase lga skte h // jo bche h unko dalna he to ...others esko aage kase lga skte h jo bche h wo last ke h to last m hi lgana h

      //   Assign values in object (esme b sem array ke tre hi h)
      //   let obj = {
      //     name: "ayesha",
      //     age: 19,
      //     mobile: 45678322,
      //     email: "test@gmail.com",
      //   };
      //   let { name, age, mobile, email, ...otherObj } = obj;
      //   console.log(name, age, mobile, email, otherObj); // sub nikale se otherObj me kuch nhi bcha

      //   let { name, age, ...otherObj } = obj; // jo nikalna he wo nikal lenge to baad otherObj me baaki ke rhnge or sub nikal lenge to otherObj me kuch nhi rhega {} empty ho jayga
      //   console.log(name, age, otherObj); // name age ko chod ke jo bche h wo otherObj me aayga

      // Variable arguments in function
      // function sum(a, b, c) {
      //   console.log(a + b + c);
      // }
      // let arr = [1, 2, 3];
      // sum(...arr); // uper ek functon me yaha se 1,2,3 pass kiya tha or uper ...arr kiya to wo array me converd ho gya lakin ab ulta kr rha h array se chije sprte(nikalne h) kr rha h

      //#### Enhanced Object literals
      //1. Exactly same name
      //2. Function in object
      //3. Computer property name

      //1. Function in object
      // let obj = {
      //   name: "ayesha",
      //   sum: function (a, b) {
      //     console.log(a + b);
      //   }, // es tre se functioin bnana he or usme chije pass krne h to functoin keyword or :colan nhi lgane ke jrurt nhi h
      // };
      // obj.sum(1, 2);

      // let obj = {
      //   name: "ayesha",
      //   sum(a, b) {
      //     console.log(a + b);
      //   },
      // };
      // obj.sum(1, 2);

      //2. Exactly same name
      // let name = "ayesha";
      // let age = 19;
      // let obj = {
      //   name: name,
      //   age: age,
      // }; // jo variable ka nam h whi agr key ka nam to ase dani jrurat nhi h
      // console.log(obj); // ayesha or 19 aa jayga // key ke name se koy lena-dena nhi hota h key ka jo name h wo hi rhta h rigth side me value dane hoti h jo value uper se variables me se le rhe h

      // let name = "ayesha"; // jb es tre se lekhnge to javascript phle dhundega ki code me name nam ka koy or age nam ka variable h kya to h to key to bna dega name or age bna dega age to do key bn gy nane or age se automatic jo variable ka name wo hi wo hi key bn jaygi or value bn jaygi wo jo en variable value h wo value bn jaygi
      // let age = 19;
      // let obj = {
      //   name,
      //   age,
      // };
      // console.log(obj); // agr variable ka nam whi h jo key ka nam h or key me value variable se dal rhe h to name:,name or age:age, ase likhne ke jrurat nhi h serf variable ka nam likh do jo variable ka nam h wo key bn jayga or jo us variable ki value hogi wo value bn jaygi

      //3. Computer property name

      //       let obj = {
      //         name: "ayesha",
      //         age19: 19,
      //         mobile: 3465623, // key ke nam ko calculte krna chate h to prompt me denge or jo user ka nam h ya jo age h useke nam m age ko jod ke key bnane chate h jase name h ayesha or age 19 to jo object ke under key bnegi wo bnegi ayesha19 jase ke manlo name pta h ayesha lakin age pta nhi h age user se input(promtp) me le rhe h
      //       };
      //  console.log(obj);

      // let ans = prompt("what is your age");
      // let obj = {
      //   name: "ayesha",
      //   age: 19,
      //   ["ayesha" + ans]: 3447643, // prompt jo b dega wo ayesha key se chipk jayga
      //   [1 + 1]: "hello",
      //   [30 + 40 + 60]: 8949729299,
      // };
      // // console.log(obj); // fix key he likh deya h name age mobile but key ko calculate krna chate h jase ko calcultion kr rhe h Math ki to ['ayesha' + ans]  ase krnge to key daynemic ho jaygi daynemic ka matlb ki key fix nhi h jo user prompt dalega usi ke hisab se aayga
      // console.log(obj["ayesha" + ans]); // ye 3447643 aa jayga kunki user ne jo b diya h prompt me use name me jode diya or jo nikalna h wo nikal lange
