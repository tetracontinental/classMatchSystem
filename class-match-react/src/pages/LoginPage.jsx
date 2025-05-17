import React from 'react';
import '../index.css'; // Import the global CSS
import { supabase } from '../supabaseClient';

function LoginPage() {
  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

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
            <button onClick={handleGoogleLogin} style={{marginTop: '2rem', padding: '1rem', fontSize: '1.2rem'}}>Googleでログイン</button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
