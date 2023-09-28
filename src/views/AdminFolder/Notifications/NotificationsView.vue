<template>
    <div class="layout_layout__elCCi    layout_layout--no-padding-vertical__Xd6Tx  layout_layout--fit-screen-mobile__0WAol notification-page_notification-page__I_qXi">
        <div class="ant-tabs ant-tabs-top notification_notification__tab__Y1SE8 css-d5t39c">
            <notifications-header-view-vue/>
            <router-view/>
        </div>
    </div>
</template>
<script>
import NotificationsHeaderViewVue from '@/components/NotificationsComponent/NotificationsHeaderView.vue'
export default {
    components: {
        NotificationsHeaderViewVue: NotificationsHeaderViewVue
    }
}
</script>
<style scoped>
.layout_layout__elCCi {
    margin-top: calc(64px + 15px);
    margin-bottom: 16px;
    height: -moz-fit-content;
    height: fit-content;
    padding: 0 16px;
}
.layout_layout--no-padding-vertical__Xd6Tx {
    padding: 0;
    margin-top: calc(64px);
}

.layout_layout--fit-screen-mobile__0WAol {
    overflow: hidden;
    margin-bottom: 0;
}

.notification-page_notification-page__I_qXi {
    margin-top: 64px;
}




:where(.css-d5t39c)[class^="ant-tabs"], :where(.css-d5t39c)[class*=" ant-tabs"] {
    font-family: Mulish,sans-serif!important;
    font-size: 14px;
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-tabs-top, :where(.css-d5t39c).ant-tabs-bottom {
    flex-direction: column;
}

:where(.css-d5t39c).ant-tabs {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    display: flex;
}
.notification_notification__tab__Y1SE8 {
    background: #fff;
}

</style>