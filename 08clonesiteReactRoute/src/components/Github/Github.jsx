import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function GithubProfile() {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('https://api.github.com/users/prabj0t')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);

    return (
        <div className="flex items-center p-6 bg-gray-700 text-white">
            {/* Left section with the image */}
            <div className="flex-shrink-0 flex justify-center">
                <img
                    src={data.avatar_url}
                    alt="Git Profile"
                    className="rounded-full border-4 border-white w-40 h-40"
                />
            </div>

            {/* Right section with GitHub profile info */}
            <div className="ml-8 flex flex-col">
                <h1 className="text-4xl font-bold">{data.name}</h1>
                <p className="text-xl italic">{data.bio}</p>

                <div className="flex flex-col mt-4">
                    <p className="text-lg">Location: {data.location || 'Unknown'}</p>
                    <p className="text-lg">Followers: {data.followers}</p>
                    <p className="text-lg">Following: {data.following}</p>
                    <p className="text-lg">Public Repos: {data.public_repos}</p>
                </div>

                <Link to={data.html_url} target="_blank" rel="noopener noreferrer" className="mt-4 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded">
                    Visit GitHub Profile
                </Link>
            </div>
        </div>
    );
}
