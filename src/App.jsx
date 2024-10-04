import './App.css';
import Card from './components/card';
import { robots } from './components/data';
import React , {useState} from 'react';
import Scroll from './components/Scroll';
function App() {
  const [search , setsearch] = useState('');

  const filterSearch = robots.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className='bg-gradient-to-r from-blue-300 to-yellow-400 min-h-screen'>
      <h1 className='lg:text-5xl text:4xl text-center pt-10 pb-5'>ROBOTS</h1>
      <div className='flex items-center justify-center pb-5'>
      <input className='sticky p-2 rounded-lg' type="search"  placeholder='Search' onChange={(e) => setsearch(e.target.value)}/></div>
      <Scroll>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {filterSearch.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            name={item.name}
            username={item.username}
            email={item.email}
          />
        ))}
      </div>
      </Scroll>
    </div>
  );
}

export default App;
