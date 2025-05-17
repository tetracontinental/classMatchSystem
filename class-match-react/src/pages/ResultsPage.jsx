import React from 'react';
import '../index.css'; // Import the global CSS

function ResultsPage() {
  return (
    <main>
      <div className="container">
        <section className="section">
          <h2 className="section-title">競技別結果</h2>
          <div className="sports-tabs">
            <ul className="tab-list">
              <li><a href="#basketball">バスケットボール</a></li>
              <li><a href="#softball">ソフトボール</a></li>
              <li><a href="#soccer">サッカー</a></li>
              <li><a href="#volleyball">バレーボール</a></li>
              <li><a href="#tabletennis">卓球</a></li>
            </ul>
          </div>

          <div id="basketball" className="sports-content">
            <h3>バスケットボール</h3>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 15:00〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">2年3組</div>
                  <div className="team-score winner">72</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">3年2組</div>
                  <div className="team-score">68</div>
                </div>
              </div>
            </div>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 16:30〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">1年1組</div>
                  <div className="team-score">60</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">2年1組</div>
                  <div className="team-score winner">65</div>
                </div>
              </div>
            </div>
          </div>

          <div id="softball" className="sports-content">
            <h3>ソフトボール</h3>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 15:00〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">3年3組</div>
                  <div className="team-score winner">8</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">2年2組</div>
                  <div className="team-score">6</div>
                </div>
              </div>
            </div>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 16:30〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">1年4組</div>
                  <div className="team-score">4</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">3年4組</div>
                  <div className="team-score winner">7</div>
                </div>
              </div>
            </div>
          </div>

          <div id="soccer" className="sports-content">
            <h3>サッカー</h3>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 15:00〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">2年4組</div>
                  <div className="team-score winner">3</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">3年1組</div>
                  <div className="team-score">1</div>
                </div>
              </div>
            </div>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 16:30〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">1年3組</div>
                  <div className="team-score">0</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">2年1組</div>
                  <div className="team-score winner">2</div>
                </div>
              </div>
            </div>
          </div>

          <div id="volleyball" className="sports-content">
            <h3>バレーボール</h3>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 15:00〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">3年2組</div>
                  <div className="team-score winner">2</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">2年3組</div>
                  <div className="team-score">1</div>
                </div>
              </div>
            </div>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 16:30〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">1年2組</div>
                  <div className="team-score">0</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">3年4組</div>
                  <div className="team-score winner">2</div>
                </div>
              </div>
            </div>
          </div>

          <div id="tabletennis" className="sports-content">
            <h3>卓球</h3>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 15:00〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">2年1組</div>
                  <div className="team-score winner">3</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">3年3組</div>
                  <div className="team-score">1</div>
                </div>
              </div>
            </div>
            <div className="match-result">
              <div className="match-header">
                <h4>準決勝</h4>
                <span className="match-date">5月16日 16:30〜</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <div className="team-name">1年4組</div>
                  <div className="team-score">0</div>
                </div>
                <div className="match-divider">
                  <span className="match-vs">VS</span>
                </div>
                <div className="team">
                  <div className="team-name">2年2組</div>
                  <div className="team-score winner">3</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ResultsPage;
