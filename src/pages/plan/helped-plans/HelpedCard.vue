<template>
  <div class="card">
    <img :src="props.plan.coverUrl" class="image-cat" />

    <p class="title">
      帮助<text style="color: #1f6bff">{{ props.plan.catName }} </text
      >{{ props.plan.name }}
    </p>
    <p class="date">{{ displayTime(props.plan.donateTime) }}</p>

    <div class="fish-count">
      <img :src="Icons.LittleFish" class="image-fish" />
      <p class="count">×{{ props.plan.donateNum }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icons } from "@/utils/url";
import { planpreviews } from "@/apis/schemas";
import { displayTime } from "../../../utils/time";
const props = defineProps<{
  plan: planpreviews;
}>();
console.log(props.plan);
</script>

<style scoped lang="scss">
.card {
  background-color: white;
  border-radius: 3vw;
  width: 44vw;
  height: 52vw;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2vw;
  box-sizing: border-box;
  margin-bottom: 3vw;

  .image-cat {
    width: 40vw;
    height: 29vw;
    border-radius: 2vw;
    margin-bottom: 1vw;
  }

  .title {
    font-size: 3.5vw;
    color: black;
    font-weight: bold;
    letter-spacing: 0.3vw;
  }

  .date {
    font-size: 3vw;
    color: grey;
    letter-spacing: 0.3vw;
    margin-bottom: 1vw;
  }

  .fish-count {
    display: flex;
    .image-fish {
      width: 7vw;
      height: 7vw;
    }
    .count {
      width: fit-content;
      font-size: 4.5vw;
      color: brown;
    }
  }
}
</style>
