<template>
  <div class="stories">
    <StoryItem
      v-for="storyItem of storyItems"
      :key="storyItem.id"
      :storyItem="storyItem"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import StoryItem from "./components/StoryItem.vue";
import { default as StoryItemModel } from "./models/StoryItemModel";
import StoryItemAPI from "./models/StoryItemAPIModel";
import StoryAuthorAPI from "./models/StoryAuthorAPIModel";

axios.defaults.baseURL = "https://hacker-news.firebaseio.com/v0";

export default defineComponent({
  name: "App",
  components: {
    StoryItem,
  },
  data: function () {
    return {
      storyItems: [] as StoryItemModel[],
      baseImageUrl: "https://source.unsplash.com/random/300x200" as string,
    };
  },
  methods: {
    async getStories() {
      const { data: allStoryIDs }: { data: number[] } = await axios.get(
        "topstories.json"
      );
      let shownStoryIDs: number[];

      if (allStoryIDs.length > 10) {
        const shownStoriesSet: Set<number> = new Set();
        while (shownStoriesSet.size < 10) {
          shownStoriesSet.add(
            allStoryIDs[Math.floor(Math.random() * allStoryIDs.length)]
          );
        }
        shownStoryIDs = Array.from(shownStoriesSet);
      } else {
        shownStoryIDs = [...allStoryIDs];
      }

      const shownStories: StoryItemModel[] = await Promise.all(
        shownStoryIDs.map(async (storyID, index) => {
          const { data: story }: { data: StoryItemAPI } = await axios.get(
            `item/${storyID}.json`
          );
          const { data: user }: { data: StoryAuthorAPI } = await axios.get(
            `user/${story.by}.json`
          );
          return Promise.resolve({
            title: story.title,
            url: story.url,
            time: story.time,
            score: story.score,
            authorId: story.by,
            authorKarma: user.karma,
            imageUrl: `${this.baseImageUrl}?sig=${index}`,
          });
        })
      );
      this.storyItems = shownStories.sort((a, b) => a.score - b.score);
    },
  },
  mounted() {
    this.getStories();
  },
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap");
</style>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  max-width: 1200px;
  margin: 40px auto;
  display: flex;
  justify-content: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 300;
}
.stories {
  max-width: 1080px;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1096px) {
    max-width: 720px;
  }
  @media (max-width: 736px) {
    justify-content: center;
  }
}
</style>
