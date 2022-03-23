<template>
  <div id="aclerk-note">
    <el-row style="height: 100%">
      <el-col
        :span="6"
        style="height: 100%"
      >
        this is category
      </el-col>
      <el-col
        :span="18"
        style="height: 100%"
      >
        <Editor />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Editor from '/@/components/editor/index.vue';

export default defineComponent({
  name: 'Note',
  components: {
    Editor,
  },
  setup() {
    // It makes no sense to make "versions" reactive
    return{};
  },
});
</script>

<style scoped>
#aclerk-note{
  height: 100%;
}
</style>
