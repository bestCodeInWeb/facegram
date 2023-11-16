import React, { useState } from 'react';
import { setAuthUserData } from '../../redux/authReducer';
import { Navigate } from 'react-router-dom';
import './Login.scss';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCaptchaUrl, initCurrentUser, login } from '../../api/auth';

export const Login = () => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(state => state.auth.isAuth);
  const [errors, setErrors] = useState<string[]>([]);
  const [captchaUrl, setCaptchUrl] = useState<string | null>(null);
  const [captchaValue, setCaptchaValue] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const loginHandler:React.ReactEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    
    let newValues = {
      email,
      password,
      rememberMe,
      captcha: captchaValue
    }
    
    login(newValues)
      .then(response => {
        if (response.data.resultCode === 0) {
          initUser();
        } else {
          if (response.data.resultCode === 10) {
            getCaptcha();
          }

          setErrors(response.data.messages);
        }
      })
  };

  const initUser = () => {
    initCurrentUser()
      .then(response => {
        if (response.data.resultCode === 0) {
          let { id, email, login } = response.data.data;

          if (id && email && login) {
            dispatch(setAuthUserData(id, email, login));
          }
        }
      })
  }

  const getCaptcha = () => {
    getCaptchaUrl().then(response => {
      setCaptchUrl(response.data.url);
    })
  }

  if (isAuth) {
    return <Navigate replace to='/news' />
  }

  return (
    <form className="login-form" onSubmit={loginHandler}>
      <label htmlFor="12">Email: </label>
      <input
        type="email"
        id="12"
        placeholder="Email..."
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <label htmlFor="13">Password: </label>
      <input
        type="password"
        id="13"
        placeholder="Password..."
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <label htmlFor="14">Remember me: </label>
      <input
        type="checkbox"
        id="14"
        checked={rememberMe}
        onChange={() => setRememberMe(!rememberMe)}
      />

      <div className="wrong_login">{errors.join(' ')}</div>

      {captchaUrl && (
        <>
          <img
            src={captchaUrl}
            className="text-center mb10"
            alt=''
          />

          <input
            type='text'
            value={captchaValue}
            onChange={(e) => setCaptchaValue(e.target.value)}
            placeholder='Enter captcha...'
          />
        </>
      )}

      <button type="submit" className="btn btn-block btn-primary">
        Log in
      </button>
    </form>
  );
};
