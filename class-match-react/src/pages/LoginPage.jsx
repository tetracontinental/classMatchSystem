import React from 'react';
import '../index.css'; // Import the global CSS

function LoginPage() {
  return (
    <main>
      <div className="container">
        <section className="section">
          <h2 className="section-title">ログイン</h2>
          <div className="login-form">
            <form>
              <div className="form-group">
                <label htmlFor="username">ユーザー名:</label>
                <input type="text" id="username" name="username" />
              </div>
              <div className="form-group">
                <label htmlFor="password">パスワード:</label>
                <input type="password" id="password" name="password" />
              </div>
              <button type="submit" className="btn">ログイン</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
