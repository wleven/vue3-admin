<template>
  <NLayout class="layout" has-sider>
    <NLayoutSider :content-style="contentStyle" bordered class="aside" width="160">
      Aside
    </NLayoutSider>
    <NLayout>
      <NLayoutHeader bordered class="header"> 颐和园路</NLayoutHeader>
      <NLayoutContent :content-style="contentStyle" class="content">
        <NButton type="primary"> 按钮1</NButton>
      </NLayoutContent>
      <NLayoutFooter bordered class="footer"> 成府路</NLayoutFooter>
    </NLayout>
  </NLayout>
</template>
<script lang="ts" setup>
  const contentStyle = 'padding: 20px;';
</script>

<style lang="less" scoped>
  .layout {
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    .content {
      height: calc(100vh - 120px);
    }

    .header,
    .footer {
      height: 60px;
      box-sizing: border-box;
      padding: 0 20px;
      line-height: 60px;
    }
  }
</style>
