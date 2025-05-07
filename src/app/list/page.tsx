import React from 'react';

export default function Home() {
  return (
    <div className="list">
        <ul role="list" className="">
            <li className="">
            <div className="flex gap-x-4 items-center">
            <img
                className=""
                src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
            <div className="ml-3">
                <p className="sm:text-lg text-xl font-semibold text-gray-900">Michael Foster</p>
                <p className="sm:text-sm text-md text-gray-500 mt-3 sm:mt-0">michael.foster@example.com</p>
            </div>
            </div>
            <div className="hidden sm:flex flex-col items-end justify-center">
            <p className="text-md text-gray-900">Co-Founder / CTO</p>
            <p className="text-sm text-gray-500">
                Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time>
            </p>
            </div>
        </li>
        <li className="">
            <div className="flex gap-x-4 items-center">
            <img
                className=""
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
            />
            <div className="ml-3">
                <p className="sm:text-lg text-xl font-semibold text-gray-900">Dries Vincent</p>
                <p className="sm:text-sm text-md text-gray-500 mt-3 sm:mt-0">dries.vincent@example.com</p>
            </div>
            </div>
            <div className="hidden sm:flex flex-col items-end justify-center">
            <p className="text-md text-gray-900">Business Relations</p>
            <div className="flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                </div>
                <p className="text-sm text-gray-500">Online</p>
            </div>
            </div>
        </li>
        </ul>
    </div>
  );
}