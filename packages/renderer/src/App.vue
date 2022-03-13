<template>
  <el-container style="height: 100%">
    <el-aside width="57px" style="background-color: #333333">
      <router-link to="/" class="ursaa-router">
        <div class="ursaa-menu">
          <el-icon :size="36" color="#858585">
            <house />
          </el-icon>
        </div>
      </router-link>
      <router-link to="/note" class="ursaa-router">
        <div class="ursaa-menu">
          <el-icon :size="36" color="#858585">
            <notebook />
          </el-icon>
        </div>
      </router-link>
      <router-link to="/bookkeeping" class="ursaa-router">
        <div class="ursaa-menu">
          <el-icon :size="36" color="#858585">
            <wallet-filled />
          </el-icon>
        </div>
      </router-link>
      <router-link to="/plan" class="ursaa-router">
        <div class="ursaa-menu">
          <el-icon :size="36" color="#858585">
            <management />
          </el-icon>
        </div>
      </router-link>
      <router-link to="/setting" class="ursaa-router">
        <div class="ursaa-menu">
          <el-icon :size="36" color="#858585">
            <setting />
          </el-icon>
        </div>
      </router-link>
    </el-aside>
    <el-main class="ursaa-container">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </el-main>
  </el-container>
</template>

<script lang="ts">

export default{
  name: 'App'
};
</script>

<style lang="less">
.ursaa-menu {
  height: 56px;
  width: 56px;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
}
.ursaa-router {
  color: #858585;
}
.ursaa-container {
  padding: 0 !important;
}
.router-link-active .el-icon{
  color: white;
}
</style>
