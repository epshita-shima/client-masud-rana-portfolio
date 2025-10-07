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
        title: 'Sample Blog Title',
        author: 'Masud Rana',
        date: '2025-04-01',
        category: 'Web Design',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        thumbnail: 'https://www.topfivebuzz.com/wp-content/uploads/2020/03/people-2571590_1920.jpg',
        content: 'Full content here...'
      },
      {
        id: 2,
        title: 'Sample Blog Title',
        author: 'Masud Rana',
        date: '2025-04-01',
        category: 'Web Design',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        thumbnail: 'https://www.topfivebuzz.com/wp-content/uploads/2020/03/people-2571590_1920.jpg',
        content: 'Full content here...'
      },
      {
        id: 3,
        title: 'Sample Blog Title',
        author: 'Masud Rana',
        date: '2025-04-01',
        category: 'Web Design',
        excerpt: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
        thumbnail: 'https://www.topfivebuzz.com/wp-content/uploads/2020/03/people-2571590_1920.jpg',
        content: 'Full content here...'
      },
    ];

    setBlogs(data);

  }, []);
  const popularPosts = [
    {
      id: 101,
      title: 'Top 5 Tips for UI Design',
      date: '2025-03-25',
      thumbnail: 'https://www.topfivebuzz.com/wp-content/uploads/2020/03/people-2571590_1920.jpg',
    },
    {
      id: 102,
      title: 'How to Write Clean React Code',
      date: '2025-03-10',
      thumbnail: 'https://www.topfivebuzz.com/wp-content/uploads/2020/03/people-2571590_1920.jpg',
    },
  ];

  const recentPosts = [
    { id: 201, title: 'Building Responsive Layouts in Tailwind' },
    { id: 202, title: 'Understanding React Hooks in Depth' },
  ];
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
    <div className="container mx-auto px-4 py-6">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
    {/* Left: Blog Posts */}
    <div className="lg:col-span-2 space-y-6">
      {blogs.map((blog) => (
        <div key={blog.id} className="bg-white shadow border rounded-lg overflow-hidden">
          <div className="bg-gray-300 text-white px-2 py-1 text-sm font-semibold">
            {new Date(blog.date).toDateString()}
          </div>
          <div className="flex flex-col md:flex-row p-4 gap-4">
            <img src={blog.thumbnail} alt="Thumbnail" className="w-full md:w-40 h-28 object-cover rounded-md" />
            <div>
              <h2 className="text-xl font-bold text-[#940000]">{blog.title}</h2>
              <p className="text-gray-500 text-sm mb-2">
                By {blog.author} • {blog.category}
              </p>
              <p className="text-gray-700 text-sm line-clamp-3">{blog.excerpt}</p>
              <button
                onClick={() => openModal(blog)}
                className="mt-2 inline-block bg-[#940000] text-white text-sm px-3 py-1 rounded hover:bg-[#b13148]"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    <dialog id="blogModal" className="modal">
      <div className="modal-box max-w-4xl bg-[#fefcf6] shadow-xl border rounded-lg max-h-[90vh] overflow-auto">
        {selectedBlog && (
          <>
            <h3 className="text-2xl font-bold mb-2 text-center text-[#940000]">{selectedBlog.title}</h3>
            <p className="text-sm text-center text-gray-500 mb-4">
              By {selectedBlog.author} • {new Date(selectedBlog.date).toLocaleDateString()}
            </p>
            <div className="prose max-w-none text-justify px-2 text-gray-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo laborum vitae aliquam natus optio placeat labore tempora temporibus harum, doloribus vero? Odit blanditiis beatae quidem id nostrum laborum ipsum quibusdam facilis, dolorem assumenda voluptas quas expedita ad qui illum. Voluptatibus illo necessitatibus adipisci officiis repellendus saepe illum mollitia expedita ipsum repudiandae vitae ipsa, a nemo assumenda deleniti, quo earum veniam nihil ad aliquam doloribus similique dolores maiores reprehenderit! Itaque excepturi distinctio deleniti perferendis incidunt molestias laborum nostrum adipisci saepe repellat iure ea maiores quaerat est vel sed blanditiis pariatur quam nesciunt, recusandae eligendi doloremque accusamus? Dolore sequi rem aliquam architecto?</div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn btn-outline bg-[#940000] text-white">Close</button>
              </form>
            </div>
          </>
        )}
      </div>
    </dialog>
    {/* Right: Sidebar */}
    <div className="space-y-6">
      {/* Popular Posts */}
      <div className="bg-white shadow border rounded-lg p-4">
        <h3 className="text-lg font-bold mb-3 border-b pb-2 text-[#940000]">Popular Posts</h3>
        {popularPosts.map((post) => (
          <div key={post.id} className="flex gap-3 mb-4">
            <img src={post.thumbnail} alt="" className="w-16 h-16 object-cover rounded-md" />
            <div>
              <h4 className="text-sm font-semibold text-[#940000]">{post.title}</h4>
              <p className="text-xs text-gray-500">{new Date(post.date).toLocaleDateString()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="bg-white shadow border rounded-lg p-4">
        <h3 className="text-lg font-bold mb-3 border-b pb-2 text-[#940000]">Recent Posts</h3>
        {recentPosts.map((post) => (
          <p key={post.id} className="text-sm text-gray-700 mb-2 hover:text-[#940000] cursor-pointer">
            {post.title}
          </p>
        ))}
      </div>
    </div>
  </div>
</div>

  );
  
};

export default Blog;
