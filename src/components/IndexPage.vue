<template>
  <div>
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <!--使用路由需要添加router配置-->
          <el-menu router
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="/Index">
              <i class="el-icon-loading"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/IndexPage">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>工具</span>
              </template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <i class="el-icon-more"></i>
              <span slot="title">待开放</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">Setting</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style scoped>

</style>
