import React from 'react';
import { supabase } from '../supabaseClient';
import '../index.css';

function LoginPage() {
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google'
      });
      if (error) {
        console.error("Google sign-in error:", error);
      }
    } catch (error) {
      console.error("Unexpected error during Google sign-in:", error);
    }
  };

  return (
    <main>
      <div className="container">
        <section className="section">
          <h2 className="section-title">ログイン</h2>
          <div className="login-form">
            <button className="btn" onClick={handleGoogleSignIn}>
              Sign in with Google
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default LoginPage;
