<template>
    <div class="layout_layout__elCCi    layout_layout--no-padding-vertical__Xd6Tx  layout_layout--fit-screen-mobile__0WAol chat-page_chat-page__Rndje">

        <div class="main">
            <div class="chat-layout-v1_chat-layout-v1__Zw_x_">
            <div class="chat-layout-v1_chat-layout-v1__container__ab45C">
                <div class="chat-room_chat-room__E0h4h">
                <div class="my-spinner_my-spinner__container__5ZdQb undefined">
                    <div class="chat-room_chat-room__container__TL2cR">
                    <form
                        class="ant-form ant-form-horizontal css-d5t39c chat-room-search_chat-room-search__QRmsG"
                    >
                        <div
                        class="chat-room-search_chat-room-search__input-group__UrG_J"
                        >
                        <div
                            class="chat-room-search_chat-room-search__form-cover__O0Sc2"
                        >
                            <div class="ant-form-item css-d5t39c">
                            <div class="ant-row ant-form-item-row css-d5t39c">
                                <div class="ant-col ant-form-item-control css-d5t39c">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                    <div
                                        class="debounce-select_debounce-select__yPE6r"
                                    >
                                        <div
                                        class="ant-select ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search"
                                        style="width: 100%"
                                        >
                                        <div class="ant-select-selector">
                                            <span class="ant-select-selection-search">
                                            <input
                                                type="search"
                                                autocomplete="off"
                                                class="ant-select-selection-search-input"
                                                role="combobox"
                                                aria-activedescendant="shopId_list_0"
                                                v-model="selectedCompany"
                                                @focus="showCompanyList"
                                                @blur="hideCompanyList"
                                            />
                                            </span>
                                            <span
                                            class="ant-select-selection-placeholder"
                                            >All companies</span
                                            >
                                        </div>
                                        <span
                                            class="ant-select-arrow"
                                            unselectable="on"
                                            aria-hidden="true"
                                            style="user-select: none"
                                        >
                                            <span
                                            role="img"
                                            aria-label="down"
                                            class="anticon"
                                            @click="toggleCompanyList"
                                            >
                                            <svg
                                                viewBox="64 64 896 896"
                                                data-icon="down"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                                ></path>
                                            </svg>
                                            </span>
                                        </span>
                                        </div>
                                        <!-- Hiển thị danh sách công ty khi cần -->
                                        <ul
                                        v-if="showCompanyDropdown"
                                        class="company-dropdown"
                                        >
                                        <li
                                            v-for="company in companies"
                                            :key="company.id"
                                            @click="selectCompany(company)"
                                        >
                                            {{ company.name }}
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        <!-- next -->
                        <div
                            class="my-divider_my-divider__qGma4 my-divider_my-divider--vertical__dzMd5 chat-room-search_chat-room-search__divider__th9OU"
                        ></div>
                        <div
                            class="chat-room-search_chat-room-search__form-cover__O0Sc2"
                        >
                            <div class="ant-form-item">
                            <div class="ant-row">
                                <div class="ant-col ant-form-item-control css-d5t39c">
                                <div class="ant-form-item-control-input">
                                    <div class="ant-form-item-control-input-content">
                                    <div
                                        class="debounce-select_debounce-select__yPE6r"
                                    >
                                        <div
                                        class="ant-select ant-select-single ant-select-show-arrow"
                                        style="width: 100%"
                                        >
                                        <div class="ant-select-selector">
                                            <span class="ant-select-selection-search">
                                            <input
                                                type="search"
                                                autocomplete="off"
                                                class="ant-select-selection-search-input"
                                                role="combobox"
                                                aria-expanded="false"
                                                aria-haspopup="listbox"
                                                aria-owns="jobId_list"
                                                aria-auto
                                                complete="list"
                                                aria-controls="jobId_list"
                                                v-model="selectedJob"
                                                @focus="showJobList"
                                                @blur="hideJobList"
                                            /></span>
                                            <span
                                            class="ant-select-selection-placeholder"
                                            >All jobs</span
                                            >
                                        </div>
                                        <span
                                            class="ant-select-arrow"
                                            unselectable="on"
                                            aria-hidden="true"
                                            style="user-select: none"
                                            ><span
                                            role="img"
                                            aria-label="down"
                                            class="anticon"
                                            @click="toggleJobList"
                                            ><svg
                                                viewBox="64 64 896 896"
                                                focusable="false"
                                                data-icon="down"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path
                                                d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
                                                ></path></svg></span
                                        ></span>
                                        </div>
                                        <ul v-if="showJobDropdown" class="job-dropdown">
                                        <li
                                            v-for="job in jobs"
                                            :key="job.id"
                                            @click="selectJob(job)"
                                        >
                                            {{ job.name }}
                                        </li>
                                        </ul>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    <div
                        class="my-empty_my-empty__ijKPS"
                        style="height: calc(((100vh - 97.6px) - 0px) - 0px)"
                    >
                        <div class="ant-empty ant-empty-normal">
                        <div class="ant-empty-image">
                            <svg
                            width="64"
                            height="41"
                            viewBox="0 0 64 41"
                            xmlns="http://www.w3.org/2000/svg"
                            >
                            <g
                                transform="translate(0 1)"
                                fill="none"
                                fill-rule="evenodd"
                            >
                                <ellipse
                                fill="#f5f5f5"
                                cx="32"
                                cy="33"
                                rx="32"
                                ry="7"
                                ></ellipse>
                                <g fill-rule="nonzero" stroke="#d9d9d9">
                                <path
                                    d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
                                ></path>
                                <path
                                    d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                    fill="#fafafa"
                                ></path>
                                </g>
                            </g>
                            </svg>
                        </div>
                        <div class="ant-empty-description">No data</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="message-box_message-box__mYY8l">
                <div
                    class="my-spinner_my-spinner__container__5ZdQb message-box_message-box__container__xSM7f"
                >
                    <div
                    class="my-empty_my-empty__ijKPS"
                    style="height: calc(((100vh - 64px) - 0px) - 0px)"
                    >
                    <div class="ant-empty ant-empty-normal">
                        <div class="ant-empty-image">
                        <svg
                            width="64"
                            height="41"
                            viewBox="0 0 64 41"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                            transform="translate(0 1)"
                            fill="none"
                            fill-rule="evenodd"
                            >
                            <ellipse
                                fill="#f5f5f5"
                                cx="32"
                                cy="33"
                                rx="32"
                                ry="7"
                            ></ellipse>
                            <g fill-rule="nonzero" stroke="#d9d9d9">
                                <path
                                d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
                                ></path>
                                <path
                                d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                fill="#fafafa"
                                ></path>
                            </g>
                            </g>
                        </svg>
                        </div>
                        <div class="ant-empty-description">No data</div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="chat-layout-v1_chat-layout-v1__profile__LRlQp">
                <div class="chat-layout-v1_chat-layout-v1__profile-container__pdWQI">
                    <div class="">
                    <div></div>
                    <div class="ant-card my-box_my-box__99ml1">
                        <div class="ant-card-body">
                        <div
                            class="my-empty_my-empty__ijKPS"
                            style="height: calc(((100vh - 79px) - 15px) - 0px)"
                        >
                            <div class="css-d5t39c ant-empty ant-empty-normal">
                            <div class="ant-empty-image">
                                <svg
                                width="64"
                                height="41"
                                viewBox="0 0 64 41"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <g
                                    transform="translate(0 1)"
                                    fill="none"
                                    fill-rule="evenodd"
                                >
                                    <ellipse
                                    fill="#f5f5f5"
                                    cx="32"
                                    cy="33"
                                    rx="32"
                                    ry="7"
                                    ></ellipse>
                                    <g fill-rule="nonzero" stroke="#d9d9d9">
                                    <path
                                        d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"
                                    ></path>
                                    <path
                                        d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z"
                                        fill="#fafafa"
                                    ></path>
                                    </g>
                                </g>
                                </svg>
                            </div>
                            <div class="ant-empty-description">No data</div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCompany: "",
      selectedJob: "",
      showCompanyDropdown: false,
      showJobDropdown: false,
      companies: [
        { id: 1, name: "4pixos" },
        { id: 2, name: "Admattic" },
        { id: 3, name: "AIA Exchange" },
        { id: 4, name: "AIA Exchange (TP.HCM)" },
        { id: 5, name: "AIE" },
        { id: 6, name: "AionByte" },
        { id: 7, name: "Airfoil" },
        { id: 8, name: "Aliat Group" },
        { id: 9, name: "Always Marketing" },
        { id: 10, name: "Anatics" },
        { id: 11, name: "Batamindo" },
        { id: 12, name: "BBV Vietnam" },
        { id: 13, name: "BFast System" },
        { id: 14, name: "BLUSAIGON" },
        { id: 15, name: "bTaskee" },
        { id: 16, name: "Cake" },
        { id: 17, name: "CHT-Lab" },
      ],
      jobs: [
        { id: 1, name: "Senior Project Manager" },
        { id: 2, name: "Centre Manager" },
        { id: 3, name: "Senior PHP Developer" },
        { id: 4, name: "Senior IT Recruiter" },
        { id: 5, name: "SENIOR PHP/LARAVEL" },
        { id: 6, name: "Senior PHP/CakePHP" },
        { id: 7, name: "SENIOR JAVA DEVELOPER" },
        { id: 8, name: "Unity Developer" },
        { id: 9, name: "SENIOR PHP DEVELOPERS (Magento)" },
        { id: 10, name: "Senior Mobile Developer (React Native)" },
        { id: 11, name: "Kỹ sư cầu nối" },
        { id: 12, name: "SENIOR FRONT END DEVELOPER (ReactJs/ VueJs)" },
        { id: 13, name: "Senior Front-end" },
        { id: 14, name: "Senior Front End Developer (ReactJs or VueJS …)" },
        {
          id: 15,
          name: "Chief Technology Officer - CTO (Ruby on Rails , Mobile App)",
        },
        { id: 16, name: "Senior ReactJs front-end developer" },
        { id: 17, name: "Senior Backend" },
        {
          id: 18,
          name: "Future Chief Architect (.Net, Java, PHP, Python, Ruby on Rails...)",
        },
      ],
    };
  },
  methods: {
    showCompanyList() {
      this.showCompanyDropdown = true;
    },
    hideCompanyList() {
      this.showCompanyDropdown = false;
    },
    toggleCompanyList() {
      this.showCompanyDropdown = !this.showCompanyDropdown;
    },
    selectCompany(company) {
      this.selectedCompany = company.name;
      this.showCompanyDropdown = false;
    },
    showJobList() {
      this.showJobDropdown = true;
    },
    hideJobList() {
      this.showJobDropdown = false;
    },
    toggleJobList() {
      this.showJobDropdown = !this.showJobDropdown;
    },
    selectJob(job) {
      this.selectedJob = job.name;
      this.showJobDropdown = false;
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 800px;
  font-family: Mulish, sans-serif !important;
}

.chat-layout-v1_chat-layout-v1__Zw_x_ {
  height: 100%;
}

.chat-layout-v1_chat-layout-v1__container__ab45C {
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
}

.chat-room_chat-room__E0h4h {
  height: 100%;
  border: 1px solid #dee0e3;
  width: fit-content !important;
}

.chat-room_chat-room__E0h4h {
  height: 100%;
  border: 1px solid #dee0e3;
  width: fit-content !important;
}

.chat-room_chat-room__container__TL2cR {
  width: 350px;
}

.chat-room-search_chat-room-search__QRmsG {
  margin: 0 !important;
  display: flex;
  flex-direction: column;
}
.ant-form {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
}

.chat-room-search_chat-room-search__input-group__UrG_J {
  display: flex;
  flex-direction: row;
  width: 100%;
  border-bottom: 1px solid #dee0e3;
}

.chat-room-search_chat-room-search__form-cover__O0Sc2 {
  margin-bottom: -10px !important;
  width: 50%;
}

.chat-room-search_chat-room-search__divider__th9OU {
  height: 32px;
}

.my-divider_my-divider--vertical__dzMd5 {
  width: 1px;
  margin: 0;
}

.my-divider_my-divider__qGma4 {
  background-color: #dee0e3;
}

.ant-select .ant-select-selector .ant-select-selection-search-input {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  appearance: none;
}
.ant-row {
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
}

.ant-form-horizontal .ant-form-item-control {
  flex: 1 1 0;
  min-width: 0;
}
.ant-form-item .ant-form-item-control {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.ant-form-item .ant-form-item-control-input {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 32px;
}

.ant-form-item .ant-form-item-control-input-content {
  flex: auto;
  max-width: 100%;
}

.ant-form-item {
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  vertical-align: top;
}
.ant-select-single {
  font-size: 14px;
}
.ant-select {
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  line-height: 1.5714285714285714;
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.my-empty_my-empty__ijKPS {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.ant-empty-normal {
  margin-block: 32px;
  color: rgba(0, 0, 0, 0.25);
}

.ant-empty {
  margin-inline: 8px;
  font-size: 14px;
  line-height: 1.5714285714285714;
  text-align: center;
}

.message-box_message-box__mYY8l {
  height: 100%;
  width: 100%;
}

.message-box_message-box__container__xSM7f {
  border-top: 1px solid #dee0e3;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  height: calc(100vh - 64px);
}

.my-spinner_my-spinner__container__5ZdQb {
  position: relative;
  height: 100%;
}

.ant-empty .ant-empty-image svg {
  max-width: 100%;
  height: 100%;
  margin: auto;
}

.chat-layout-v1_chat-layout-v1__profile__LRlQp {
  border-top: 1px solid #dee0e3;
  border-left: 1px solid #dee0e3;
}

.chat-layout-v1_chat-layout-v1__profile-container__pdWQI {
  width: 400px;
  height: calc(100vh - 64px);
}
.my-box_my-box__99ml1 {
  background: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  transition: all 0.2s ease-in;
}

.my-box_my-box__99ml1 > [class*="ant-card-body"] {
  padding: 15px 20px;
}

.ant-card .ant-card-body {
  padding: 24px;
  /* border-radius: 0 0 8px 8px; */
}

.debounce-select_debounce-select__yPE6r [class*="ant-select-selector"] {
  padding: 0 10px;
}

.ant-select-single .ant-select-selector .ant-select-selection-search {
  position: absolute;
  top: 0;
  inset-inline-start: 11px;
  inset-inline-end: 11px;
  bottom: 0;
}

.debounce-select_debounce-select__yPE6r [class*="ant-select-selection-search"] {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0;
}

.ant-select:not(.ant-select-customize-input)
  .ant-select-selector
  .ant-select-selection-search-input {
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  outline: none;
  appearance: none;
}

.ant-select-single:not(.ant-select-customize-input)
  .ant-select-selector
  .ant-select-selection-search-input {
  height: 30px;
}

.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-inline-end: 18px;
}

.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  padding: 0;
  line-height: 30px;
  transition: all 0.3s, visibility 0s;
}

.ant-select .ant-select-selection-placeholder {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
  color: rgba(0, 0, 0, 0.25);
  pointer-events: none;
}

.ant-select-single:not(.ant-select-customize-input) .ant-select-selector:after {
  line-height: 30px;
}

.ant-select-single .ant-select-selector:after {
  display: inline-block;
  width: 0;
  visibility: hidden;
  content: "\a0";
}

.ant-select .ant-select-arrow {
  right: 11px;
}

.ant-select .ant-select-arrow {
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.25);
  font-style: normal;
  line-height: 1;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  position: absolute;
  top: 50%;
  inset-inline-start: auto;
  inset-inline-end: 11px;
  height: 12px;
  margin-top: -6px;
  font-size: 12px;
  pointer-events: none;
}

.ant-select .ant-select-arrow .anticon {
  vertical-align: top;
  transition: transform 0.3s;
}

.company-dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 180px;
  list-style: none;
  width: 175px;
  padding: 2px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  z-index: 1050;
  overflow-y: auto;
  font-variant: initial;
  background-color: #ffffff;
  border-radius: 0px;
  outline: none;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.job-dropdown {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 180px;
  list-style: none;
  width: 175px;
  padding: 2px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  z-index: 1050;
  overflow-y: auto;
  font-variant: initial;
  background-color: #ffffff;
  border-radius: 0px;
  outline: none;

  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08),
    0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
}

.company-dropdown li,
.job-dropdown li {
  padding: 6px 15px;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.company-dropdown li:hover,
.job-dropdown li:hover {
  background-color: #c8c4c4;
  font-weight: bold;
}
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
</style>
