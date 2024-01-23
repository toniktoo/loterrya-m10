import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, ResultPage, NotFoundPage } from './pages';
import { RoutesConfig } from './configs'
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const ClientId = 'ClientId-loterry-m10'

function App() {
  const [listWinners, setListWinners] = useState([]);
  const [clientId, setClientId] = useState(null);
  const uniqueId = String(Math.random());

  // useEffect(() => {
  //   let id;
  //   id = window.localStorage.getItem(ClientId);
  //   if (!id) {
  //     id = window.localStorage.setItem(ClientId, uniqueId);
  //   }
  //   setClientId(id)
  // }, [clientId])


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage listWinners={listWinners} setListWinners={setListWinners} />} />
          <Route path={RoutesConfig.RESULT} element={<ResultPage />} />
          <Route path={RoutesConfig.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
