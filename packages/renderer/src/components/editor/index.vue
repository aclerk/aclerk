<template>
  <el-row id="ursaa-editor">
    <el-col
      id="ursaa-editor-text"
      :span="12"
    >
      <textarea v-model="context" />
    </el-col>
    <el-col
      id="ursaa-editor-markdown"
      :span="12"
      v-html="htmlContext"
    />
  </el-row>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';
import {md2html} from '/@/utils/mdParser';

export default defineComponent({
  name: 'Editor',
  setup() {
    let context = ref<string>('');
    let htmlContext = ref<string>('');

    watch([context], async () => {
      htmlContext.value = await md2html(context.value);
    });

    // initialize
    context.value =
      `# title1
## title2
### title3
#### title4
##### title5
###### title6
`;

    return {
      context,
      htmlContext,
    };
  },
});
</script>

<style lang="less" scoped>
@import './index.less';
</style>
