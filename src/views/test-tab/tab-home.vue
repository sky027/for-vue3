<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="第 一 页面">
                <tabOne></tabOne>
            </el-tab-pane>
            <el-tab-pane label="第 二 页面">
              <tabTwo></tabTwo>
            </el-tab-pane>
            <el-tab-pane label="第 三 页面">
              <tabThree></tabThree>
            </el-tab-pane>
            <el-tab-pane label="第 四 页面">
              <tabFour></tabFour>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import tabOne from './tab-one.vue';
    import tabTwo from './tab-two.vue'
    import tabThree from './tab-three.vue';
    import tabFour from './tab-four.vue';
    export default {
        name: "tab-home",
        components: {
          tabOne,
          tabTwo,
          tabThree,
          tabFour,
        }
    }
</script>

<style scoped>

</style>
