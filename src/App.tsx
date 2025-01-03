import './App.css';
import { AppProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import '@shopify/polaris/build/esm/styles.css';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;
