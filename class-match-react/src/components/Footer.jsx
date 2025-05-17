import React from 'react';
import '../index.css'; // Import the global CSS

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>クラスマッチ 2025</h3>
            <p>5月15日〜5月20日に開催される校内スポーツ大会です。バスケットボール、ソフトボール、サッカー、バレーボール、卓球の5競技で熱い戦いが繰り広げられます。</p>
          </div>
          <div className="footer-section">
            <h3>リンク</h3>
            <ul>
              <li><a href="/">ホーム</a></li>
              <li><a href="/results">競技別結果</a></li>
              <li><a href="/schedule">日程</a></li>
              <li><a href="/ranking">ランキング</a></li>
              <li><a href="/login">ログイン</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>競技</h3>
            <ul>
              <li><a href="/results#basketball">バスケットボール</a></li>
              <li><a href="/results#softball">ソフトボール</a></li>
              <li><a href="/results#soccer">サッカー</a></li>
              <li><a href="/results#volleyball">バレーボール</a></li>
              <li><a href="/results#tabletennis">卓球</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; 2025 クラスマッチ運営委員会
        </div>
      </div>
    </footer>
  );
}

export default Footer;
