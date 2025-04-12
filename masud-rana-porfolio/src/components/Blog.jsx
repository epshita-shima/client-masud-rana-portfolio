import React, { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const data = [
      {
        id: 1,
        title: "React Hooks 101",
        author: "Epshita Shima",
        date: "2024-09-01",
        summary: "Learn the basics of React hooks...",
        content: `React Hooks let you use state and other React features without writing a class. 
They're introduced in React 16.8 and changed the way we write components. 
This blog explains useState, useEffect, useContext, and more.`
        ,
        category: "React"
      },
      {
        id: 2,
        title: "Tailwind Tips",
        author: "Epshita Shima",
        date: "2024-09-10",
        summary: "Quick styling with Tailwind CSS...",
        content: `Tailwind is a utility-first CSS framework. 
You can create beautiful interfaces faster without writing custom CSS. 
Learn how to structure your components using Tailwind classes.`
        ,
        category: "Tailwind"
      },
      {
        id: 3,
        title: "Node.js Intro",
        author: "Epshita Shima",
        date: "2024-08-15",
        summary: "Get started with server-side JavaScript...",
        content: `Node.js is a JavaScript runtime built on Chrome's V8 engine. 
It's used to build scalable network applications. 
This article introduces basic concepts like modules, npm, and Express.`
        ,
        category: "Node.js"
      }
    ];

    setBlogs(data);
    setFilteredBlogs(data);
    const uniqueCategories = ["All", ...new Set(data.map((blog) => blog.category))];
    setCategories(uniqueCategories);
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter((b) => b.category === category));
    }
  };

  const openModal = (blog) => {
    setSelectedBlog(blog);
    document.getElementById("blogModal").showModal();
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-8">📝 Blog Page</h1>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategorySelect(cat)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-800"
            } hover:bg-blue-500 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {filteredBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-sm text-gray-500 mb-2">
              By {blog.author} • {new Date(blog.date).toLocaleDateString()}
            </p>
            <span className="inline-block text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded mb-3">
              {blog.category}
            </span>
            <p className="text-gray-700">{blog.summary}</p>
            <button
              onClick={() => openModal(blog)}
              className="inline-block mt-4 text-blue-600 hover:underline"
            >
              Read more →
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog id="blogModal" className="modal">
        <div className="modal-box w-11/12 max-w-4xl bg-[#fefcf6] border-2 border-gray-300 shadow-lg rounded-xl overflow-auto max-h-[90vh]">
          {selectedBlog && (
            <>
              <h3 className="font-bold text-2xl border-b pb-2 mb-4 text-center">
                {selectedBlog.title}
              </h3>
              <p className="text-sm text-center text-gray-500 mb-6">
                By {selectedBlog.author} • {new Date(selectedBlog.date).toLocaleDateString()}
              </p>
              <div className="prose max-w-none px-2 leading-relaxed text-justify">
                {selectedBlog.content.split("\n").map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <div className="modal-action mt-6">
                <form method="dialog">
                  <button className="btn btn-outline">Close</button>
                </form>
              </div>
            </>
          )}
        </div>
      </dialog>
    </div>
  );
};

export default Blog;
