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
                <h3>Las Vegas</h3>
                <b-img-lazy
                  fluid-grow
                  src="https://graph.ix42.org/switches/003/switch-aggregate-00003-bits-day.png"
                />
              </div>
              <div class="col-sm">
                <h3>Las Vegas DN42</h3>
                <b-img-lazy
                  fluid-grow
                  src="https://graph.ix42.org/switches/004/switch-aggregate-00004-bits-day.png"
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
            <p class="lead">
              You can inquiry our tech support.
            </p>
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
