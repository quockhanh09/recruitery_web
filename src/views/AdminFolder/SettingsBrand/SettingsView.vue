<template>
    <div>
        <div class="layout_layout__header__7BDr0">
            <h3 class="ant-typography title-section_title-section__CNT4w undefined css-d5t39c" style="padding: 10px 16px;">
                Settings
            </h3>
        </div>
        <div class="layout_layout__elCCi   layout_layout--header__WKmAL    undefined">
            <div class="ant-row css-d5t39c" style="margin-left: -8px; margin-right: -8px; row-gap: 16px;">
                <setting-header-view/>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
import SettingHeaderView from '../../../components/SettingsBrand/SettingHeaderView.vue'
export default {
    components: {
        SettingHeaderView: SettingHeaderView,
    }
}
</script>
<style scoped>
.layout_layout__header__7BDr0 {
    margin-top: 64px;
}



:where(.css-d5t39c)[class^="ant-typography"], :where(.css-d5t39c)[class*=" ant-typography"] {
    font-family: Mulish,sans-serif!important;
    font-size: 14px;
    box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
    margin: 0;
}
h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: .5em;
    font-weight: 500;
}
:where(.css-d5t39c).ant-typography {
    color: rgba(0, 0, 0, 0.88);
    word-break: break-word;
    line-height: 1.5714285714285714;
}

.title-section_title-section__CNT4w {
    margin-bottom: 0!important;
    margin-top: 0!important;
}
.ant-badge, .ant-btn, .ant-col, .ant-menu, .ant-radio, .ant-select, .ant-space, .ant-tag, .ant-typography {
    font-family: Mulish,sans-serif!important;
}
.ant-typography {
    margin-top: 0;
}


h3:where(.css-d5t39c).ant-typography, div:where(.css-d5t39c).ant-typography-h3, div:where(.css-d5t39c).ant-typography-h3>textarea, :where(.css-d5t39c).ant-typography h3 {
    margin-bottom: 0.5em;
    color: rgba(0, 0, 0, 0.88);
    font-weight: 600;
    font-size: 24px;
    line-height: 1.3333333333333333;
}

.layout_layout__elCCi {
    margin-top: calc(64px + 15px);
    margin-bottom: 16px;
    height: -moz-fit-content;
    height: fit-content;
    padding: 0 16px;
}
.layout_layout--header__WKmAL {
    margin-top: 15px;
}
:where(.css-d5t39c).ant-row {
    display: flex;
    flex-flow: row wrap;
    min-width: 0;
}
</style>