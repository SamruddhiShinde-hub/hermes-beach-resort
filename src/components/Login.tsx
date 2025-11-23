// src/components/Login.tsx (or .jsx)
import React, { useState } from 'react';
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth, googleProvider } from '../config/firebase';

const Login: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      setUser(result.user);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      let result;
      if (isRegisterMode) {
        result = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        result = await signInWithEmailAndPassword(auth, email, password);
      }
      setUser(result.user);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div style={{ maxWidth: 400, margin: '40px auto', padding: 20, border: '1px solid #ddd', borderRadius: 8 }}>
      <h2>{isRegisterMode ? 'Create an Account' : 'Login'}</h2>

      {user ? (
        <>
          <p>
            Logged in as: <strong>{user.email || user.displayName}</strong>
          </p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <form onSubmit={handleEmailAuth}>
            <div>
              <label>Email</label><br />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div style={{ marginTop: 10 }}>
              <label>Password</label><br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button style={{ marginTop: 15 }} type="submit">
              {isRegisterMode ? 'Sign Up' : 'Login'}
            </button>
          </form>

          <button style={{ marginTop: 15 }} onClick={handleGoogleLogin}>
            Continue with Google
          </button>

          <p style={{ marginTop: 15 }}>
            {isRegisterMode ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button
              type="button"
              onClick={() => setIsRegisterMode(!isRegisterMode)}
              style={{
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                color: 'blue',
                cursor: 'pointer',
              }}
            >
              {isRegisterMode ? 'Login' : 'Register'}
            </button>
          </p>

          {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
        </>
      )}
    </div>
  );
};

export default Login;
