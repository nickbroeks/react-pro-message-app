import { Route, Routes } from 'react-router-dom';
import HomePage from '../modules/home/pages/HomePage';
import NotFound from '../pages/NotFound';


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}