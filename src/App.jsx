import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/Layout/MainLayout';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
