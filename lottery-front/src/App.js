import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, ResultPage, NotFoundPage } from './pages';
import { RoutesConfig } from './configs'
import { useState } from 'react';

function App() {
  const [listWinners, setListWinners] = useState(null);


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage listWinners={listWinners} setListWinners={setListWinners} />} />
          <Route path={RoutesConfig.RESULT} element={<ResultPage listWinners={listWinners} />} />
          <Route path={RoutesConfig.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
