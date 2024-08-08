import React from "react";
import axios from "axios";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const onSubmit = async (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("text", text);
    // formData.append("file", file);
    const formData = {
      text: text,
      file: file,
    };

    try {
      await axios
        .post("https://fitbet-app-api.vercel.app/upload", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          if (res.data === "ok") {
            alert("inserted");
          } else {
            alert("unable to insert");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      <input type="submit" />
    </form>
  );
}
export default App;
