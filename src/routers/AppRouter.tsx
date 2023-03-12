import { Route, Routes } from 'react-router-dom';
import HomePage from '../modules/home/pages/HomePage';
import SelectUsername from '../modules/user/pages/SelectUsername';
import NotFound from '../pages/NotFound';


export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/user/select" element={<SelectUsername />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}