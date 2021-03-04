import React from 'react';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import StudentListPage from './pages/StudentListPage/StudentListPage';
import StudentActionPage from './pages/StudentActionPage/StudentActionPage';

const routes = [

    {
        path: '/',
        exact: true,
        main: () => <StudentListPage />
    },
    {
        path: '/student/add',
        exact: false,
        main: ({history}) => <StudentActionPage history={history}/>
    },
    {
        path: '/student/:id/edit',
        exact: false,
        main: ({match, history}) => <StudentActionPage match={match} history={history}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage />
    }
];

export default routes;
