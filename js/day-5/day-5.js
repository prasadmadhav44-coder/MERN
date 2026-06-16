// console.log("Step 1");
// console.log("Step 2");

// async function add() {
//   const data = await "Step 3";
//   console.log(data);
// }
// add();

// console.log("Step 4");

// old method  = > then , catch
// fetch("https://dummyjson.com/usersasdfasd")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(`Internal server error ${error}`);
//   });

// new method asyn , await
    async function fetchData() {
    try {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
            console.log(data.users[28].firstName)
    } catch (error) {
        console.log(`Internal server error ${error}`);
    }
    }

    fetchData();