<template>
  <div class="header">
    <div id="beepnexusLogo">
      BEEP<e>NEXUS</e>
    </div>

    <nav>
      <ul class="menu">
        <li><a href="#">Atividades <div class="triangle-down"/></a> 
          <ul>
            <li><a href="#">Zeramento</a></li>
          </ul>
        </li>
        <li><a href="#">Relatórios <div class="triangle-down"/></a>
          <ul>
            <li><a href="#">Perfomance Auditorias</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
            <li><a href="#">Dolor Sit Amet</a></li>
          </ul>
        </li>
        <li><a href="#">Ajuda</a></li>
      </ul>
    </nav>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Jockey+One&display=swap');

  .header {
    display: flex;
    align-items: center;
    height: 100%;
    margin: 0 50px;
  }

  .triangle-down {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid var(--color-text);
    font-size: 0;
    line-height: 0;
    position: relative;
    display: inline-block;
    top: -2px;
    left: 2px;
  }

  .menu {
    list-style: none;
    margin-left: 50px;
    transition: 0.4s;
  }

  .menu li {
    position: relative;
    float: left;
    list-style:none;
    margin: 0 20px;
    display: block;
    /* padding: 12px 0; */
  }

  .menu li a {
    color: var(--color-text);
    text-decoration: none;
    padding: 20px 10px;
    display: block;
    /* background-color: red; */

  }

  .menu li ul li {
    display: inline-block;
    width: 100%;
    white-space:nowrap;
    margin: 0;
  }

  .menu li a:hover {
    color: hsla(160, 100%, 37%, 1);
  }

  .menu li a:hover .triangle-down  {
    border-top: 5px solid hsla(160, 100%, 37%, 1);
    transform: rotate(180deg);
    transition: 0.2s;
  }

  .menu li ul {
    position: absolute;
    top: 70px;
    left: 0;
    display: none;
    padding: 0;
    background-color: var(--color-background);
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }

  .menu li:hover ul, .menu li.over ul{display:block;}

  #beepnexusLogo {
    font-family: 'Jockey One', sans-serif;
    font-size: 24px;
    cursor: pointer;
  }

  #beepnexusLogo e {
    color: hsla(160, 100%, 37%, 1);
  }

</style>