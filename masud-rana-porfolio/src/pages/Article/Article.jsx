import React from 'react'
import Profile from "../../assets/image/profile_pic/Masud_Rana.jpg"
const Article = () => {
  return (
     <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
      {/* Cover Image */}
      <img src="https://i.pinimg.com/originals/ac/dc/67/acdc67a70b2ad423d9601d8adf6144b5.jpg" alt="Cover" className="rounded-xl mb-6 w-full object-cover h-64" />

      {/* Title */}
      <h1 className="text-4xl font-bold text-[#940000] mb-2">Designing With Purpose</h1>
      <p className="text-sm text-gray-500 mb-4">By Masud Rana • May 20, 2025 • 4 min read</p>

      {/* Article Content */}
      <article className="prose lg:prose-xl max-w-none">
        <p>
          As a graphics designer, it's not just about making things pretty—it's about communicating visually...
        </p>
        <h2>Why Visual Hierarchy Matters</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dignissimos officia corporis, ratione sed accusantium cupiditate illo fugit, omnis porro at quis consectetur voluptas, provident molestias eveniet voluptatem adipisci. Molestias blanditiis quos fuga commodi ratione tempora iure illum hic adipisci autem velit ullam earum dolorem iste modi, perspiciatis, labore sit?
          Visual hierarchy guides the reader’s eye.  Think of it as a storytelling tool...
        </p>

        <img src="https://img.freepik.com/free-vector/abstract-geometric-business-cover-collection_23-2148875712.jpg" alt="Mockup 1" className="rounded-lg shadow my-6" />

        <p>
          When I designed this logo, the intention was to capture energy and simplicity...
        </p>
      </article>

      {/* Tags */}
      <div className="mt-8 flex gap-2">
        <span className="px-3 py-1 bg-[#940000] text-white rounded-full text-sm">#branding</span>
        <span className="px-3 py-1 bg-gray-200 rounded-full text-sm">#graphicdesign</span>
      </div>

      {/* Social Share */}
      <div className="mt-6 flex gap-4">
        <button className="text-[#940000]">Share on Twiter</button>
        <button className="text-[#940000]">Share on LinkedIn</button>
      </div>

      {/* Author Bio */}
      <div className="mt-10 border-t pt-6 flex items-center gap-4">
        <img src={Profile} className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-sm font-bold">Masud Rana</p>
          <p className="text-sm text-gray-500">Graphics Designer</p>
        </div>
      </div>
    </div>
  )
}

export default Article