import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AdminPage } from './admin/AdminPage';
import './App.css';
import { CoreUi } from './core/CoreUi';
import { EditPostForm } from './features/post/EditPostForm';
import { PostsList } from './features/post/PostsList';
import { SinglePostPage } from './features/post/SinglePostPage';
import { EditSesionForm } from './features/sesiones/EditSesionForm';
import { SesionesList } from './features/sesiones/SesionesList';
import { SingleSesionPage } from './features/sesiones/SingleSesionPage';
import Analisante from './pages/Analisantes/Analisante';
import { FamiliogramaPage } from './pages/Analisantes/components/Familiograma/FamiliogramaPage';
import { Sociograma } from './pages/Analisantes/components/sociograma/Sociograma';
import { Familiograma } from './pages/Analisantes/familiograma/Familiograma';
import { FichaDelCaso } from './pages/Analisantes/ficha/FichaDelCaso';
import { Orientacion } from './pages/Analisantes/orientacionDeLaCura/Orientacion';
import { OtraConsulta } from './pages/Analisantes/orientacionDeLaCura/OtraConsulta';
import OtrasConsultasPage from './pages/Analisantes/orientacionDeLaCura/OtrasConsultasPage';
import { Blog } from './pages/Analistas/pages/blog/Blog';
import { Escuela } from './pages/Analistas/pages/escuela/Escuela';
import { Media } from './pages/Analistas/pages/media/Media';
import { Proyects } from './pages/Analistas/pages/proyects/Proyects';

const Analistas_nav = React.lazy(() => import('./components/Nav_Analistas'));
const Analisantes_nav = React.lazy(() => import('./components/Nav_Analisantes'))

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<CoreUi/>}/>
        <Route 
          path='analistas/*' element={
            <React.Suspense fallback={<> ... </>} >
              <Analistas_nav/>
            </React.Suspense>
          }>

          <Route index element={<Proyects/>} />
          <Route path='proyects' element={<Proyects/>} />
          <Route path='escuela' element={<Escuela/>} />
          <Route path='blog' element={<Blog/>}>
            <Route index element={<PostsList/>}/>
            <Route path='post/:postId' element={<SinglePostPage/>} />
            <Route path='editPost/:postId' element={<EditPostForm/>} />
          </Route>
          
          <Route path='videos' element={<Media/>} />
          <Route path='podcasts' element={<Media/>} />

        </Route>

        <Route path='analisantes/*' element={
          <React.Suspense fallback={<> ... </>}>
            <Analisantes_nav />              
          </React.Suspense>
          }>

          <Route index element={<Analisante/>} />
          <Route path='ficha' element={<Analisante/>}/>
          <Route path='fichaDelCaso' element={<FichaDelCaso />}>
             <Route path=':sesionId' element={<SingleSesionPage/>} />                         
          </Route> 
          <Route path='sesiones' element={<SesionesList/>} />
          <Route path=': sesionId' element={<EditSesionForm/>} />                       
          <Route path='familiograma' element={<FamiliogramaPage/>} />
          <Route path='sociograma' element={<Sociograma/> } />
          <Route path='orientacion' element={<Orientacion/> } />
          <Route path='otrasConsultas' element={<OtrasConsultasPage/>}>
            <Route path=':consultaId' element={<OtraConsulta/>}/>
          </Route>
          
          <Route path='admin' element={<AdminPage/>} />
        </Route>

      </Routes> 

    </div>
  );
}

export default App;
