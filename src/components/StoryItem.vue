<template>
  <a :href="storyItem.url" class="storyItem">
    <img
      :src="storyItem.imageUrl"
      :alt="storyItem.title"
      class="storyItem_img"
    />
    <div class="storyItem_content">
      <span class="storyItem_date">{{ getDate(storyItem.time) }}</span>
      <p class="storyItem_score">Score: {{ storyItem.score }}</p>
      <p>
        Author: {{ storyItem.authorId }}
        <span class="storyItem_authorKarma">({{ storyItem.authorKarma }})</span>
      </p>
      <h3 class="storyItem_title">{{ storyItem.title }}</h3>
    </div>
  </a>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import StoryItem from "@/models/StoryItemModel";

export default defineComponent({
  name: "StoryItem",
  props: {
    storyItem: {
      type: Object as PropType<StoryItem>,
      required: true,
    },
  },
  methods: {
    getDate(timestamp: number) {
      return new Date(timestamp * 1000).toLocaleDateString("en-US");
    },
  },
});
</script>

<style lang="scss">
.storyItem {
  display: flex;
  flex-direction: column;
  margin: 0 30px 60px;
  max-width: 300px;
  box-shadow: 0 0 12px #ccc;
  transition: transform 0.3s ease-in-out;
  text-decoration: none;
  color: #000;
  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 500px) {
    margin: 0 0 30px;
  }

  &_img {
    height: 200px;
    object-fit: cover;
  }

  &_content {
    padding: 1rem;
  }

  &_date {
    color: #5d5d5d;
  }

  &_score {
    font-size: 20px;
    color: blue;
  }

  &_authorKarma {
    color: #5d5d5d;
  }

  &_title {
    margin: 0;
    font-weight: 500;
    color: green;
  }
}
</style>
