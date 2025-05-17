import React from 'react';
import '../index.css'; // Import the global CSS

function SchedulePage() {
  return (
    <main>
      <div className="container">
        <section className="section">
          <h2 className="section-title">競技日程</h2>
          <div className="schedule-table">
            <table>
              <thead>
                <tr>
                  <th>日付</th>
                  <th>時間</th>
                  <th>競技</th>
                  <th>対戦カード</th>
                  <th>場所</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5月15日</td>
                  <td>9:00 - 10:30</td>
                  <td>バスケットボール</td>
                  <td>2年3組 vs 1年2組</td>
                  <td>体育館</td>
                </tr>
                <tr>
                  <td>5月15日</td>
                  <td>10:30 - 12:00</td>
                  <td>ソフトボール</td>
                  <td>3年1組 vs 3年4組</td>
                  <td>グラウンド</td>
                </tr>
                <tr>
                  <td>5月16日</td>
                  <td>13:00 - 14:30</td>
                  <td>サッカー</td>
                  <td>2年4組 vs 3年1組</td>
                  <td>グラウンド</td>
                </tr>
                <tr>
                  <td>5月16日</td>
                  <td>14:30 - 16:00</td>
                  <td>バレーボール</td>
                  <td>3年2組 vs 2年3組</td>
                  <td>体育館</td>
                </tr>
                <tr>
                  <td>5月17日</td>
                  <td>9:00 - 10:30</td>
                  <td>卓球</td>
                  <td>2年1組 vs 3年3組</td>
                  <td>体育館</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}

export default SchedulePage;
