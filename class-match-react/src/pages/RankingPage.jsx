import React from 'react';
import '../index.css'; // Import the global CSS

function RankingPage() {
  return (
    <main>
      <div className="container">
        <section className="section">
          <h2 className="section-title">ランキング</h2>
          <div className="ranking-table">
            <table>
              <thead>
                <tr>
                  <th>順位</th>
                  <th>クラス</th>
                  <th>ポイント</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>2年3組</td>
                  <td>120</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>3年1組</td>
                  <td>110</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>1年2組</td>
                  <td>100</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>2年1組</td>
                  <td>90</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>3年4組</td>
                  <td>80</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

export default RankingPage;
