<template>
    <div class="ant-tabs-nav">
        <div class="ant-tabs-nav-wrap">
            <div class="ant-tabs-nav-list" style="transform: translate(0px, 0px);">
                <router-link :to="{name: 'notifications-home'}" class="ant-tabs-tab ant-tabs-tab-active">
                    <div class="ant-tabs-tab-btn">
                        <span class="ant-typography notification_notification__tab-title__zyYcM css-d5t39c">
                            Message
                            <span class="ant-badge ant-badge-not-a-wrapper notification_notification__tab-number__48qds css-d5t39c"></span>
                        </span>
                    </div>
                </router-link>

                <router-link :to="{name: 'candidates'}" class="ant-tabs-tab">
                    <div class="ant-tabs-tab-btn">
                        <span class="ant-typography notification_notification__tab-title__zyYcM css-d5t39c">
                            Candidates
                            <span class="ant-badge ant-badge-not-a-wrapper notification_notification__tab-number__48qds css-d5t39c"></span>
                        </span>
                    </div>
                </router-link>
                <router-link :to="{name: 'comments'}" class="ant-tabs-tab">
                    <div class="ant-tabs-tab-btn">
                        <span class="ant-typography notification_notification__tab-title__zyYcM css-d5t39c">
                            Comments
                            <span class="ant-badge ant-badge-not-a-wrapper notification_notification__tab-number__48qds css-d5t39c"></span>
                        </span>
                    </div>
                </router-link>
                <router-link :to="{name: 'jobs'}" class="ant-tabs-tab">
                    <div class="ant-tabs-tab-btn">
                        <span class="ant-typography notification_notification__tab-title__zyYcM css-d5t39c">
                            Jobs
                            <span class="ant-badge ant-badge-not-a-wrapper notification_notification__tab-number__48qds css-d5t39c"></span>
                        </span>
                    </div>
                </router-link>
                <div class="ant-tabs-ink-bar ant-tabs-ink-bar-animated" style="left: 0px; width: 63px;"></div>
            </div>
        </div>

        <div class="ant-tabs-extra-content">
            <button type="button" class="ant-btn css-d5t39c ant-btn-default my-button_my-button__8F4rM 1   undefined" style="margin-right: 16px;">
                <span>Read all</span>
            </button>
        </div>
    </div>
</template>

<style scoped>

:where(.css-d5t39c)[class^="ant-tabs"] [class^="ant-tabs"], :where(.css-d5t39c)[class*=" ant-tabs"] [class^="ant-tabs"], :where(.css-d5t39c)[class^="ant-tabs"] [class*=" ant-tabs"], :where(.css-d5t39c)[class*=" ant-tabs"] [class*=" ant-tabs"] {
    box-sizing: border-box;
}
:where(.css-d5t39c).ant-tabs-top >.ant-tabs-nav, :where(.css-d5t39c).ant-tabs-bottom >.ant-tabs-nav, :where(.css-d5t39c).ant-tabs-top >div>.ant-tabs-nav, :where(.css-d5t39c).ant-tabs-bottom >div>.ant-tabs-nav {
    margin: 0 0 16px 0;
}

:where(.css-d5t39c).ant-tabs >.ant-tabs-nav, :where(.css-d5t39c).ant-tabs >div>.ant-tabs-nav {
    position: relative;
    display: flex;
    flex: none;
    align-items: center;
}
.notification_notification__tab__Y1SE8>[class*=ant-tabs-nav] {
    margin-bottom: 0;
    background-color: #f5f5f5;
}
.notification_notification__tab__Y1SE8 [class*=ant-tabs-nav-wrap] {
    padding: 0 1.5rem;
}
:where(.css-d5t39c).ant-tabs >.ant-tabs-nav .ant-tabs-nav-wrap, :where(.css-d5t39c).ant-tabs >div>.ant-tabs-nav .ant-tabs-nav-wrap {
    position: relative;
    display: flex;
    flex: auto;
    align-self: stretch;
    overflow: hidden;
    white-space: nowrap;
    transform: translate(0);
}
:where(.css-d5t39c).ant-tabs >.ant-tabs-nav .ant-tabs-nav-list, :where(.css-d5t39c).ant-tabs >div>.ant-tabs-nav .ant-tabs-nav-list {
    position: relative;
    display: flex;
    transition: opacity 0.3s;
}

:where(.css-d5t39c).ant-tabs .ant-tabs-tab {
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 12px 0;
    font-size: 14px;
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;
}
.notification_notification__tab__Y1SE8 [class*=ant-tabs-tab] {
    padding: 16px 0;
}


