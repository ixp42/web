<template>
  <div class="stats">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto">
            <h2>IX42 Stats</h2>
            <br />
            <div class="row">
              <div class="col-sm">
                <h3>Las Vegas Main Switch</h3>
                <b-img-lazy
                  fluid-grow
                  src="https://graph.ix42.org/ixp/ixp001-bits-day.png"
                />
              </div>
              <div class="col-sm">
                <h3>Las Vegas DN42 Switch</h3>
                <b-img-lazy
                  fluid-grow
                  src="https://graph.ix42.org/ixp/ixp002-bits-day.png"
                />
              </div>
            </div>
            <div class="row">
              <div class="col-sm">
                <h3>Singapore Main Switch</h3>
                <b-img-lazy
                  fluid-grow
                  src="https://graph.ix42.org/ixp/ixp003-bits-day.png"
                />
              </div>
              <div class="col-sm">
                <h3>Singapore DN42 Switch</h3>
                <b-img-lazy
                  fluid-grow
                  src="https://graph.ix42.org/ixp/ixp006-bits-day.png"
                />
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
            <h2>Any Questions ?</h2>
            <p class="lead">You can inquiry our tech support.</p>
            <div class="col-md-4 mb-5">
              <address>
                <abbr title="Email">E:</abbr>
                <a href="mailto:tech@ix42.org">tech@ix42.org</a>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
section {
  padding: 60px 0;
}
</style>
