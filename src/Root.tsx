import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App';
import { Dialog } from './pages/Dialog/Dialog';
import { Friends } from './pages/Friends/Friends';
import { Game } from './pages/Game/Game';
import { Games } from './pages/Games/Games';
import { Login } from './pages/Login/Login';
import { Messages } from './pages/Messages/Messages';
import { Music } from './pages/Music/Music';
import { News } from './pages/News/News';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { People } from './pages/People/People';
import { Profile } from './pages/Profile/Profile';
import { Registration } from './pages/Registration/Registration';
import { Services } from './pages/Services/Services';
import { Settings } from './pages/Settings/Settings';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<News />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Registration />} />
        <Route path="news" element={<News />} />
        <Route path="people" element={<People />} />
        <Route path="friends" element={<Friends />} />
        <Route path="music" element={<Music />} />
        <Route path="settings" element={<Settings />} />
        <Route path="services" element={<Services />} />
        <Route path="profile/:userId" element={<Profile />} />

        <Route path="messages">
          <Route index element={<Messages />} />
          <Route path=":userId" element={<Dialog />} />
        </Route>

        <Route path="games">
          <Route index element={<Games />} />
          <Route path=":gameId" element={<Game />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);
