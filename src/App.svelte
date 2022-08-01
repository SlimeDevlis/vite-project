<script>
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
  import Router from 'svelte-spa-router';
  import  routes  from './router/index.js';
  import {push} from 'svelte-spa-router';
  function toAbout() {
    push('/about');
    console.log('成功实现')
  }
  function toHome() {
    push('/');
    console.log('成功实现')
  }
</script>

<main>
  <Router {routes} />
  <div on:click={toAbout}>
    点击我跳转到关于页面
  </div>
  <div on:click={toHome}>
    点击我跳转到主页页面
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
