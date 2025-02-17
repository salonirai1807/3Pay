import { Route, Routes } from 'react-router-dom'
import './App.scss';
import Layout from './components/Layout'
import Home from './components/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="profile" element={<Profile />} />
          <Route path="message" element={<Message />} />
          <Route path="mail" element={<Mail />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;