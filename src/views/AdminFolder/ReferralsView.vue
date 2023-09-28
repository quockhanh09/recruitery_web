<template>
    <div class="layout_layout__elCCi    layout_layout--no-padding-vertical__Xd6Tx  layout_layout--fit-screen-mobile__0WAol chat-page_chat-page__Rndje">
    
  <div class="main">
    <div
      class="referral-view-container_referral-view-container__XH_Sf undefined"
    >
      <div
        class="referral-view-container_referral-view-container__header__5fmUW"
        id="referral-header"
      >
        <h5 class="ant-typography title-section_title-section__CNT4w undefined">
          Candidates propgress list (Total 0)
        </h5>
        <div
          class="ant-radio-group ant-radio-group-outline referral-view-container_referral-view-container__header-switch__vvTBp"
        >
          <label
            class="ant-radio-button-wrapper ant-radio-button-wrapper-checked"
            style="border-radius: 20px 0px 0px 20px"
            :style="boardButtonStyle"
            ><span class="ant-radio-button ant-radio-button-checked"
              ><input
                class="ant-radio-button-input"
                type="radio"
                value="board"
                v-model="selectedView"
                checked="" /><span class="ant-radio-button-inner"></span></span
            ><span
              ><span role="img" aria-label="hdd" class="anticon anticon-hdd"
                ><svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="hdd"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM496 208H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 544h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H312c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8zm328 244a40 40 0 1080 0 40 40 0 10-80 0z"
                  ></path></svg
              ></span>
              Board view</span
            > </label
          ><label
            class="ant-radio-button-wrapper"
            :style="tableButtonStyle"
            style="border-radius: 0px 20px 20px 0px"
            ><span class="ant-radio-button"
              ><input
                class="ant-radio-button-input"
                v-model="selectedView"
                type="radio"
                value="table" /><span
                class="ant-radio-button-inner"
              ></span></span
            ><span
              ><span role="img" aria-label="table" class="anticon anticon-table"
                ><svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="table"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 208H676V232h212v136zm0 224H676V432h212v160zM412 432h200v160H412V432zm200-64H412V232h200v136zm-476 64h212v160H136V432zm0-200h212v136H136V232zm0 424h212v136H136V656zm276 0h200v136H412V656zm476 136H676V656h212v136z"
                  ></path></svg></span
              >Table view</span
            ></label
          >
        </div>
      </div>
    </div>

    <!-- .................................next......................... -->
    <div
      class="referral-view-container_referral-view-container__content__hvna6"
    >
      <form id="referral-filter" class="ant-form ant-form-vertical">
        <div
          class="ant-row ant-row-middle"
          style="margin-left: -4px; margin-right: -4px"
        >
          <div class="ant-col-25" style="padding-left: 4px; padding-right: 4px">
            <div class="ant-form-item">
              <div class="ant-row ant-form-item-row">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <span
                        class="ant-input-affix-wrapper my-input_my-input--default__Eyt3e my-input_my-input--mini__s0pIM my-input_my-input--max-width__elN8M undefined"
                        ><input
                          placeholder="Candidate name, email, phone"
                          id="keyword"
                          class="ant-input"
                          type="text"
                          value=""
                          fdprocessedid="zsi16f" /><span
                          class="ant-input-suffix"
                          ><span
                            class="ant-input-clear-icon ant-input-clear-icon-hidden"
                            role="button"
                            tabindex="-1"
                            ><span
                              role="img"
                              aria-label="close-circle"
                              class="anticon anticon-close-circle"
                              ><svg
                                viewBox="64 64 896 896"
                                focusable="false"
                                data-icon="close-circle"
                                width="1em"
                                height="1em"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"
                                ></path></svg></span></span></span
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-6 ant-col-xl-4"
            style="padding-left: 4px; padding-right: 4px"
          >
            <div class="ant-form-item">
              <div class="ant-row ant-form-item-row">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <div
                        class="debounce-select_debounce-select__yPE6r debounce-select_debounce-select--mini__OTWGc undefined undefined"
                      >
                        <div
                          class="ant-select ant-select-in-form-item ant-select-single ant-select-allow-clear ant-select-show-arrow ant-select-show-search"
                          style="width: 100%"
                        >
                          <div class="ant-select-selector">
                            <span class="ant-select-selection-search"
                              ><input
                                type="search"
                                id="jobs"
                                autocomplete="off"
                                class="ant-select-selection-search-input"
                                role="combobox"
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                aria-owns="jobs_list"
                                aria-autocomplete="list"
                                aria-controls="jobs_list"
                                aria-activedescendant="jobs_list_0"
                                value="" /></span
                            ><span class="ant-select-selection-placeholder"
                              >Job</span
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
                              class="anticon anticon-down ant-select-suffix"
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-6 ant-col-xl-3"
            style="padding-left: 4px; padding-right: 4px"
          >
            <div class="ant-form-item">
              <div class="ant-row ant-form-item-row">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <div
                        class="ant-select ant-select-in-form-item my-select_my-select__PT7rI my-select_my-select--mini__SXaDU undefined ant-select-multiple ant-select-allow-clear ant-select-show-arrow ant-select-show-search"
                      >
                        <div class="ant-select-selector">
                          <div class="ant-select-selection-overflow">
                            <div
                              class="ant-select-selection-overflow-item ant-select-selection-overflow-item-suffix"
                              style="opacity: 1"
                            >
                              <div
                                class="ant-select-selection-search"
                                style="width: 4px"
                              >
                                <input
                                  @click="showLocationList = !showLocationList"
                                  type="search"
                                  id="location"
                                  autocomplete="off"
                                  class="ant-select-selection-search-input"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-haspopup="listbox"
                                  aria-owns="location_list"
                                  aria-autocomplete="list"
                                  aria-controls="location_list"
                                  aria-activedescendant="location_list_0"
                                  readonly=""
                                  unselectable="on"
                                  value=""
                                  style="opacity: 0"
                                /><span
                                  class="ant-select-selection-search-mirror"
                                  aria-hidden="true"
                                  >&nbsp;</span
                                >
                              </div>
                            </div>
                          </div>
                          <span class="ant-select-selection-placeholder"
                            >Location</span
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
                            class="anticon anticon-down ant-select-suffix"
                          >
                            <svg
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
                              ></path>
                            </svg> </span
                        ></span>
                      </div>
                      <ul v-if="showLocationList" class="location-list">
                        <li
                          v-for="location in locations"
                          :key="location.id"
                          class="location-item"
                          @click="selectLocation(location)"
                        >
                          {{ location.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-6 ant-col-xl-3"
            style="padding-left: 4px; padding-right: 4px"
          >
            <div class="ant-form-item">
              <div class="ant-row ant-form-item-row">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <div
                        class="ant-select my-select_my-select__PT7rI my-select_my-select--mini__SXaDU undefined ant-select-multiple ant-select-allow-clear ant-select-show-arrow ant-select-show-search"
                      >
                        <div class="ant-select-selector">
                          <div class="ant-select-selection-overflow">
                            <div
                              class="ant-select-selection-overflow-item ant-select-selection-overflow-item-suffix"
                              style="opacity: 1"
                            >
                              <div
                                class="ant-select-selection-search"
                                style="width: 4px"
                              >
                                <input
                                  @click="showStatusList = !showStatusList"
                                  type="search"
                                  id="status"
                                  autocomplete="off"
                                  class="ant-select-selection-search-input"
                                  role="combobox"
                                  aria-expanded="false"
                                  aria-haspopup="listbox"
                                  aria-owns="status_list"
                                  aria-autocomplete="list"
                                  aria-controls="status_list"
                                  aria-activedescendant="status_list_0"
                                  readonly=""
                                  unselectable="on"
                                  value=""
                                  style="opacity: 0"
                                /><span
                                  class="ant-select-selection-search-mirror"
                                  aria-hidden="true"
                                  >&nbsp;</span
                                >
                              </div>
                            </div>
                          </div>
                          <span class="ant-select-selection-placeholder"
                            >Status</span
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
                            class="anticon anticon-down ant-select-suffix"
                          >
                            <svg
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
                      <ul v-if="showStatusList" class="status-list">
                        <li
                          v-for="status in statuses"
                          :key="status.id"
                          class="status-item"
                          @click="selectStatus(status)"
                        >
                          {{ status.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-6 ant-col-xl-3"
            style="padding-left: 4px; padding-right: 4px"
          >
            <div class="ant-form-item">
              <div class="ant-row ant-form-item-row">
                <div class="ant-col ant-form-item-control">
                  <div class="ant-form-item-control-input">
                    <div class="ant-form-item-control-input-content">
                      <div
                        class="ant-select my-select_my-select__PT7rI my-select_my-select--mini__SXaDU undefined ant-select-single ant-select-allow-clear ant-select-show-arrow"
                      >
                        <div class="ant-select-selector">
                          <span class="ant-select-selection-search">
                            <input
                              @click="
                                showStatusCandidateList =
                                  !showStatusCandidateList
                              "
                              type="search"
                              id="statusCandidate"
                              autocomplete="off"
                              class="ant-select-selection-search-input"
                              role="combobox"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              aria-owns="statusCandidate_list"
                              aria-autocomplete="list"
                              aria-controls="statusCandidate_list"
                              aria-activedescendant="statusCandidate_list_0"
                              readonly=""
                              unselectable="on"
                              value=""
                              style="opacity: 0"
                          /></span>
                          <span class="ant-select-selection-placeholder"
                            >Candidate Status</span
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
                            class="anticon anticon-down ant-select-suffix"
                          >
                            <svg
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
                              ></path>
                            </svg> </span
                        ></span>
                      </div>
                      <ul
                        v-if="showStatusCandidateList"
                        class="statusCandidate-list"
                      >
                        <li
                          v-for="statusCandidate in statusesCandidates"
                          :key="statusCandidate.id"
                          class="statusCandidate-item"
                          @click="selectStatusCandidate(statusCandidate)"
                        >
                          {{ statusCandidate.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="ant-col ant-col-xs-24 ant-col-sm-24 ant-col-md-8 ant-col-lg-12 ant-col-xl-6"
            style="padding-left: 4px; padding-right: 4px"
          >
            <div class="ant-row" style="margin-left: -4px; margin-right: -4px">
              <div
                class="ant-col ant-col-12"
                style="padding-left: 4px; padding-right: 4px"
              >
                <div class="ant-form-item">
                  <div class="ant-row ant-form-item-row">
                    <div class="ant-col ant-form-item-control">
                      <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                          <div
                            class="ant-picker my-date-picker_my-date-picker__G9OaH my-date-picker_my-date-picker--mini__pvUwq undefined"
                          >
                            <div class="ant-picker-input">
                              <input
                                id="fromDate"
                                readonly=""
                                placeholder="Start date"
                                title=""
                                size="12"
                                autocomplete="off"
                                value=""
                                fdprocessedid="egkc8"
                              /><span class="ant-picker-suffix"
                                ><span
                                  role="img"
                                  aria-label="calendar"
                                  class="anticon anticon-calendar"
                                  ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    ></path></svg></span
                              ></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="ant-col ant-col-12"
                style="padding-left: 4px; padding-right: 4px"
              >
                <div class="ant-form-item">
                  <div class="ant-row ant-form-item-row">
                    <div class="ant-col ant-form-item-control">
                      <div class="ant-form-item-control-input">
                        <div class="ant-form-item-control-input-content">
                          <div
                            class="ant-picker my-date-picker_my-date-picker__G9OaH my-date-picker_my-date-picker--mini__pvUwq undefined"
                          >
                            <div class="ant-picker-input">
                              <input
                                id="toDate"
                                readonly=""
                                placeholder="End date"
                                title=""
                                size="12"
                                autocomplete="off"
                                value=""
                                fdprocessedid="y2t40kf"
                              /><span class="ant-picker-suffix"
                                ><span
                                  role="img"
                                  aria-label="calendar"
                                  class="anticon anticon-calendar"
                                  ><svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="calendar"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      d="M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z"
                                    ></path></svg></span
                              ></span>
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
          <div
            class="ant-col ant-col-24 referral-search-field_referral-search-field__group-btn__Qyg1c"
            style="padding-left: 4px; padding-right: 4px"
          >
            <div
              class="referral-search-field_referral-search-field__group-btn-container__rmG94"
            >
              <div
                id="referral-sort"
                class="referral-sort_referral-sort__HhZmm referral-search-field_referral-search-field__sorting__PbtnD"
              >
                <div class="ant-row ant-row-middle">
                  <div
                    class="ant-space ant-space-horizontal ant-space-align-center"
                    style="gap: 8px"
                  >
                    <div class="ant-space-item" style="">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        class="anticon"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                        style="font-size: 18px"
                      >
                        <path
                          d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"
                        ></path>
                      </svg>
                    </div>
                    <div class="ant-space-item" style="">
                      <span>Sort by </span>
                    </div>
                    <div class="ant-space-item">
                      <div
                        class="ant-select my-select_my-select__PT7rI my-select_my-select--mini__SXaDU undefined ant-select-single ant-select-show-arrow"
                        style="width: 180px"
                      >
                        <div class="ant-select-selector">
                          <span class="ant-select-selection-search">
                            <input
                              @click="showNewestList = !showNewestList"
                              type="search"
                              autocomplete="off"
                              class="ant-select-selection-search-input"
                              role="combobox"
                              aria-expanded="false"
                              aria-haspopup="listbox"
                              aria-owns="rc_select_4_list"
                              aria-autocomplete="list"
                              aria-controls="rc_select_4_list"
                              aria-activedescendant="rc_select_4_list_0"
                              readonly=""
                              unselectable="on"
                              value=""
                              id="rc_select_4"
                              style="opacity: 0"
                          /></span>
                          <span
                            class="ant-select-selection-item"
                            title="Newest apply date"
                            >Newest apply date</span
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
                            class="anticon anticon-down ant-select-suffix"
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
                      <ul v-if="showNewestList" class="Newest-list">
                        <li
                          v-for="Newest in Newests"
                          :key="Newest.id"
                          class="Newest-item"
                          @click="selectNewest(Newest)"
                        >
                          {{ Newest.name }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="ant-space ant-space-horizontal ant-space-align-center undefined"
                style="gap: 8px"
              >
                <div class="ant-space-item" style="">
                  <div class="ant-form-item">
                    <div class="ant-row ant-form-item-row">
                      <div class="ant-col ant-form-item-control">
                        <div class="ant-form-item-control-input">
                          <div class="ant-form-item-control-input-content">
                            <button
                              type="button"
                              class="ant-btn ant-btn-dashed my-button_my-button__8F4rM 1 undefined"
                              fdprocessedid="drmx"
                            >
                              <span>Clear</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="ant-space-item">
                  <div class="ant-form-item">
                    <div class="ant-row ant-form-item-row">
                      <div class="ant-col ant-form-item-control">
                        <div class="ant-form-item-control-input">
                          <div class="ant-form-item-control-input-content">
                            <button
                              type="button"
                              class="ant-btn ant-btn-primary my-button_my-button__8F4rM 1 undefined"
                              fdprocessedid="cdr74j"
                            >
                              <span class="ant-btn-icon"
                                ><svg
                                  stroke="currentColor"
                                  fill="currentColor"
                                  stroke-width="0"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  class="anticon"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                  ></path></svg></span
                              ><span>Search</span>
                            </button>
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
      </form>
    </div>

    <!-- ......from 2................. -->
    <div
      class="ant-row referral-board-view_referral-board-view__CZbiv"
      v-show="selectedView === 'board'"
      style="margin-left: -8px; margin-right: -8px"
    >
      <div
        class="ant-col referral-board-view_referral-board-view__column__yqMvW"
        style=""
      >
        <div class="ant-spin-nested-loading">
          <div class="ant-spin-container">
            <div
              class="referral-board-column_referral-board-column__column__mxQE2"
            >
              <div
                class="referral-board-column_referral-board-column__header__Vi_ws referral-title"
              >
                <div
                  class="referral-board-column_referral-board-column__header-text__N4I1l undefined"
                >
                  New
                </div>
                <span
                  class="referral-board-column_referral-board-column__header-number__CSc_O"
                  >0</span
                >
              </div>
              <div
                class="referral-board-column_referral-board-column__body__7q__y"
                id="referral-board-column__body--15"
                style="height: calc((100vh - 173px) - 125px)"
              >
                <div
                  class="smooth-dnd-container vertical"
                  style="height: 100%; min-height: 200px; overflow-y: scroll"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ant-col referral-board-view_referral-board-view__column__yqMvW"
        style=""
      >
        <div class="ant-spin-nested-loading">
          <div class="ant-spin-container">
            <div
              class="referral-board-column_referral-board-column__column__mxQE2"
            >
              <div
                class="referral-board-column_referral-board-column__header__Vi_ws referral-title"
              >
                <div
                  class="referral-board-column_referral-board-column__header-text__N4I1l referral-board-column_referral-board-column__header-text--25__M69ey"
                >
                  Screening
                </div>
                <span
                  class="referral-board-column_referral-board-column__header-number__CSc_O"
                  >0</span
                >
              </div>
              <div
                class="referral-board-column_referral-board-column__body__7q__y"
                id="referral-board-column__body--25"
                style="height: calc((100vh - 173px) - 125px)"
              >
                <div
                  class="smooth-dnd-container vertical"
                  style="height: 100%; min-height: 200px; overflow-y: scroll"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ant-col referral-board-view_referral-board-view__column__yqMvW"
        style=""
      >
        <div class="ant-spin-nested-loading">
          <div class="ant-spin-container">
            <div
              class="referral-board-column_referral-board-column__column__mxQE2"
            >
              <div
                class="referral-board-column_referral-board-column__header__Vi_ws referral-title"
              >
                <div
                  class="referral-board-column_referral-board-column__header-text__N4I1l referral-board-column_referral-board-column__header-text--30__92tlx"
                >
                  Interview
                </div>
                <span
                  class="referral-board-column_referral-board-column__header-number__CSc_O"
                  >0</span
                >
              </div>
              <div
                class="referral-board-column_referral-board-column__body__7q__y"
                id="referral-board-column__body--30"
                style="height: calc((100vh - 173px) - 125px)"
              >
                <div
                  class="smooth-dnd-container vertical"
                  style="height: 100%; min-height: 200px; overflow-y: scroll"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ant-col referral-board-view_referral-board-view__column__yqMvW"
        style=""
      >
        <div class="ant-spin-nested-loading">
          <div class="ant-spin-container">
            <div
              class="referral-board-column_referral-board-column__column__mxQE2"
            >
              <div
                class="referral-board-column_referral-board-column__header__Vi_ws referral-title"
              >
                <div
                  class="referral-board-column_referral-board-column__header-text__N4I1l referral-board-column_referral-board-column__header-text--35__yBGyl"
                >
                  Offer &amp; Hire
                </div>
                <span
                  class="referral-board-column_referral-board-column__header-number__CSc_O"
                  >0</span
                >
              </div>
              <div
                class="referral-board-column_referral-board-column__body__7q__y"
                id="referral-board-column__body--35"
                style="height: calc((100vh - 173px) - 125px)"
              >
                <div
                  class="smooth-dnd-container vertical"
                  style="height: 100%; min-height: 200px; overflow-y: scroll"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="ant-col referral-board-view_referral-board-view__column__yqMvW"
        style=""
      >
        <div class="ant-spin-nested-loading">
          <div class="ant-spin-container">
            <div
              class="referral-board-column_referral-board-column__column__mxQE2"
            >
              <div
                class="referral-board-column_referral-board-column__header__Vi_ws referral-title"
              >
                <div
                  class="referral-board-column_referral-board-column__header-text__N4I1l referral-board-column_referral-board-column__header-text--50___ShcK"
                >
                  Reject or later
                </div>
                <span
                  class="referral-board-column_referral-board-column__header-number__CSc_O"
                  >0</span
                >
              </div>
              <div
                class="referral-board-column_referral-board-column__body__7q__y"
                id="referral-board-column__body--50"
                style="height: calc((100vh - 173px) - 125px)"
              >
                <div
                  class="smooth-dnd-container vertical"
                  style="height: 100%; min-height: 200px; overflow-y: scroll"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- from 3.. -->
    <div
      class="ant-table-wrapper my-table_my-table__gn35x my-table_my-table--default__6Bjtm referral-table-view_referral-table-view__table__EtJ7Z"
      v-show="selectedView === 'table'"
    >
      <div class="ant-table-container">
        <div class="ant-table-content" style="overflow: auto hidden">
          <table style="width: 1200px; min-width: 100%; table-layout: auto">
            <colgroup>
              <col style="width: 130px" />
              <col style="width: 155px" />
              <col style="width: 155px" />
              <col style="width: 155px" />
              <col style="width: 120px" />
              <col style="width: 155px" />
              <col style="width: 15px" />
              <col style="width: 130px" />
            </colgroup>
            <thead class="ant-table-thead">
              <tr>
                <th aria-label="Refer date" class=" " tabindex="0" scope="col">
                  <div class="ant-table-column-sorters">
                    <span class="ant-table-column-title">Refer date</span
                    ><span
                      class="ant-table-column-sorter ant-table-column-sorter-full"
                      ><span
                        class="ant-table-column-sorter-inner"
                        aria-hidden="true"
                        ><span
                          role="img"
                          aria-label="caret-up"
                          class="anticon anticon-caret-up ant-table-column-sorter-up"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-up"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                            ></path></svg></span
                        ><span
                          role="img"
                          aria-label="caret-down"
                          class="anticon anticon-caret-down ant-table-column-sorter-down"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                            ></path></svg></span></span
                    ></span>
                  </div>
                </th>
                <th aria-label="Candidate" class=" " tabindex="0" scope="col">
                  <div class="ant-table-column-sorters">
                    <span class="ant-table-column-title">Candidate</span
                    ><span
                      class="ant-table-column-sorter ant-table-column-sorter-full"
                      ><span
                        class="ant-table-column-sorter-inner"
                        aria-hidden="true"
                        ><span
                          role="img"
                          aria-label="caret-up"
                          class="anticon anticon-caret-up ant-table-column-sorter-up"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-up"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                            ></path></svg></span
                        ><span
                          role="img"
                          aria-label="caret-down"
                          class="anticon anticon-caret-down ant-table-column-sorter-down"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                            ></path></svg></span></span
                    ></span>
                  </div>
                </th>
                <th aria-label="Email" class=" " tabindex="0" scope="col">
                  <div class="ant-table-column-sorters">
                    <span class="ant-table-column-title">Email</span
                    ><span
                      class="ant-table-column-sorter ant-table-column-sorter-full"
                      ><span
                        class="ant-table-column-sorter-inner"
                        aria-hidden="true"
                        ><span
                          role="img"
                          aria-label="caret-up"
                          class="anticon anticon-caret-up ant-table-column-sorter-up"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-up"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                            ></path></svg></span
                        ><span
                          role="img"
                          aria-label="caret-down"
                          class="anticon anticon-caret-down ant-table-column-sorter-down"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                            ></path></svg></span></span
                    ></span>
                  </div>
                </th>
                <th aria-label="Job" class=" " tabindex="0" scope="col">
                  <div class="ant-table-column-sorters">
                    <span class="ant-table-column-title">Job</span
                    ><span
                      class="ant-table-column-sorter ant-table-column-sorter-full"
                      ><span
                        class="ant-table-column-sorter-inner"
                        aria-hidden="true"
                        ><span
                          role="img"
                          aria-label="caret-up"
                          class="anticon anticon-caret-up ant-table-column-sorter-up"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-up"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                            ></path></svg></span
                        ><span
                          role="img"
                          aria-label="caret-down"
                          class="anticon anticon-caret-down ant-table-column-sorter-down"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                            ></path></svg></span></span
                    ></span>
                  </div>
                </th>
                <th aria-label="Source" class=" " tabindex="0" scope="col">
                  <div class="ant-table-column-sorters">
                    <span class="ant-table-column-title">Source</span
                    ><span
                      class="ant-table-column-sorter ant-table-column-sorter-full"
                      ><span
                        class="ant-table-column-sorter-inner"
                        aria-hidden="true"
                        ><span
                          role="img"
                          aria-label="caret-up"
                          class="anticon anticon-caret-up ant-table-column-sorter-up"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-up"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                            ></path></svg></span
                        ><span
                          role="img"
                          aria-label="caret-down"
                          class="anticon anticon-caret-down ant-table-column-sorter-down"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                            ></path></svg></span></span
                    ></span>
                  </div>
                </th>
                <th aria-label="Status" class=" " tabindex="0" scope="col">
                  <div class="ant-table-column-sorters">
                    <span class="ant-table-column-title">Status</span
                    ><span
                      class="ant-table-column-sorter ant-table-column-sorter-full"
                      ><span
                        class="ant-table-column-sorter-inner"
                        aria-hidden="true"
                        ><span
                          role="img"
                          aria-label="caret-up"
                          class="anticon anticon-caret-up ant-table-column-sorter-up"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-up"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                            ></path></svg></span
                        ><span
                          role="img"
                          aria-label="caret-down"
                          class="anticon anticon-caret-down ant-table-column-sorter-down"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                            ></path></svg></span></span
                    ></span>
                  </div>
                </th>
                <th class="ant-table-cell" scope="col">Chat</th>
                <th
                  aria-label="Pending days"
                  class=" "
                  tabindex="0"
                  scope="col"
                >
                  <div class="ant-table-column-sorters">
                    <span class="ant-table-column-title">Pending days</span
                    ><span
                      class="ant-table-column-sorter ant-table-column-sorter-full"
                      ><span
                        class="ant-table-column-sorter-inner"
                        aria-hidden="true"
                        ><span
                          role="img"
                          aria-label="caret-up"
                          class="anticon anticon-caret-up ant-table-column-sorter-up"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-up"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z"
                            ></path></svg></span
                        ><span
                          role="img"
                          aria-label="caret-down"
                          class="anticon anticon-caret-down ant-table-column-sorter-down"
                          ><svg
                            viewBox="0 0 1024 1024"
                            focusable="false"
                            data-icon="caret-down"
                            width="1em"
                            height="1em"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              d="M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"
                            ></path></svg></span></span
                    ></span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody class="ant-table-tbody">
              <tr class="ant-table-placeholder">
                <td class="ant-table-cell" colspan="8">
                  <div
                    class="ant-table-expanded-row-fixed"
                    style="
                      width: 1219px;
                      position: sticky;
                      left: 0px;
                      overflow: hidden;
                    "
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
                </td>
              </tr>
            </tbody>
          </table>
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
      selectedView: "board",
      showLocationList: false,
      showStatusList: false,
      showStatusCandidateList: false,
      showNewestList: false,
      locations: [
        { id: 1, name: "Ho Chi Minh" },
        { id: 2, name: "Remote" },
        { id: 3, name: "Hanoi" },
        { id: 4, name: "Indonesia" },
      ],
      statuses: [
        { id: 1, name: "Pending" },
        { id: 2, name: "Suggested" },
        { id: 3, name: "Suggestion Rejected" },
        { id: 4, name: "Suggestion Selected" },
      ],
      statusesCandidates: [
        { id: 1, name: "Open" },
        { id: 2, name: "Passive" },
        { id: 3, name: "Close" },
      ],
      Newests: [
        { id: 1, name: "Oldest apply date" },
        { id: 2, name: "Candidate name A-Z" },
        { id: 3, name: "Candidate name Z-A" },
      ],
    };
  },
  computed: {
    boardButtonStyle() {
      return {
        borderRadius: this.selectedView === "board",
      };
    },
    tableButtonStyle() {
      return {
        borderRadius: this.selectedView === "table",
      };
    },
  },
  methods: {
    showBoardView() {
      this.selectedView = "board";
    },
    showTableView() {
      this.selectedView = "table";
    },

    selectLocation(location) {
      this.showLocationList = false;
    },
    selectStatus(status) {
      this.showStatusList = false;
    },
    selectStatusCandidate(StatusCandidate) {
      this.showStatusCandidateList = false;
    },
    selectNewest(Newest) {
      this.showNewestList = false;
    },
  },
};
</script>

<style scoped>
.main {
  width: 100%;
  height: 1000px;
  font-family: Mulish, sans-serif !important;
}

.referral-view-container_referral-view-container__XH_Sf {
  display: flex;
  flex-direction: column;
}

.referral-view-container_referral-view-container__header__5fmUW {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
}

h5.ant-typography {
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
}

.ant-radio-group {
  box-sizing: border-box;
  margin-right: 37px;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 13;
  line-height: 1.5714285714285714;
  list-style: none;
  display: inline-block;
}

.ant-radio-button-wrapper-checked:not(
    .ant-radio-button-wrapper-disabled
  ):first-child {
  border-color: #1aa94c;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  z-index: 1;
  color: #1aa94c;
  background: #ffffff;
}

.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
  z-index: 1;
  color: #1aa94c;
  background: #ffffff;
  border-color: #1aa94c;
}

.ant-radio-button-wrapper input[type="radio"] {
  width: 0;
  height: 0;
  opacity: 0;
  pointer-events: none;
}

.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
}

.ant-radio-button-wrapper {
  position: relative;
  display: inline-block;
  height: 32px;
  margin: 0;
  padding-inline: 15px;
  padding-block: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 30px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-block-start-width: 1.02px;
  border-inline-start-width: 0;
  border-inline-end-width: 1px;
  cursor: pointer;
  transition: color 0.2s, background 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.ant-radio-button-wrapper > .ant-radio-button {
  position: absolute;
  inset-block-start: 0;
  inset-inline-start: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.referral-view-container_referral-view-container__content__hvna6 {
  flex: 1 1;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
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

.ant-row-middle {
  align-items: center;
}

.ant-row {
  display: flex;
  flex-flow: row wrap;
  min-width: 0;
}
.ant-col {
  position: relative;
  max-width: 100%;
  min-height: 1px;
}

.ant-form-item {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  margin-bottom: 24px;
  vertical-align: top;
}
.ant-form-vertical .ant-form-item-row {
  flex-direction: column;
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

.my-input_my-input--max-width__elN8M {
  width: 100%;
}

.my-input_my-input--mini__s0pIM {
  height: 32px;
  border-radius: 8px;
}

.my-input_my-input--default__Eyt3e {
  padding: 0 15px;
  width: 200px;
  border: 1px solid #c8cbcd;
}

.ant-input-affix-wrapper {
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  background-color: #ffffff;
  transition: all 0.2s;
}

.ant-input-affix-wrapper > input.ant-input {
  padding: 0;
  font-size: inherit;
  border: none;
  border-radius: 0;
  outline: none;
}

.ant-input {
  margin: 0;
  color: rgba(0, 0, 0, 0.88);
  line-height: 1.5714285714285714;
  list-style: none;
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  background-color: #ffffff;
  background-image: none;
  transition: all 0.2s;
}

.ant-input-affix-wrapper .ant-input-suffix {
  display: flex;
  flex: none;
  align-items: center;
}

.ant-input-affix-wrapper .ant-input-clear-icon {
  margin: 0;
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  vertical-align: -1px;
  cursor: pointer;
  transition: color 0.3s;
}

/* .ant-col-sm-24 {
        display: block;
        flex: 0 0 80%;
        max-width: 80%;
    } */

.ant-form-vertical .ant-form-item-row {
  flex-direction: column;
}

.ant-select {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  line-height: 1.5714285714285714;
  list-style: none;
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
  width: 100%;
  padding: 0 11px;
}
.ant-select.ant-select-customize-input.ant-select-selector {
  position: relative;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;

  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.debounce-select_debounce-select--mini__OTWGc [class*="ant-select-selector"] {
  border-radius: 8px !important;
  height: 32px !important;
}
.debounce-select_debounce-select__yPE6r [class*="ant-select-selector"] {
  display: flex;
  flex-direction: row;
  border: 1px solid #c8cbcd !important;
  align-items: center;
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
  margin-left: 0 !important;
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

.ant-select-single.ant-select-show-arrow .ant-select-selection-placeholder {
  padding-inline-end: 18px;
}

.ant-select-single .ant-select-selector .ant-select-selection-placeholder {
  transition: none;
  pointer-events: none;
}

.ant-select .ant-select-selection-placeholder {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
  color: rgba(0, 0, 0, 0.25);
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
  font-size: 14px;
  pointer-events: none;
}

.ant-select-multiple .ant-select-selection-placeholder {
  position: absolute;
  top: 50%;
  inset-inline-start: 11px;
  inset-inline-end: 11px;
  transform: translateY(-50%);
  transition: all 0.3s;
}

.ant-select .ant-select-selection-placeholder {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex: 1;
  color: rgba(0, 0, 0, 0.25);
  pointer-events: none;
}
.my-select_my-select__PT7rI[class*="ant-select"] {
  width: 100%;
}

.my-select_my-select__PT7rI [class*="ant-select-selector"] {
  border-radius: 6px;
  padding-left: 15px !important;
  display: flex;
  flex-direction: row;
  border: 1px solid #c8cbcd !important;
  align-items: center;
  height: 32px !important;
}

.ant-select-multiple .ant-select-selector {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1px 4px;
}

.ant-col-lg-12 {
  display: block;
  flex: 0 0 25%;
  max-width: 25%;
}

.ant-col-md-8 {
  display: block;
  flex: 0 0 12%;
  max-width: 12%;
}

.my-date-picker_my-date-picker--mini__pvUwq {
  height: 32px;
  border-radius: 8px !important;
}

.my-date-picker_my-date-picker__G9OaH {
  border: 1px solid #c8cbcd;
  height: 32px;
  width: 100%;
}

.ant-picker {
  width: 175px;
  box-sizing: border-box;
  margin: 0;
  padding: 4px 11px 4px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1;
  list-style: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  transition: border 0.2s, box-shadow 0.2s;
}
.ant-picker .ant-picker-input {
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
}

.ant-picker .ant-picker-input > input:placeholder-shown {
  text-overflow: ellipsis;
}
.ant-picker .ant-picker-input > input {
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 1px;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  border-width: 1px;
  border-style: solid;
  border-color: #d9d9d9;
  border-radius: 0;
  transition: all 0.2s;
  flex: auto;
  height: auto;
  background: transparent;
  border: 0;
}

.ant-picker .ant-picker-suffix {
  display: flex;
  flex: none;
  align-self: center;
  margin-inline-start: 4px;
  color: rgba(0, 0, 0, 0.25);
  line-height: 1;
  pointer-events: none;
}

.ant-picker .ant-picker-suffix > * {
  vertical-align: top;
}

.referral-search-field_referral-search-field__group-btn__Qyg1c {
  display: flex;
  flex-direction: row;
}

.ant-col-24 {
  display: block;
  flex: 0 0 98.5%;
  max-width: 98.5%;
}

.referral-search-field_referral-search-field__group-btn-container__rmG94 {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.referral-search-field_referral-search-field__sorting__PbtnD {
  justify-content: flex-start !important;
}
.referral-sort_referral-sort__HhZmm {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* justify-content: flex-end; */
  margin-bottom: 15px;
  margin-left: 10px;
}

.ant-space {
  display: inline-flex;
}

.ant-select .ant-select-selection-item {
  flex: 1;
  font-weight: normal;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.my-button_my-button__8F4rM {
  border-radius: 8px !important;
  box-shadow: none !important;
  outline: none !important;
}

.ant-btn-dashed {
  background-color: #ffffff;
  border-color: #d9d9d9;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.02);
  border-style: dashed;
}

.ant-btn {
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: 6px;
}
.ant-btn {
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;

  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  line-height: 1.5714285714285714;
  color: rgba(0, 0, 0, 0.88);
}

.ant-btn-primary {
  color: #fff;
  background-color: #1aa94c;
  box-shadow: 0 2px 0 rgba(8, 102, 28, 0.15);
}

.ant-col-25 {
  display: block;
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  max-width: 100%;
  margin-left: 10px;
}
.ant-col-xl-6 {
  display: block;
  flex: 0 0 25%;
  max-width: 25%;
}
/* ..................qeqew.......... */
.referral-board-view_referral-board-view__CZbiv {
  min-width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  height: fit-content;
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 10px;
  margin-right: 15px;
}

.referral-board-view_referral-board-view__column__yqMvW {
  width: 280px;
  margin-left: 15px;
}
.ant-spin-nested-loading {
  position: relative;
}
.referral-board-column_referral-board-column__column__mxQE2 {
  border-radius: 8px;
  padding: 0 5px 0 10px;
  background-color: #fafafa;
  width: 282px;
  border: 1px solid #dee0e3;
}
.referral-board-column_referral-board-column__header__Vi_ws {
  width: calc(100% - 24px);
  display: flex;
  flex-wrap: nowrap;
  margin: 15px 10px;
}

.referral-board-column_referral-board-column__header__Vi_ws {
  width: calc(100% - 24px);
  display: flex;
  flex-wrap: nowrap;
  margin: 15px 10px;
}
.referral-board-column_referral-board-column__header-text__N4I1l {
  padding: 2px 10px;
  border-radius: 50px;
}
.referral-board-column_referral-board-column__header-text__N4I1l {
  padding: 2px 10px;
  border-radius: 50px;
}

.referral-board-column_referral-board-column__body__7q__y {
  width: 100%;
  min-height: 100%;
  height: 80vh;
}

.referral-board-column_referral-board-column__header-text--25__M69ey {
  background-color: #def2fc;
}

.referral-board-column_referral-board-column__header-text--30__92tlx {
  background-color: #dbf5f2;
}

.referral-board-column_referral-board-column__header-text--35__yBGyl {
  background-color: #e3eafd;
}

.referral-board-column_referral-board-column__header-text--50___ShcK {
  background-color: #f9e3e2;
}

.ant-table-container {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  list-style: none;
  font-family: Mulish, sans-serif !important;
  background: #ffffff;
  border-radius: 8px 8px 0 0;
}

table {
  border-radius: 8px;
  transition: all 0.2s ease-in;
  border: 2px solid #dee0e3;
}

.ant-table-wrapper table {
  /* width: 100%; */
  text-align: start;
  border-collapse: separate;
  border-spacing: 0;
}

.ant-table-wrapper
  .ant-table-container
  table
  > thead
  > tr:first-child
  > *:first-child {
  border-start-start-radius: 8px;
}

.ant-table-wrapper .ant-table-thead > tr > th {
  position: relative;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  text-align: start;
  background: #fdfdfd;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s ease;
}

.ant-table-wrapper .ant-table-column-sorters {
  display: flex;
  flex: auto;
  align-items: center;
  justify-content: space-between;
}

.referral-table-view_referral-table-view__table__EtJ7Z {
  margin-top: 15px;
  margin-bottom: 60px;
}

.ant-table-wrapper .ant-table-column-title {
  position: relative;
  z-index: 1;
  flex: 1;
}

.ant-table-wrapper .ant-table-column-sorter {
  margin-inline-start: 4px;
  color: rgba(0, 0, 0, 0.29);
  font-size: 12;
  transition: color 0.3s;
}
.ant-table-wrapper .ant-table-column-sorter-inner {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
}

.ant-table-wrapper
  .ant-table-column-sorter
  .ant-table-column-sorter-up
  + .ant-table-column-sorter-down {
  margin-top: -0.3em;
}

.ant-table-wrapper
  .ant-table-thead
  > tr
  > th:not(:last-child):not(.ant-table-selection-column):not(
    .ant-table-row-expand-icon-cell
  ):not([colspan])::before {
  position: absolute;
  top: 50%;
  inset-inline-end: 0;
  width: 1px;
  height: 1.6em;
  background-color: #f0f0f0;
  transform: translateY(-50%);
  transition: background-color 0.2s;
  content: "";
}

.ant-table-wrapper .ant-table-column-sorters::after {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  content: "";
}

.my-table_my-table--default__6Bjtm [class*="ant-spin-container"] table th {
  background-color: #fff;
}

.my-table_my-table__gn35x [class*="ant-table-cell"] {
  padding: 8px 10px;
}

.ant-table-wrapper .ant-table-tbody > tr.ant-table-placeholder {
  text-align: center;
  color: rgba(0, 0, 0, 0.25);
}

/* .ant-table-wrapper .ant-table-expanded-row-fixed {
        position: relative;
        margin: -16px -16px;
        padding: 16px 16px;
    } */

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
.ant-empty-normal .ant-empty-image {
  height: 40px;
}

.location-list {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 150px;
  list-style: none;
  width: 150px;
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
.status-list {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 150px;
  list-style: none;
  width: 150px;
  padding: 4px;
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

.statusCandidate-list {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 150px;
  list-style: none;
  width: 150px;
  padding: 4px;
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

.Newest-list {
  position: absolute;
  background-color: white;
  border: 1px solid #ccc;
  max-height: 150px;
  list-style: none;
  width: 150px;
  padding: 4px;
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

.statusCandidate-item li,
.Newest-item li,
.status-item li,
.location-item li {
  padding: 6px 15px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.statusCandidate-item li,
.Newest-item li,
.status-item li:hover,
.location-item li:hover {
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
.layout_layout--fit-screen__JRYen {
    overflow: hidden;
    margin-bottom: 0;
    height: calc(100vh - 64px - 20px);
}
</style>
