<template>
  <el-row id="aclerk-editor">
    <el-col
      id="aclerk-editor-text"
      :span="12"
    >
      <textarea v-model="context" />
    </el-col>
    <el-col
      id="aclerk-editor-markdown"
      :span="12"
      v-html="htmlContext"
    />
  </el-row>
</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue';
import {md2html} from '/@/utils/mdParser';
import mermaid from 'mermaid';

export default defineComponent({
  name: 'Editor',
  setup() {
    mermaid.initialize({
      flowchart: {curve: 'linear'},
      gantt: {axisFormat: '%Y/%m/%d'},
    });

    let context = ref<string>('');
    let htmlContext = ref<string>('');

    watch([context], async () => {
      htmlContext.value = await md2html(context.value);
      mermaid.contentLoaded();
    });

    // initialize
    context.value =
      `# title1
## title2
### title3
#### title4
##### title5
###### title6
\`\`\`mermaid
graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;
\`\`\`
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
