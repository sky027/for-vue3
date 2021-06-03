<template>
    <div class="about">
        <el-button type="primary">{{ $t('home.apple') }}</el-button> |
        <el-button type="primary">{{ $t('home.orange') }}</el-button> |
        <el-button type="primary">{{ t('home.apple') }}</el-button> |
        <el-button type="primary">{{ t('home.orange') }}</el-button> |
        <el-select v-model="langVal" @change="selectLang()">
            <!--<el-option label="中文" value="cn"></el-option>
            <el-option label="英文" value="en"></el-option>-->
            <el-option v-for="local in $i18n.availableLocales" :key="local" :value="local" :label="langLabel(local)"></el-option>
        </el-select>
    </div>
</template>
<script>
    import { useI18n } from "vue-i18n";
    import { computed } from 'vue';
    export default {
        setup() {
            const { t } = useI18n();
            const langLabel = computed(() => {
                return (val) => {
                    if (val === 'cn') {
                        return '中文';
                    } else {
                        return '英文';
                    }
                }
            });
            return{
                t,
                langLabel
            }
        },
        data() {
            return {
                msg: "",
                langVal: 'cn',
                skuDetailList: {}
            };
        },
        mounted() {
            this.msg = "This is an about page";
        },
        methods: {
            selectLang() {
                /*localStorage.setItem('lang', this.langVal);
                this.$i18n.locale = this.langVal;*/
                this.$confirm(this.t('home.changeLang'), '提示', {
                    confirmButtonText: this.t('home.ok'),
                    cancelButtonText: this.t('home.cancel'),
                    type: 'warning'
                }).then(() => {
                    localStorage.setItem('lang', this.langVal);
                    this.$i18n.locale = this.langVal;
                }).catch(() => {});
            }
        },
    };
</script>
