<template>
  <div class="home">
    <header class="text-white header-pattern">
      <div class="container text-center">
        <h1>Internet eXchange 42</h1>
        <p class="lead pb-5">Affordable & Efficient Interconnections</p>
        <b-button
          variant="outline-light"
          size="lg"
          href="https://forms.gle/T6FzLAWGvp9suu4b6"
          >Join Now</b-button
        >
        <b-button variant="light" size="lg" v-scroll-to="'#about'"
          >Learn More</b-button
        >
      </div>
    </header>

    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>About IX42</h2>
            <p class="lead">
              IX42 (Internet eXchange 42) provides affordable and efficient
              interconnection services and operates several carrier and data
              center-neutral Internet Exchanges.
            </p>
            <ul>
              <li>Support both physical and remote peering.</li>
              <li>Advanced RS with backup support.</li>
              <li>
                Support cross connect with different distributed networks.
              </li>
              <li>Multiple locations in Asia, Europe and North America.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="container">
        <b-row>
          <b-col cols="12" md="6" lg="3" align="center">
            <h1 class="mb-3">3</h1>
            <p>Locations</p>
          </b-col>
          <b-col cols="12" md="6" lg="3" align="center">
            <h1 class="mb-3">Free</h1>
            <p>Peering Fee</p>
          </b-col>
          <b-col cols="12" md="6" lg="3" align="center">
            <h1 class="mb-3">10G+</h1>
            <p>Capacity</p>
          </b-col>
          <b-col cols="12" md="6" lg="3" align="center">
            <h1 class="mb-3">24x7</h1>
            <p>Tech Support</p>
          </b-col>
        </b-row>
      </div>
    </section>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Our Sponsors</h2>
            <div class="row h-100 align-items-center mt-2">
              <div class="col-lg-3 col-md-4 col-sm-6">
                <a href="https://strexp.net">
                  <img
                    src="@/assets/strexp.png"
                    class="img-fluid"
                    alt="Strategic Explorations"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Contact us</h2>
            <p class="lead">
              Internet eXchange 42 is sponsored and operated by
              <a href="https://strexp.net">Strategic Explorations</a>.
            </p>
            <div class="col-md-4 mb-5">
              <address>
                <abbr title="Phone">P:</abbr>
                +1 (318) 523-1435
                <br />
                <abbr title="Email">E:</abbr>
                <a href="mailto:info@ix42.org">info@ix42.org</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
header {
  padding: 156px 0 100px;
}

section {
  padding: 100px 0;
}

header button {
  margin-inline-start: 15px;
  margin-inline-end: 15px;
}

.header-pattern {
  --c: rgba(255, 255, 255, 0.2);
  --t: transparent;
  background-image: repeating-linear-gradient(
      45deg,
      var(--t) 0,
      var(--t) 32px,
      var(--c) 32px,
      var(--c) 44px,
      var(--t) 44px,
      var(--t) 56px,
      var(--c) 56px,
      var(--c) 68px,
      var(--t) 0
    ),
    repeating-linear-gradient(
      -45deg,
      var(--t) 0,
      var(--t) 32px,
      var(--c) 32px,
      var(--c) 44px,
      var(--t) 44px,
      var(--t) 56px,
      var(--c) 56px,
      var(--c) 68px,
      var(--t) 0
    ),
    linear-gradient(to bottom left, #095353, #2e0e52);
}
</style>
