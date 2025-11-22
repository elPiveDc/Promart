import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProjectIntentPage from './pages/ProjectIntentPage';
import ProjectConfigPage from './pages/ProjectConfigPage';
import BackendTestPage from './pages/BackendTestPages';

const App: React.FC = () => {
  return (
    <Router>
      <nav style={{ padding: '15px', backgroundColor: '#333', color: 'white' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.5em', fontWeight: 'bold' }}>
          PROMART - Asistente
        </Link>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          {/* RUTA PRINCIPAL: El formulario de entrada de intención */}
          <Route path="/" element={<ProjectIntentPage />} />

          {/* RUTA DE CONFIGURACIÓN/RESULTADOS: El módulo de inteligencia */}
          <Route path="/project/:slug" element={<ProjectConfigPage />} />

          {<Route path="/test-backend" element={<BackendTestPage />} />
}
          {/* <Route path="/results" element={<div>Página de Resultados</div>} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;