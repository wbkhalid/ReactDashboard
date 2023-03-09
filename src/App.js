import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import TopBar from './scenes/global/TopBar';
import ProSideBar from './scenes/global/ProSideBar';
import Dashboard from './scenes/dashboard';
import { Route, Routes } from 'react-router-dom';
import Team from './scenes/team';
import Contact from './scenes/contact';
import Invoices from './scenes/invoices';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <ProSideBar />
          <main className="content">
            <TopBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="/invoices" element={<Invoices/>} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
