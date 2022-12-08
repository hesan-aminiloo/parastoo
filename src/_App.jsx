import { useState, useEffect } from "react";
import axios, { get } from "axios";

// Components

// Endpoints
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/posts/1/comments

// Callback
const felan = (data, onDataFetch) => {
  console.log("MIAD 1");
  onDataFetch(data);
};

felan(10, (d) => {
  console.log(d);
});

// Promise
// const dataPromise = new Promise((resolve, reject) => {
//   if (Math.floor(Math.random() * 2)) {
//     resolve(
//       new Promise((resolve, reject) => {
//         resolve("MIAD");
//       })
//     );
//   } else {
//     reject("Data nayumad");
//   }
// });

// dataPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .then((d) => console.log("d", d))
//   .catch((error) => console.warn(error));

const App = () => {
  useEffect(() => {
    const getData = async () => {
      // fetch
      // fetch("https://jsonplaceholder.typicode.com/posts")
      //   .then((data) => data.json())
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      // try {
      //   const d = await fetch("https://jsonplaceholder.typicode.com/posts");
      //   const data = await d.json();
      //   console.log(data);
      // } catch (e) {
      //   console.warn(e);
      // }
      // Third-party
      // axios
      //   .get("https://jsonplaceholder.typicode.com/posts", {
      //     headers: {
      //       token: "felfel",
      //     },
      //   })
      //   .then((data) => {
      //     console.log(data);
      //   })
      //   .catch((err) => {
      //     console.warn(err);
      //   });
      // try {
      //   const { data } = await axios.get(
      //     "https://jsonplaceholder.typicode.com/posts"
      //   );
      //   console.log(data);
      // } catch (e) {
      //   console.warn(e);
      // }
    };

    getData();
  }, []);

  return <div className="p-10 max-w-sm"></div>;
};

export default App;
