<template>
  <div class="profile-page" v-if="profile">
    <div class="cover-img">
      <div
        class="position-absolute"
        style="right: 0"
        v-if="profile.id == account.id"
      >
        <router-link class="btn rounded btn-info" :to="{ name: 'Account' }"
          >Edit Account</router-link
        >
      </div>
      <img :src="profile.picture" alt="" height="120" />
      <h3>{{ profile.name }}</h3>
    </div>
  </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { router } from "../router";
export default {
  setup() {
    const route = useRoute();

    async function getBlogsByCreatorId() {
      try {
        await blogsService.getBlogsByCreatorId(route.params.profileId);
      } catch (error) {
        logger.error("[GettingProfileProjects]", error);
        Pop.error(error);
      }
    }

    async function getProfileById() {
      try {
        await profilesService.getProfileById(route.params.profileId);
      } catch (error) {
        logger.error("[GettingProfile]", error);
        Pop.error(error);
        router.push({ name: "Home" });
      }
    }

    onMounted(() => {
      getProfileById();
      getBlogsByCreatorId();
    });
  },
};
</script>

<style>
</style>