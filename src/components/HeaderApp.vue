<template>
  <div class="header">
    <div id="beepnexusLogo">
      BEEP<e>NEXUS</e>
    </div>

    <nav>
      <ul class="menu">
        <li
          v-on:click="isShowDrop1 = !isShowDrop1"
          ref="dropdown1"
          :class="isShowDrop1 ? 'active' : 'deactivate'"
        >
          <a href="#">Atividades <div class="triangle-down"/></a> 
          <ul v-show="isShowDrop1">
            <li><a href="#">Zeramento</a></li>
          </ul>
        </li>
        <li
          v-on:click="isShowDrop2 = !isShowDrop2"
          ref="dropdown2"
          :class="isShowDrop2 ? 'active' : 'deactivate'"
        >
          <a href="#">Relatórios <div class="triangle-down"/></a>
          <ul v-show="isShowDrop2">
            <li><a href="#">Perfomance Auditorias</a></li>
            <li><a href="#">Lorem Ipsum</a></li>
          </ul>
        </li>
        <li><a href="#">Ajuda</a></li>
      </ul>
    </nav>

    <div>
      Icone
    </div>
  </div>
</template>

<script>
    export default {
      data: () => ({
      isShowDrop1: false,
      isShowDrop2: false
      }),
      created () {
        window.addEventListener('click', this.closeDropdown)
      },
      methods: {
        closeDropdown (e) {
          if (!this.$refs.dropdown1.contains(e.target)) {
            this.isShowDrop1 = false
          }
          if (!this.$refs.dropdown2.contains(e.target)) {
            this.isShowDrop2 = false
          }
        }
      },
      beforeUnmont () {
        window.removeEventListener('click', this.closeDropdown)
      }
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

  .header div:last-child {
    margin-left: auto;
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
    transition: 0.2s;
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

  .menu .active > a {
    transition: 0.2s;
    text-shadow: .20px 0px .1px,
                -.20px 0px .1px;
  }
  .menu .active a:hover {
    transition: 0.2s;
    text-shadow: .20px 0px .1px,
                -.20px 0px .1px;
  }

  .menu .active .triangle-down  {
    border-top: 5px solid rgb(255, 255, 255);
    transform: rotate(180deg);
    transition: 0.2s;
  }

  .menu li ul {
    position: absolute;
    top: 70px;
    padding: 5px 15px;
    left: -15px;
    border-radius: 25px;
    background-color: var(--color-background);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .menu li:active ul, .menu li.over ul{display:block;}

  #beepnexusLogo {
    font-family: 'Jockey One', sans-serif;
    font-size: 24px;
    cursor: pointer;
  }

  #beepnexusLogo e {
    color: hsla(160, 100%, 37%, 1);
  }

</style>