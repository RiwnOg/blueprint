"use client";

import React, { useState } from "react";

export default function FormPost() {
  const newTodo = { title: "", content: "" };
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    newTodo.title = title;
    newTodo.content = content;
    const data = await fetch(`/api/newTodo`, {
      method: "POST",
      body: JSON.stringify({ newTodo }),
    });
    const res = await data.json();
    if (!res.ok) console.log(res);
  }

  return (
    <form onSubmit={submitPost}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="title"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <input
        onChange={(e) => setContent(e.target.value)}
        value={content}
        type="text"
        placeholder="description"
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button
        type="submit"
        className="block uppercase mx-auto shadow bg-indigo-800 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded"
      >
        Make a New Post
      </button>
    </form>
  );
}
