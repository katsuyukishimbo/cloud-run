
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
<template>
  <div slot="appContent">
    <mwc-top-app-bar>
      <mwc-icon-button
        slot="navigationIcon"
        icon="menu"
        @click="toggleDrawer"
      ></mwc-icon-button>
      <div slot="title">Prime</div>
    </mwc-top-app-bar>
    <div class="main-content">
      <div>
        <mwc-textfield
          :value="num"
          @change="onchange($event.target.value)"
          label="Input Number"
        />
      </div>
      <div>
        <mwc-button @click="check()">Is it Prime Number?</mwc-button>
      </div>
    </div>
    <mwc-dialog :open="dialogOpen" @closing="closingDialog">
      <div>{{ this.result }}</div>
      <mwc-button slot="primaryAction" dialogAction="discard">
        OK
      </mwc-button>
    </mwc-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import "@material/mwc-top-app-bar";
import "@material/mwc-icon-button";
import "@material/mwc-button";
import "@material/mwc-dialog";
import "@material/mwc-textfield";
import AppComponent from '../App.vue';

@Component
export default class AboutPage extends Vue {
  result: string = "";
  num: string = "0";
  dialogOpen: boolean = false;

  onchange(value: string) {
    this.num = value;
  }

  closingDialog() {
    this.dialogOpen = false;
  }

  async check() {
    console.log("後で書く")
  }

  toggleDrawer(e: Event) {
    const parent = this.$parent as AppComponent;
    parent.openDrawer = !parent.openDrawer;
  }
}
</script>