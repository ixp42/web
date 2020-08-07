<template>
  <section id="home-about">
    <v-responsive class="mx-auto pa-6 pt-12">
      <v-container>
        <v-responsive class="overflow-visible">
          <div class="text-h3 font-weight-light mb-4">{{ $t("title") }}</div>
          <p class="font-weight-light" v-t="'para1'" />
          <p class="font-weight-light" v-t="'para2'" />
        </v-responsive>
      </v-container>
    </v-responsive>
  </section>
</template>

<i18n>
{
  "en": {
    "title": "About Us",
    "para1": "IX42 (Internet eXchange 42) is a large-scale experimental Internet eXchange, which aims to provide high-efficiency, low-cost and even zero-cost interconnection solutions for small and medium-sized networks, academic and experimental networks, and personal network operators distributed around the world.",
    "para2": "At the same time, we have cooperated with many network operators to deploy the latest and quite experimental software and hardware solutions on our infrastructure. IX42 also offers remote peering and transport to other locations and networks as well as to other IXPs."
  },
  "zh": {
    "title": "关于我们",
    "para1": "IX42（Internet eXchange 42）是大规模的实验性互联网交换中心，旨在为分布在世界各地的中小型网络，科研和实验网络以及个人网络运营商提供高效，低成本甚至是零成本的互联解决方案。 ",
    "para2": "同时，我们与许多网络运营商合作，在我们的基础架构上部署最新的，颇具实验性质的软件和硬件解决方案。 IX42 还提供远程对等和传输到其他位置的网络和其他 IXP 的解决方案。"
  }
}
</i18n>
