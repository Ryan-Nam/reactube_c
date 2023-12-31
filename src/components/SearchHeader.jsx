import { Link } from 'react-router-dom';
import { BsYoutube, BsSearch } from 'react-icons/bs';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function SearchHeader() {
    const {keyword} = useParams();
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // setText('');
    navigate(`/videos/${text}`);
  };
  //whenever keyword is changed, run useEffect
  useEffect(()=>{setText(keyword || '')},[keyword])

 

  return (
    <header className='w-full flex p-4 text-2xl border-b border-zinc-600 mb-4 '>
      <Link to='/' className="flex items-center ml-2">
        <BsYoutube className="text-4xl text-brand"/>
        <h1 className='font-bold ml-2 text-3xl'>Reactube</h1>
      </Link>
      <form className='w-full flex justify-center' onSubmit={handleSubmit}>
        <input className='w-7/12 p-2 outline-none bg-black text-green-50'
          type='text'
          placeholder='Search..'
          value={text}
          onChange={handleChange}
        />
        <button className='bg-zinc-600 p-4'>
          <BsSearch />
        </button>
      </form>
      {/* {keyword} */}
    </header>
  );
}
