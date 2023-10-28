import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Loader from './components/Loader/Loader';

const MainPage = lazy(() => import("./pages/MainPage"));
const SelectPage = lazy(() => import("./pages/SelectCharacterPage"));
const VersusPage = lazy(() => import("./pages/VersusCodesPage"));

function App() {
  return (
    <>
    <Suspense fallback={<Loader />}>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<MainPage/>}></Route>
      <Route path='/select' element={<SelectPage/>}></Route>
      <Route path='/versus' element={<VersusPage/>}></Route>
      </Route>
    </Routes>
    </Suspense>
    </>
  );
}

export default App;
