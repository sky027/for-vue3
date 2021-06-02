<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="用户管理">
                <tabOne></tabOne>
            </el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import tabOne from './tab-one.vue';
    export default {
        name: "tab-home",
        components: {
            tabOne
        }
    }
</script>

<style scoped>

</style>
