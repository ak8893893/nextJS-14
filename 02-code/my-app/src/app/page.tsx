import Image from "next/image";

import Link from "next/link";

import React from "react";

export default function Home() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/book">All Books</Link>
          </li>
          {/* 這邊如果有需要可以繼續添加其他連結 */}
        </ul>
      </nav>
      <main>
        {/* 這裡可以放首頁的內容 */}
        <h1>歡迎來到首頁</h1>
      </main>
    </div>
  );
}