:where(.css-d5t39c).ant-tabs .ant-tabs-tab-btn {
    outline: none;
    transition: all 0.3s;
}
.notification_notification__tab__Y1SE8 [class*=ant-tabs-tab-btn] {
    padding: 0!important;
}


.notification_notification__tab__Y1SE8 [class*=ant-tabs-tab] {
    padding: 16px 0;
}
:where(.css-d5t39c).ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #1aa94c;
    text-shadow: 0 0 0.25px currentcolor;
}

:where(.css-d5t39c).ant-typography {
    color: rgba(0, 0, 0, 0.88);
    word-break: break-word;
    line-height: 1.5714285714285714;
}
.ant-typography {
    margin-top: 0;
}

.ant-badge, .ant-btn, .ant-col, .ant-menu, .ant-radio, .ant-select, .ant-space, .ant-tag, .ant-typography {
    font-family: Mulish,sans-serif!important;
}

.notification_notification__tab-title__zyYcM {
    display: flex;
    flex-direction: row;
    align-items: center;
}

:where(.css-d5t39c).ant-badge {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1;
    list-style: none;
    font-family: Mulish,sans-serif!important;
    position: relative;
    display: inline-block;
    width: fit-content;
}

.notification_notification__tab-number__48qds {
    margin-left: 5px!important;
}
:where(.css-d5t39c).ant-badge.ant-badge-not-a-wrapper:not(.ant-badge-status) {
    vertical-align: middle;
}


.notification_notification__tab__Y1SE8 [class*=ant-tabs-tab] {
    padding: 16px 0;
}
:where(.css-d5t39c).ant-tabs .ant-tabs-tab+.ant-tabs-tab {
    margin: 0 0 0 32px;
}

:where(.css-d5t39c).ant-tabs .ant-tabs-ink-bar {
    position: absolute;
    background: #1aa94c;
    pointer-events: none;
}
:where(.css-d5t39c).ant-tabs-top >.ant-tabs-nav .ant-tabs-ink-bar, :where(.css-d5t39c).ant-tabs-bottom >.ant-tabs-nav .ant-tabs-ink-bar, :where(.css-d5t39c).ant-tabs-top >div>.ant-tabs-nav .ant-tabs-ink-bar, :where(.css-d5t39c).ant-tabs-bottom >div>.ant-tabs-nav .ant-tabs-ink-bar {
    height: 2px;
}
:where(.css-d5t39c).ant-tabs-top >.ant-tabs-nav .ant-tabs-ink-bar-animated, :where(.css-d5t39c).ant-tabs-bottom >.ant-tabs-nav .ant-tabs-ink-bar-animated, :where(.css-d5t39c).ant-tabs-top >div>.ant-tabs-nav .ant-tabs-ink-bar-animated, :where(.css-d5t39c).ant-tabs-bottom >div>.ant-tabs-nav .ant-tabs-ink-bar-animated {
    transition: width 0.3s,left 0.3s,right 0.3s;
}
:where(.css-d5t39c).ant-tabs-top >.ant-tabs-nav .ant-tabs-ink-bar, :where(.css-d5t39c).ant-tabs-top >div>.ant-tabs-nav .ant-tabs-ink-bar {
    bottom: 0;
}

:where(.css-d5t39c).ant-tabs .ant-tabs-extra-content {
    flex: none;
}





[role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
    touch-action: manipulation;
}
button, input, optgroup, select, textarea {
    margin: 0;
    color: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: inherit;
}


button {
    box-shadow: none!important;
}
button, select {
    text-transform: none;
}
button, input {
    overflow: visible;
}
:where(.css-d5t39c).ant-btn {
    outline: none;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    line-height: 1.5714285714285714;
    color: rgba(0, 0, 0, 0.88);
}
:where(.css-d5t39c).ant-btn {
    font-size: 14px;
    height: 32px;
    padding: 4px 15px;
    border-radius: 6px;
}
:where(.css-d5t39c).ant-btn-default {
    background-color: #ffffff;
    border-color: #d9d9d9;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
}
.ant-badge, .ant-btn, .ant-col, .ant-menu, .ant-radio, .ant-select, .ant-space, .ant-tag, .ant-typography {
    font-family: Mulish,sans-serif!important;
}
.my-button_my-button__8F4rM {
    border-radius: 8px!important;
    box-shadow: none!important;
    outline: none!important;
}
[type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: button;
}
:where(.css-d5t39c).ant-btn-default:not(:disabled):hover {
    color: #1aa94c;
    border-color: #1aa94c;
}











</style>