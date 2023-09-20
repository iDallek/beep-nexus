<template>
  <div class="header">
    <div id="beepnexusLogo">
      BEEP<e>NEXUS</e>
    </div>
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
  }

  #beepnexusLogo {
    font-family: 'Jockey One', sans-serif;
    font-size: 24px;
    cursor: pointer;
  }

  #beepnexusLogo e {
    color: hsla(160, 100%, 37%, 1);
  }

</style>