// // console.log(x);
// // var x = 5;
// // console.log(y);
// // var y = 5;

// // // console.log(c);
// // let sum=0
// // let arr = [1, 2, 3, 4, 5,2,3,3,4,4,4,];
// // // for (var i = 0; i < arr.length; i++){
// // //     console.log(arr[i])
// // //     sum = sum + arr[i];
// // // }
// // // console.log('sum', sum)
// user = [
//   {
//     id: 1,
//     name: "Mansha",
//     email: "manshauaf@gmail.com",
//     mobile: "03000768751",
//   },
// ];
// userDetails = [
//   {
//     id: 1,
//     user_id: 1,
//     fileName: "abc",
//     url: "mansha.com",
//   },
//   {
//     id: 3,
//     user_id: 2,
//     fileName: "abc......",
//     url: "mansha.com..........",
//   },
// ];

// let newArr = [];
// user.forEach((e) => {
//   userDetails.forEach((el2) => {
//     if (e.id === el2.id) {
//       let obj = {
//         id: e.id,
//         name: e.name,
//         email: e.email,
//         mobile: e.mobile,
//         user_id: el2.user_id,
//         fileName: el2.fileName,
//         url: el2.url,
//       };
//       newArr.push(obj);
//     }
//   });
// });
// user.name='hamza'
// console.log(newArr);
// console.log("user Array", user);
// console.log("userDetails", userDetails);
// // function merageArray(a, b) {
// //     console.log(a, b);

// //   let res = [];
// //   res = a.map((obj) => {
// //     const index = b.findIndex((el) => el["id"] == obj["id"]);
// //       console.log(index);
// //     const { user_id, fileName, url } = index !== -1 ? b[index] : {};
// //     return {
// //       ...obj,
// //       user_id,
// //       fileName,
// //       url,
// //     };
// //   });
// //   return res;
// // }

// // console.log( 'final array',merageArray(user, userDetails));

let arr = [2, 3, 60000, 4, 5, 5, 6, 10000];

// // arr.forEach(el => {
// //     console.log(el*3)
// // })
// // let obj = {
// //     a: 'a',
// //     b: 'b'

// // }
// let sortArray=arr.sort((a,b)=>{
//     return b-a;
// });
// // let sortArray = new Set(arr);

// console.log(sortArray);
// // console.log(obj)
// function findMax(arr){
//     let len=arr.length;
//     let max=-Infinity;
//     while(len--){
//         if(arr[len]>max){
//             max=arr[len];
//         }
//     }
//     return max;
// }
// console.log(findMax(arr))
