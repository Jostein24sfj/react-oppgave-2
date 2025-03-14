// import { useEffect, useState } from "react";
// import styles from "./catInfo.module.css";

// export default function CatInfo() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [randomFact, setRandomFact] = useState("");

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await fetch("https://catfact.ninja/facts?limit=5");
//       if (!response.ok) {
//         throw new Error(`HTTP error. Status ${response.status}`);
//       }
//       const result = await response.json();
//       setData(result.data);
//       getRandomFact(result.data);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getRandomFact = (factsArray) => {
//     if (factsArray.length > 0) {
//       const randomIndex = Math.floor(Math.random() * factsArray.length);
//       setRandomFact(factsArray[randomIndex].fact);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>Error: {error}</p>}
//       {!loading && !error && randomFact && <p>{randomFact}</p>}

//       <button
//         className={styles.button}
//         onClick={() => getRandomFact(data)}
//         disabled={loading}
//       >
//         {loading ? "Loading..." : "Random Cat Fact"}
//       </button>
//     </div>
//   );
// }
