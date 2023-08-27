import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-11/12 mx-auto  my-10  '>
      <nav className=' flex justify-between space-x-4 text-center items-center'>
        <div>
          <h1>Nur Abunamus</h1>
        </div>
       
          <ul className='flex justify-around w-2/6 '>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
       
        <div className='flex justify-between space-x-6 '>
          <button>light</button>
          <p>View my artwork</p>
        </div>
      </nav>
      
    </main>
  )
}
