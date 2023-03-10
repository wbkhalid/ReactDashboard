import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import TopBar from './scenes/global/TopBar';
import ProSideBar from './scenes/global/ProSideBar';
import Dashboard from './scenes/dashboard';
import { Route, Routes } from 'react-router-dom';
import Team from './scenes/team';
import Contact from './scenes/contact';
import Invoices from './scenes/invoices';
import Form from './scenes/form';
import Calendar from './scenes/calendar';
import FAQ from './scenes/faq';
import Bar from './scenes/bar';
import Pie from './scenes/pie';
import Line from './scenes/line';
import GeoGraphy from './scenes/geography';

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
              <Route path="/contact" element={<Contact />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<GeoGraphy />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
