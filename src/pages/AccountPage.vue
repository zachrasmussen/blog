<template>
  <div class="container">
    <div class="row my-3 d-flex justify-content-center">
      <div class="col-6">
        <AccountForm />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";

export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account),
    };
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
