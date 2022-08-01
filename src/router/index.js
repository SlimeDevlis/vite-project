import Home from '../views/Home.svelte';
import About from '../views/About.svelte';
// import Detail from './views/Detail.svelte';

const routes = {
  '/': Home,
  '/home': Home,
  '/about': About,
//   '/detail/:type/:id': Detail,
}

export default routes