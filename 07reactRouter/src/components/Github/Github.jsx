import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch('https://api.github.com/users/Kuwarsaab')
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setData(data);
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, []); // ✅ Add empty dependency array to avoid infinite re-renders

  return (
    <div className='text-center bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data.followers}
      <img className='text-center' src={data.avatar_url} alt="Git Picture" width={300}/>
    </div>
  );
}

export default Github;

export const githubResponseinfo = async () => {
    const response = await fetch('https://api.github.com/users/Kuwarsaab')
    return response.json()
}