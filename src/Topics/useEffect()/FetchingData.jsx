import { useState, useEffect } from "react";

const FetchingData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      if (data && data.length) setData(data);
    }

    getData();
  }, []);

  return (
    <div>
      <ul>
        {data.map((todo) => (
          <li key={todo.id}>
            <p>Title: {todo.title}</p>
            <p>Body: {todo.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingData;
