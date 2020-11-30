<template>
  <div>
    <sandbox-1 v-if="sandboxNum == 1" />
    <sandbox-2 v-if="sandboxNum == 2" />
    <sandbox-3 v-if="sandboxNum == 3" />
    <sandbox-4 v-if="sandboxNum == 4" />
    <sandbox-5 v-if="sandboxNum == 5" />
    <sandbox-6 v-if="sandboxNum == 6" />
    <sandbox-7 v-if="sandboxNum == 7" />
    <sandbox-8 v-if="sandboxNum == 8" />
    <sandbox-9 v-if="sandboxNum == 9" />
    <sandbox-10 v-if="sandboxNum == 10" />
    <sandbox-11 v-if="sandboxNum == 11" />
    <sandbox-12 v-if="sandboxNum == 12" />
    <sandbox-13 v-if="sandboxNum == 13" />
    <sandbox-14 v-if="sandboxNum == 14" />
    <sandbox-15 v-if="sandboxNum == 15" />
    <sandbox-16 v-if="sandboxNum == 16" />
    <sandbox-17 v-if="sandboxNum == 17" />
    <sandbox-18 v-if="sandboxNum == 18" />
    <sandbox-19 v-if="sandboxNum == 19" />
    <sandbox-20 v-if="sandboxNum == 20" />
    <sandbox-21 v-if="sandboxNum == 21" />
    <sandbox-22 v-if="sandboxNum == 22" />
    <sandbox-23 v-if="sandboxNum == 23" />
    <sandbox-24 v-if="sandboxNum == 24" />
    <sandbox-25 v-if="sandboxNum == 25" />
    <sandbox-26 v-if="sandboxNum == 26" />
    <sandbox-27 v-if="sandboxNum == 27" />
    <sandbox-28 v-if="sandboxNum == 28" />
    <sandbox-29 v-if="sandboxNum == 29" />
    <sandbox-30 v-if="sandboxNum == 30" />
    <sandbox-31 v-if="sandboxNum == 31" />
    <sandbox-32 v-if="sandboxNum == 32" />
    <sandbox-33 v-if="sandboxNum == 33" />
    <sandbox-34 v-if="sandboxNum == 34" />
    <sandbox-35 v-if="sandboxNum == 35" />
    <sandbox-36 v-if="sandboxNum == 36" />
    <sandbox-37 v-if="sandboxNum == 37" />
    <sandbox-38 v-if="sandboxNum == 38" />
  </div>
</template>

<script>
import Sandbox1 from "./1.vue";
import Sandbox2 from "./2.vue";
import Sandbox3 from "./3.vue";
import Sandbox4 from "./4.vue";
import Sandbox5 from "./5.vue";
import Sandbox6 from "./6.vue";
import Sandbox7 from "./7.vue";
import Sandbox8 from "./8.vue";
import Sandbox9 from "./9.vue";
import Sandbox10 from "./10.vue";
import Sandbox11 from "./11.vue";
import Sandbox12 from "./12.vue";
import Sandbox13 from "./13.vue";
import Sandbox14 from "./14.vue";
import Sandbox15 from "./15.vue";
import Sandbox16 from "./16.vue";
import Sandbox17 from "./17.vue";
import Sandbox18 from "./18.vue";
import Sandbox19 from "./19.vue";
import Sandbox20 from "./20.vue";
import Sandbox21 from "./21.vue";
import Sandbox22 from "./22.vue";
import Sandbox23 from "./23.vue";
import Sandbox24 from "./24.vue";
import Sandbox25 from "./25.vue";
import Sandbox26 from "./26.vue";
import Sandbox27 from "./27.vue";
import Sandbox28 from "./28.vue";
import Sandbox29 from "./29.vue";
import Sandbox30 from "./30.vue";
import Sandbox31 from "./31.vue";
import Sandbox32 from "./32.vue";
import Sandbox33 from "./33.vue";
import Sandbox34 from "./34.vue";
import Sandbox35 from "./35.vue";
import Sandbox36 from "./36.vue";
import Sandbox37 from "./37.vue";
import Sandbox38 from "./38.vue";

export default {
  components: {
    Sandbox1,
    Sandbox2,
    Sandbox3,
    Sandbox4,
    Sandbox5,
    Sandbox6,
    Sandbox7,
    Sandbox8,
    Sandbox9,
    Sandbox10,
    Sandbox11,
    Sandbox12,
    Sandbox13,
    Sandbox14,
    Sandbox15,
    Sandbox16,
    Sandbox17,
    Sandbox18,
    Sandbox19,
    Sandbox20,
    Sandbox21,
    Sandbox22,
    Sandbox23,
    Sandbox24,
    Sandbox25,
    Sandbox26,
    Sandbox27,
    Sandbox28,
    Sandbox29,
    Sandbox30,
    Sandbox31,
    Sandbox32,
    Sandbox33,
    Sandbox34,
    Sandbox35,
    Sandbox36,
    Sandbox37,
    Sandbox38,
  },
  data() {
    return {
      sandboxNum: 1,
    };
  },
  created() {
    this.sandboxNum = this.$route.params.id;
    console.log(this.sandboxNum);
  },
};
</script>
