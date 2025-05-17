import React from 'react';
import '../index.css'; // Import the global CSS

function Header() {
  return (
    <header>
      <div className="container header-content">
        <a href="/" className="logo">
          <i className="fas fa-trophy"></i>
          クラスマッチ 2025
        </a>
        <nav>
          <ul>
            <li><a href="/">ホーム</a></li>
            <li><a href="/results">競技別結果</a></li>
            <li><a href="/schedule">日程</a></li>
            <li><a href="/ranking">ランキング</a></li>
            <li><a href="/login">ログイン</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
