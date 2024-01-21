import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, ResultPage, NotFoundPage } from './pages';
import { RoutesConfig } from './configs'

function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path={RoutesConfig.RESULT} element={<ResultPage />} />
          <Route path={RoutesConfig.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
