import React from 'react';
import Link from 'next/link';

function Home() {
  return (
    <section className="home">
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
        </ul>
      </nav>
    </section>
  );
}

export default Home;
