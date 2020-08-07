<template>
  <div class="policy">
    <v-container>
      <v-breadcrumbs :items="breadcrumbs" large></v-breadcrumbs>
      <div class="text-h3 font-weight-light mb-4" v-t="'title'" />
      <v-divider />

      <div class="text-h5 font-weight-light mb-4 mt-4" v-t="'general.title'" />
      <ol>
        <li v-for="i in $t('general.list1')" :key="i" v-text="i" />
        <li>
          {{ $t("general.list2.desc") }}
          <ul>
            <li v-for="i in $t('general.list2.list')" :key="i" v-text="i" />
          </ul>
        </li>
        <li v-for="i in $t('general.list3')" :key="i" v-text="i" />
      </ol>

      <div class="text-h5 font-weight-light mb-4 mt-4" v-t="'peering.title'" />
      <ol>
        <li v-for="i in $t('peering.list')" :key="i" v-text="i" />
      </ol>
      <div class="text-h5 font-weight-light mb-4 mt-4" v-t="'tech.title'" />
      <ol>
        <li v-for="i in $t('tech.list')" :key="i" v-text="i" />
      </ol>
      <p class="mt-6">
        <small v-t="'fork'" />
      </p>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Home",
  data: () => ({
    breadcrumbs: [
      {
        text: "Home",
        disabled: false,
        href: "/"
      },
      {
        text: "Policy",
        disabled: true,
        href: "/policy"
      }
    ]
  })
};
</script>

