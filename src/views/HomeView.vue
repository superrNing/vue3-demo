<template>
  <div class="home text-center">
    <header
      v-pin:[direction]="pinPadding"
      style="width: 100%; text-align: center"
      class="max640"
    >
      <p>
        Stick me
        <span class="text-color">{{ pinPadding }}</span>
        px from the {{ direction }} of the page
      </p>
    </header>

    <p class="mg20 text-color">{{ time }}</p>

    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld class="text-color" msg="Welcome to Vue.js + TypeScript Demo" />
    <p class="mg10 text-color">Pop up</p>
    <div class="mg-b20">
      <YuiButton @click="handleClick()">Open a Modal</YuiButton>
    </div>
    <div class="mg-b20">
      <YuiSelect></YuiSelect>
    </div>
    <div class="mg-b20 flex flex-center text-color">
      Change the position of text.
      <input
        type="range"
        min="0"
        max="500"
        v-model="pinPadding"
        style="z-index: 9"
      />
    </div>
    <van-button type="success" @click="changeColor"
      >Change font color</van-button
    >
  </div>
</template>

<script lang="ts">
import dayjs from "dayjs";
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { showDialog, showToast } from "vant";

export default defineComponent({
  name: "HomePgae",
  components: {
    HelloWorld,
  },
  data() {
    return {
      direction: "top",
      pinPadding: 0,
      time: "",
      timer: 0,
      color: "red",
      city: ["", "", ""],
    };
  },
  methods: {
    changeColor() {
      showToast("Font color has been changed to blue.");
      this.color = "blue";
    },
    handleClick() {
      showDialog({
        title: "Title",
        message: "This is a global component",
      });
    },
    initTime() {
      this.time = dayjs().format("YYYY-MM-DD HH:mm:ss");
      this.timer = setInterval(() => {
        this.time = dayjs().format("YYYY-MM-DD HH:mm:ss");
      }, 1000);
    },
  },
  created() {
    this.initTime();
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
});
</script>

<style>
.text-color {
  color: v-bind(color);
}
</style>
