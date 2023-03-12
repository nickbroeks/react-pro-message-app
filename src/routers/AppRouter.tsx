import { Route, Routes } from 'react-router-dom';
import NotFound from '../pages/NotFound';


export default function AppRouter() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  )
}