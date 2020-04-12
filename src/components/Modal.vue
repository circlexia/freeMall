<template>
  <div>
    <div style="display: 'none'">
      <div
        class="md-modal modal-msg md-modal-transition"
        :class="{'md-show':mdShow}"
        @close="closeModal"
      >
        <div class="md-modal-inner">
          <div class="md-top">
            <button class="md-close">关闭</button>
          </div>
          <div class="md-content">
            <div class="confirm-tips">
              <slot name="message"></slot>
            </div>
            <div class="btn-wrap">
              <slot name="btnGroup"></slot>
            </div>
          </div>
        </div>
      </div>
      <div class="md-overlay" v-if="mdShow" @click="closeModal"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: ["mdShow"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
    delCart() {
      console.log("123");
    }
  }
};
</script>

<style>
</style>
