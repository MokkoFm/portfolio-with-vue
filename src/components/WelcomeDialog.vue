<script lang="ts">
export default {
  data: () => ({
    nameInput: "",
    dialog: true,
  }),
  methods: {
    saveName: function () {
      // this.$emit("create", this.nameInput);
      this.$store.commit("setName", this.nameInput);
      this.nameInput = "";
      this.dialog = false;
    },
  },
};
</script>

<template>
  <v-dialog v-model="dialog" class="dialog">
    <v-card>
      <v-card-text>Nice to meet you!</v-card-text>
      <v-text-field
        label="Your name"
        placeholder="What is your name?"
        type="input"
        class="input"
        v-model="nameInput"
      ></v-text-field>
      <v-card-actions>
        <v-btn
          v-if="!$store.state.isProjectsLoading"
          color="#497174"
          block
          :disabled="!nameInput"
          @click="saveName"
          >Save</v-btn
        >
        <div v-else class="progressBar">
          <v-progress-circular indeterminate color="#497174"></v-progress-circular>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.dialog {
  width: 500px;
  max-width: 95%;
  background-color: #eff5f5;
}

.input {
  margin: 0 16px;
}

.progressBar {
  display: flex;
  justify-content: center;
  width: 100%;
}
</style>
