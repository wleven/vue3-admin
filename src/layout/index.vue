<template>
  <NLayout has-sider class="layout">
    <NLayoutSider :content-style="contentStyle" class="aside" bordered width="160">Aside</NLayoutSider>
    <NLayout>
      <NLayoutHeader bordered  class="header">颐和园路</NLayoutHeader>
      <NLayoutContent :content-style="contentStyle" class="content">Content</NLayoutContent>
      <NLayoutFooter bordered class="footer">成府路</NLayoutFooter>
    </NLayout>
  </NLayout>
</template>
<script lang="ts" setup>
const contentStyle = "padding: 20px;"
</script>

<style lang="less" scoped>
@import "../style/var";

.layout {
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  .content {
    height: calc(100vh - 120px);
  }

  .header,.footer{
    height: 60px;
    box-sizing: border-box;
    padding: 0 20px;
    line-height: 60px;
  }
}

</style>

