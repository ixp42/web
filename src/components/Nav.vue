<template>
  <b-navbar variant="dark" type="dark" sticky toggleable="md">
    <div class="container">
      <router-link class="navbar-brand" to="/"
        >Internet eXchange 42</router-link
      >
      <b-navbar-toggle target="navbarResponsive">
        <span class="navbar-toggler-icon"></span>
      </b-navbar-toggle>
      <b-collapse id="navbarResponsive" class="navbar-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="https://forms.gle/T6FzLAWGvp9suu4b6"
            >Connect
          </b-nav-item>
          <b-nav-item to="/members">Members </b-nav-item>
          <b-nav-item-dropdown text="Services" right>
            <b-dropdown-item to="/policy">Policy</b-dropdown-item>
            <b-dropdown-item to="/stats">Stats</b-dropdown-item>
            <b-dropdown-item to="/prices">Prices</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="https://portal.ix42.org">Portal</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {};
</script>

<style></style>
