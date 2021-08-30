import { MovieCard } from './components/MovieCard';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './hooks/useMovies';

import { api } from './services/api';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';



export function App() {
    return (
      <MoviesProvider>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <SideBar />
          <Content />          
        </div>
      </MoviesProvider>
  )
}