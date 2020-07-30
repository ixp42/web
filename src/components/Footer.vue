<template>
  <!-- Site footer -->
  <footer class="site-footer bg-dark">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-6">
          <h6>Internet eXchange 42</h6>
          <p>
            Internet eXchange 42 is providing interconnections between various
            networks and autonomous systems.
          </p>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Services</h6>
          <ul class="footer-links">
            <li>
              <router-link to="/policy">Policy</router-link>
            </li>
            <li>
              <router-link to="/rs-policy">RS Policy</router-link>
            </li>
            <li>
              <router-link to="/stats">Stats</router-link>
            </li>
            <li>
              <router-link to="/members">Members</router-link>
            </li>
            <li>
              <router-link to="/pricing">Pricing</router-link>
            </li>
          </ul>
        </div>

        <div class="col-xs-6 col-md-3">
          <h6>Info</h6>
          <p class="text-justify">
            Email:
            <a href="mailto:info@ix42.org">info@ix42.org</a>
            <br />Telegram:
            <a href="https://t.me/ixp42">@ixp42</a>
            <br />PeeringDB:
            <a href="https://www.peeringdb.com/ix/3226">3226</a>
            <br />IX-F IXP ID:
            <a href="https://ixpdb.euro-ix.net/en/ixpdb/ixp/878/">878</a>
          </p>
        </div>
      </div>
      <hr />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-sm-6 col-xs-12">
          <p class="copyright-text">
            Copyright &copy; 2020
            <a href="https://ix42.org">Internet eXchange 42</a>. All Rights
            Reserved.
          </p>
        </div>

        <div class="col-md-4 col-sm-6 col-xs-12"></div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.site-footer {
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #737373;
}
.site-footer hr {
  border-top-color: #bbb;
  opacity: 0.5;
}
.site-footer hr.small {
  margin: 20px 0;
}
.site-footer h6 {
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  margin-top: 5px;
  letter-spacing: 2px;
}
.site-footer a {
  color: #737373;
}
.site-footer a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links {
  padding-left: 0;
  list-style: none;
}
.footer-links li {
  display: block;
}
.footer-links a {
  color: #737373;
}
.footer-links a:active,
.footer-links a:focus,
.footer-links a:hover {
  color: #3366cc;
  text-decoration: none;
}
.footer-links.inline li {
  display: inline-block;
}
.copyright-text {
  margin: 0;
}
@media (max-width: 991px) {
  .site-footer [class^="col-"] {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .site-footer {
    padding-bottom: 0;
  }
  .site-footer .copyright-text {
    text-align: center;
  }
}
</style>
