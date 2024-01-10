import React from "react";
import { Link } from 'react-router-dom'

  
  export default function Example(props) {
    const ref = props.to;

    function handleClick() {
      props.onDelete(props.id);
    }


    return (
      <div className="relative bg-gray-50 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <Link to={ref} className="hover:underline">
                        {post.category.name}
                      </Link>
                    </p>
                    <Link to={ref} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </Link>
                  </div>
                  <div className="flex flex-row">
                    {post.tags.map((tag, index) => (
                    <div key={index} className="text-xs my-1 mx-1 w-fit flex flex-row font-bold leading-sm uppercase px-3 bg-blue-200 text-blue-700 rounded-full">{tag}</div>
                    ))}
                  </div>

                  <button onClick={handleClick}>DELETE</button>
                  
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <Link to={ref}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </Link>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <Link to={ref} className="hover:underline">
                          {post.author.name}
                        </Link>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  