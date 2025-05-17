import React from 'react';
import '../index.css'; // Import the global CSS

function HomePage() {
  return (
    <main>
      <div className="container">
        {/* ホームページコンテンツ */}
        <section className="hero">
          <h1>クラスマッチ 2025</h1>
          <p>みんなで競い合い、絆を深める春の大会。クラスの栄光をかけた熱い戦いが今始まる！</p>
          <a href="/results" className="btn">最新結果を見る</a>
        </section>

        <section className="section">
          <h2 className="section-title">お知らせ</h2>
          <div className="card-grid">
            <div className="card">
              <div className="card-image" style={{ backgroundImage: "url('/api/placeholder/400/200')" }}></div>
              <div className="card-content">
                <h3 className="card-title">大会2日目が終了しました</h3>
                <p className="card-text">バスケットボールとバレーボールの予選リーグが白熱した展開に。明日は準決勝が行われます。</p>
                <a href="#" className="btn">詳細を見る</a>
              </div>
            </div>
            <div className="card">
              <div className="card-image" style={{ backgroundImage: "url('/api/placeholder/400/200')" }}></div>
              <div className="card-content">
                <h3 className="card-title">卓球トーナメント開始</h3>
                <p className="card-text">明日から卓球トーナメントが開始されます。各クラス代表選手は時間厳守でお集まりください。</p>
                <a href="#" className="btn">詳細を見る</a>
              </div>
            </div>
            <div className="card">
              <div className="card-image" style={{ backgroundImage: "url('/api/placeholder/400/200')" }}></div>
              <div className="card-content">
                <h3 className="card-title">現在のポイントランキング</h3>
                <p className="card-text">2年3組が首位浮上！各競技の結果を反映した最新ランキングをチェックしよう。</p>
                <a href="/ranking" className="btn">ランキングへ</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <h2 className="section-title">進行中の競技</h2>
          <div className="current-matches">
            <i className="fas fa-circle-play"></i> 現在進行中の競技
          </div>
          <div className="match-result">
            <div className="match-header">
              <h3>バスケットボール 準々決勝</h3>
              <span className="match-date">5月15日 13:00〜</span>
            </div>
            <div className="match-details">
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">2年3組</div>
                  <div className="team-score winner">65</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">1年2組</div>
                  <div className="team-score">58</div>
                </div>
              </div>
            </div>
          </div>
          <div className="match-result">
            <div className="match-header">
              <h3>ソフトボール 予選リーグ</h3>
              <span className="match-date">5月15日 14:30〜</span>
            </div>
            <div className="match-details">
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">3年1組</div>
                  <div className="team-score">3</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">3年4組</div>
                  <div className="team-score winner">5</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default HomePage;
