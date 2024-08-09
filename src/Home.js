import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const json = await response.json();
        setBlogs(json);
      } catch (error) {
        console.log("error bro", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div>
        {blogs.map((blog) => (
          <div className="blog-preview">
            <h2>{blog.name}</h2>
            <p>{blog.company.catchPhrase}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