<i18n>
{
  "en": {
    "title": "Internet eXchange 42 Policy",
    "general": {
      "title": "General Policies",
      "list1": [
        "This document contains a set of common rules that all networks wishing to connect to the IX42 fabric must adhere to. Failure to comply with any provision of this agreement can result in immediate disconnection from the IX42 peering fabric without notice. By connecting to the IX42 peering fabric you acknowledge that you have read, understand and agree to all the terms contained within.",
        "The terms contained within this document are subject to change. By connecting to the IX42 peering fabric you agree to all future revisions. Revisions will be published and members will be notified through the members mailing list 30 days in advance.",
        "IX42 does not manage, coordinate or get involved in relationships between connected members and will not act as a third party in any agreement, mediation or dispute.",
        " The IX42 Peering fabric may not be used in a manner that would disrupt anyone's business or infrastructure."
      ],
      "list2": {
        "desc": "IX42 Administration personnel reserve the right to disconnect or otherwise disrupt service to a member under any of the following conditions:",
        "list": [
          "Failure to follow any of the provisions of this agreement.",
          "To perform scheduled or emergency maintenance.",
          "Statutory obligation set forth by a regulating authority.",
          "As part of a request related to an ongoing investigation, warrant or subpoena issued by a recognized law enforcement entity with jurisdiction in an area in which IX42 operates.",
          "Any unforeseen issue that would require IX42 to interrupt connectivity for the sake of its membership."
        ]
      },
      "list3": [
        "IX42 (The Internet eXchange 42) does not provide hosting, colocation, cross connects, loops or any other services outside of the peering fabric.",
        "IX42 is not responsible for any losses incurred as a result of disruption in the continuity of the Peering fabric. The service is provided as is, without any warranties expressed or implied including merchantability or fitness for a particular purpose."
      ]
    },
    "peering": {
      "title": "Peering Requirements",
      "list": [
        "The peering candidate must be a registered entity in its local jurisdiction.",
        "The peering candidate must provide IX42 with a 24 hour contact point.",
        "Only BGPv4 is allowed as a routing protocol.",
        "The Peering candidate must have a registered ASN (Autonomous System Number) issued by a recognized routing registry. (ARIN, RIPE, APNIC, LACNIC, AfriNIC, DN42, NeoNetwork)",
        "Single members are allowed to use multiple ASN's as long as they share a common contact point.",
        "IX42 only accepts peering traffic from its members. Members may not transit charged peering traffic or use next-hop rewrites, default routes or static routes.",
        "Peering parties are encouraged to aggregate routes where ever possible.",
        "Only prefixes registered to the Member or for which the member has a signed LOA on file may be announced.",
        "For Internet, the minimum prefix announced should be /24 for IPv4 and /48 for IPv6.",
        "For a peer established through a physical connection, the Round-Trip Time between the peer and RS shall not exceed 20ms.",
        "For the peer established through a tunnel, the Round-Trip Time between the peer and the RS shall not exceed 40ms."
      ]
    },
    "tech": {
      "title": "Technical Requirements",
      "list": [
        "The only L2 frame types allowed are 0x0800, 0x86dd and 0x0806.",
        "All L2/L3 protocols are forbidden with the exception of IP, NDP and ARP.",
        "There is a limit of one MAC address per port. Shared cables are not permitted.",
        "IX42 reserves the right to require bandwidth justification if deemed necessary.",
        "Ethernet aggregation is available subject to IX42 approval.",
        "The use of MD5 and/or BTSH to secure BGP sessions is recommended."
      ]
    },
    "fork": "*IX42 Policy is forked from KCIX policy."
  },
  "zh": {
    "title": "Internet eXchange 42 政策",
    "general": {
      "title": "一般政策",
      "list1": [
        "本文档包含一组通用规则，所有希望连接到 IX42 结构的网络都必须遵守。 不遵守本协议的任何规定可能导致立即与 IX42 对等结构断开连接，恕不另行通知。 通过连接到 IX42 对等结构，您承认您已阅读，理解并同意其中包含的所有条款。",
        "本文档中包含的条目可能会更改。 通过连接到 IX42 对等结构，您已同意将来的所有修订版本。 修订版本将提前 30 天发布，并通过成员邮件列表通知。",
        "IX42 不会管理，协调或参与关联成员之间的关系，并且不会在任何协议，调解或争议中充当第三方。",
        "IX42对等结构不能以破坏任何人的业务或基础结构的方式使用。"
      ],
      "list2": {
        "desc": "IX42 管理人员保留在下列任何情况下断开或中断向成员提供服务的权利：",
        "list": [
          "不遵守本协议中的任何一项规定。",
          "执行计划或紧急的维护。",
          "监管机构规定的法定义务。",
          "作为与正在进行的调查有关的请求的一部分，由在 IX42 运营所在地区具有管辖权的公认执法实体签发的手令或传票。",
          "任何由于 IX42 的成员身份而需要 IX42 中断连接的不可预见的问题。"
        ]
      },
      "list3": [
        "IX42（Internet eXchange 42）在对等结构之外不提供主机，托管，交叉连接，回路或任何其他服务。",
        "IX42 对由于对等结构的连续性中断而造成的任何损失不承担任何责任。 该服务按原样提供，没有任何明示或暗示的保证，包括适销性或对特定目的的适用性。"
      ]
    },
    "peering": {
      "title": "对等要求",
      "list": [
        "对等方必须是其当地司法管辖区中的注册实体。",
        "对等方必须为 IX42 提供 24 小时联系点。",
        "仅允许使用 BGPv4 作为路由协议。",
        "对等方必须具有由公认的路由注册局（ARIN，RIPE，APNIC，LACNIC，AfriNIC，DN42，NeoNetwork）颁发的注册 ASN（自治系统编号）",
        "允许单个成员使用多个 ASN，只要它们共享一个公共联系点即可。",
        "IX42 仅接受来自其成员的对等流量。 成员不得传输收费的对等流量或使用下一跳重写，默认路由或静态路由。",
        "鼓励对等方尽可能聚合路由。",
        "只有注册给成员的前缀或成员已签署了 LOA 的前缀才可以宣告。",
        "对于 Internet，宣告的最小前缀对于 IPv4 应该为 /24，对于 IPv6 应该为 /48。",
        "对于通过物理连接建立的对等体，对等体与 RS 之间的 RTT 时间不得超过 20ms。",
        "对于通过隧道建立的对等体，对等体与 RS 之间的往返时间不得超过 40ms。"
      ]
    },
    "tech": {
      "title": "技术要求",
      "list": [
        "唯一允许的L2帧类型为0x0800、0x86dd和0x0806。",
        "除IP，NDP和ARP外，所有L2 / L3协议均被禁止。",
        "每个端口限制一个MAC地址。 不允许使用共享线路。",
        "IX42 保留在必要时要求调整带宽的权利。",
        "以太网聚合可通过 IX42 批准获得。",
        "建议使用 MD5 和/或 BTSH 来保护 BGP 会话安全。"
      ]
    },
    "fork": "*IX42 策略是从 KCIX 策略派生的。"
  }
}
</i18n>
