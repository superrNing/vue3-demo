<template>
  <div ref="root" class="text-center">
    <van-notice-bar left-icon="volume-o" text="abcd" />
    <p class="mg20">This is a root element</p>
    <div class="flex flex-column">
      <div class="flex flex-center mg-t10">
        <label>Name:</label>
        <input ref="nameinput" v-model.trim="formData.name" maxlength="16" />
      </div>
      <div class="flex flex-center mg-t10">
        <label>Phone:</label>
        <input type="tel" v-model.trim="formData.phone" maxlength="11" />
      </div>
      <div class="flex flex-center mg-t10">
        <label>Code:</label>
        <input type="tel" v-model.trim="formData.code" maxlength="6" />
      </div>
    </div>
    <p class="mg-t10">{{ formData }}</p>
    <p class="mg-t10"></p>
    <van-button type="primary" @click="insertName()">Insert Name</van-button>
    <van-steps direction="vertical" :active="1">
      <van-step>
        <h3>Ordered</h3>
        <p>{{ twoNow }}</p>
      </van-step>
      <van-step>
        <h3>The express has been collected</h3>
        <p>{{ now }}</p>
      </van-step>
      <van-step>
        <h3>The express has been delivered</h3>
        <p>{{ now2 }}</p>
      </van-step>
    </van-steps>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";
import { ref, reactive, onMounted } from "vue";

const root = ref();
const nameinput = ref();
const twoNow = dayjs().subtract(2, "day").format("YYYY-MM-DD HH:mm:ss");
const now = dayjs().format("YYYY-MM-DD HH:mm:ss");
const now2 = dayjs().add(2, "day").format("YYYY-MM-DD HH:mm:ss");
const formData = reactive({
  name: "",
  phone: "",
  code: "",
});

onMounted(() => {
  (nameinput.value as HTMLInputElement).focus();
});

const insertName = () => {
  const index = (nameinput.value as HTMLInputElement).selectionStart;
  if (typeof index !== "number") return;
  formData.name =
    formData.name.slice(0, index) + "Hello World!" + formData.name.slice(index);
};
</script>
