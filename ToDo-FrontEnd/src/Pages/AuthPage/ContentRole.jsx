import { HomeClient } from "../Client/HomeClient"
import { HomeAdmin } from "../Admin/HomeAdmin"
import { Route, Routes } from "react-router-dom"

export const ContentRole = () => {

  const user = localStorage.getItem('user')
  //console.log(user);
  const role = JSON.parse(user).role
  //console.log(role);

  return (
    <Routes>
      {role === 'ADMIN' ? (
        <Route path="td" element={<HomeAdmin/>} />
      ) : role === 'CLIENT' ? (
        <Route path="td" element={<HomeClient/>} />
      ) : (
        <Route path="*" element={<NotFound/>} />
      )}  
    </Routes>
  )
}
