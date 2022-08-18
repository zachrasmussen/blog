<template>
  <form class="card elevation-2" @submit.prevent="handleSubmit">
    <div class="card-body text-start">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          v-model="editable.name"
          required
          name="name"
        />
      </div>
      <div>
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          v-model="editable.email"
          required
          name="email"
        />
      </div>
      <div>
        <label for="picture">Picture</label>
        <input
          type="text"
          class="form-control"
          v-model="editable.picture"
          required
          name="picture"
        />
      </div>
      <div>
        <button type="submit" class="btn btn-primary w-100 mt-2">Save</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { accountService } from "../services/AccountService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { router } from "../router";
export default {
  setup() {
    const editable = ref({});

    watchEffect(() => {
      if (!AppState.account) {
        return;
      }
      editable.value = { ...AppState.account };
    });

    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value);
          router.push({
            name: "Profile",
            params: { profileId: editable.value.id },
          });
        } catch (error) {
          logger.error("[Editing Account]", error);
          Pop.error(error);
        }
      },
    };
  },
};
</script>

<style scoped>
</style>
