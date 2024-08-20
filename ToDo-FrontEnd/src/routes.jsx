import { AuthPage } from './Pages/AuthPage/AuthPage'
import { TaskList } from './Components/Task/TaskList'
import { ContentRole } from './Pages/AuthPage/ContentRole'
import { HomeAdmin } from './Pages/Admin/HomeAdmin'
import { HomeClient } from './Pages/Client/HomeClient'

export const routes = [
    {path:'/', element: <AuthPage/>},
    {
        path: '/home/*', element: <ContentRole/>
    },
    {
        path: '/home/td/Admin', element: <HomeAdmin/>
    },
    {
        path: '/home/td/Client', element: <HomeClient/>
    },
    {path:'/getTask', element: <TaskList/>}
]
