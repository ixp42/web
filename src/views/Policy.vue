<template>
  <div class="policy">
    <section>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>IX42 Policy</h2>
            <br />
            <h3>General Policies</h3>
            <ol>
              <li>
                This document contains a set of common rules that all networks
                wishing to connect to the IX42 fabric must adhere to. Failure to
                comply with any provision of this agreement can result in
                immediate disconnection from the IX42 peering fabric without
                notice. By connecting to the IX42 peering fabric you acknowledge
                that you have read, understand and agree to all the terms
                contained within.
              </li>
              <li>
                The terms contained within this document are subject to change.
                By connecting to the IX42 peering fabric you agree to all future
                revisions. Revisions will be published and members will be
                notified through the members mailing list 30 days in advance.
              </li>

              <li>
                IX42 does not manage, coordinate or get involved in
                relationships between connected members and will not act as a
                third party in any agreement, mediation or dispute.
              </li>

              <li>
                The IX42 Peering fabric may not be used in a manner that would
                disrupt anyone's business or infrastructure.
              </li>

              <li>
                IX42 Administration personnel reserve the right to disconnect or
                otherwise disrupt service to a member under any of the following
                conditions:
                <ul>
                  <li>
                    Failure to follow any of the provisions of this agreement.
                  </li>
                  <li>To perform scheduled or emergency maintenance.</li>
                  <li>
                    Statutory obligation set forth by a regulating authority.
                  </li>
                  <li>
                    As part of a request related to an ongoing investigation,
                    warrant or subpoena issued by a recognized law enforcement
                    entity with jurisdiction in an area in which IX42 operates.
                  </li>
                  <li>
                    Any unforeseen issue that would require IX42 to interrupt
                    connectivity for the sake of its membership.
                  </li>
                </ul>
              </li>
              <li>
                IX42 (The Internet eXchange 42) does not provide hosting,
                colocation, cross connects, loops or any other services outside
                of the peering fabric.
              </li>

              <li>
                IX42 is not responsible for any losses incurred as a result of
                disruption in the continuity of the Peering fabric. The service
                is provided as is, without any warranties expressed or implied
                including merchantability or fitness for a particular purpose.
              </li>
            </ol>
            <hr />
            <h3>Peering Requirements</h3>
            <ol>
              <li>
                The peering candidate must be a registered entity in its local
                jurisdiction.
              </li>
              <li>
                The peering candidate must provide IX42 with a 24 hour contact
                point.
              </li>
              <li>Only BGPv4 is allowed as a routing protocol.</li>
              <li>
                The Peering candidate must have a registered ASN (Autonomous
                System Number) issued by a recognized routing registry. (ARIN,
                RIPE, APNIC, LACNIC, AfriNIC, DN42, NeoNetwork)
              </li>
              <li>
                Single members are allowed to use multiple ASN's as long as they
                share a common contact point.
              </li>
              <li>
                IX42 only accepts peering traffic from its members. Members may
                not transit charged peering traffic or use next-hop rewrites,
                default routes or static routes.
              </li>
              <li>
                Peering parties are encouraged to aggregate routes where ever
                possible.
              </li>
              <li>
                Only prefixes registered to the Member or for which the member
                has a signed LOA on file may be announced.
              </li>
              <li>
                For Internet, the minimum prefix announced should be /24 for
                IPv4 and /48 for IPv6.
              </li>
              <li>
                For a peer established through a physical connection, the
                Round-Trip Time between the peer and RS shall not exceed 20ms.
              </li>
              <li>
                For the peer established through a tunnel, the Round-Trip Time
                between the peer and the RS shall not exceed 40ms.
              </li>
            </ol>
            <hr />
            <h3>Technical Requirements</h3>
            <ol>
              <li>
                The only L2 frame types allowed are 0x0800, 0x86dd and 0x0806.
              </li>
              <li>
                All L2/L3 protocols are forbidden with the exception of IP, NDP
                and ARP.
              </li>
              <li>
                There is a limit of one MAC address per port. Shared cables are
                not permitted.
              </li>
              <li>
                IX42 reserves the right to require bandwidth justification if
                deemed necessary.
              </li>
              <li>
                Ethernet aggregation is available subject to IX42 approval.
              </li>
              <li>
                The use of MD5 and/or BTSH to secure BGP sessions is
                recommended.
              </li>
            </ol>
            <hr />
            <p>
              <small>*IX42 Policy is forked from KCIX policy.</small>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2>Any Questions ?</h2>
            <p class="lead">You can inquiry our policy support.</p>
            <div class="col-md-4 mb-5">
              <address>
                <abbr title="Email">E:</abbr>
                <a href="mailto:policy@ix42.org">policy@ix42.org</a>
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
