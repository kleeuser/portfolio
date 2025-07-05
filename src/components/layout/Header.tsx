'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [homeHover, setHomeHover] = useState(false);
  const [aboutHover, setAboutHover] = useState(false);
  const [xHover, setXHover] = useState(false);
  const [igHover, setIgHover] = useState(false);

  return (
    <header className='header'>
      <div className='header-inner'>
        <Link href="/" className="logo-link">
          <div className="image-box">
            <Image 
              className='icon'
              src="/img/header/icon_tx.png"
              alt="Site Logo"
              width={120}
              height={120}
            />
          </div>
        </Link>
        <nav className='nav'>
          <Link href="/">
            <div 
              className="image-box"
              onMouseEnter={() => setHomeHover(true)}
              onMouseLeave={() => setHomeHover(false)}
            >
              <Image 
                src={homeHover ? "/img/header/home2.png" : "/img/header/home1.png"}
                alt="Home"
                width={82}
                height={82}
                className="menu"
              />
            </div>
          </Link>
          <Link href="/about">
            <div 
              className="image-box"
              onMouseEnter={() => setAboutHover(true)}
              onMouseLeave={() => setAboutHover(false)}
            >
              <Image
                src={aboutHover ? "/img/header/about2.png" : "/img/header/about1.png"}
                alt="About"
                width={82}
                height={82}
                className="menu"
              />
            </div>
          </Link>
          <a
            href="https://x.com/kleeuser"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div 
              className="image-box"
              onMouseEnter={() => setXHover(true)}
              onMouseLeave={() => setXHover(false)}
            >
              <Image
                src={xHover ? "/img/header/x2.png" : "/img/header/x1.png"}
                alt="X"
                width={43}
                height={43}
                className="menu"
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com/klee_use?igsh=a3Q5Y2Y4NmFxNWY4&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div 
              className="image-box"
              onMouseEnter={() => setIgHover(true)}
              onMouseLeave={() => setIgHover(false)}
            >
              <Image
                src={igHover ? "/img/header/ig2.png" : "/img/header/ig1.png"}
                alt="Instagram"
                width={43}
                height={43}
                className="menu"
              />
            </div>
          </a>
        </nav>
      </div>
    </header>
  );
}