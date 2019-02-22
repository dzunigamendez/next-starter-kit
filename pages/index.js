import React from 'react';
import Link from 'next/link';
import {DatePicker} from 'antd';

function Home() {
  return (
    <main className="home">
      <DatePicker />
      <nav>
        <ul>
          <li>
            <Link href="/marvel">
              <a>Marvel</a>
            </Link>
          </li>
          <li>
            <Link href="/veggies">
              <a>Veggies</a>
            </Link>
          </li>
          <li>
            <Link href="/scrollmagic">
              <a>ScrollMagic</a>
            </Link>
          </li>
          <li>
            <Link href="/starwars">
              <a>Star Wars</a>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

export default Home;
