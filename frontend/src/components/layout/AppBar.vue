<template>
    <div>
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        <v-navigation-drawer
        id="app-drawer"
        v-model="drawer"
        app
        dark
        :color="colors.menu_background_color"
        floating
        persistent
        mobile-breakpoint="960"
        width="280"
        >
        <v-sheet
            color="#263238"
            class="pa-4"
        >
            <v-avatar
            class="mb-4"
            color="grey darken-1"
            size="64"
            ></v-avatar>

            <div>관리자</div>
        </v-sheet>

        <v-divider></v-divider>
        <div>
        <v-layout
        class="fill-height"
        tag="v-list"
        column
        >
            <v-list>
            <v-list-item>
                <v-toolbar-title></v-toolbar-title>
            </v-list-item>
            <v-list-item-group active-class="white--text">
                <template v-for="menu in menus">
                <template v-if="menu.childrens">
                    <v-list-group
                    :prepend-icon="menu.icon"
                    :key="menu.id"
                    >
                    <template v-slot:activator>
                        <v-list-item-title>{{menu.title}}</v-list-item-title>
                    </template>
                    <template v-for="children in menu.childrens">
                        <v-list-item
                        @click="movePage(children.target);"
                        :key="children.id"
                        class="ml-2"
                        :active-class="`${colors.menu_selected_color} accent-4 white--text`"
                        >
                        <v-list-item-icon :active-class="`${colors.menu_selected_color} accent-4`">
                            <v-icon>{{children.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{children.title}}
                        </v-list-item-title>
                        </v-list-item>
                    </template>
                    </v-list-group>
                </template>
                <template v-else>
                    <v-list-item
                    @click="movePage(menu.target);"
                    :key="menu.id"
                    :active-class="`${colors.menu_selected_color} accent-4 white--text`"
                    >
                    <v-list-item-icon>
                        <v-icon>{{menu.icon}}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>{{menu.title}}</v-list-item-title>
                    </v-list-item>
                </template>
                </template>
            </v-list-item-group>
            </v-list>
        </v-layout>
        </div>  
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data: () => ({
      drawer: null,
      menus: [
        {
          id: 0,
          icon: "mdi-apps",
          title: "홈",
          target: "/"
        },
        {
          id: 1,
          icon: "mdi-account-multiple",
          title: "고객목록",
          target: "/mr/contlist"
        },
        {
          id:2,
          icon: "mdi-book-open-page-variant",
          title: "브로셔",
          childrens: [
            {
              id: 21,
              icon: "",
              title: "브로셔 관리",
            },
            {
              id: 22,
              icon: "",
              title: "브로셔 발송",
            }
          ]
        },
        {
          id:3,
          icon: "mdi-wechat",
          title: "웹세미나",
          childrens: [
            {
              id: 31,
              icon: "",
              title: "세미나 관리",
              target: "seminarMng"
            },
            {
              id: 32,
              icon: "",
              title: "신청현황",
              target: "seminarRequest"
            },
          ]
        },
        {
          id:4,
          icon: "mdi-book",
          title: "설문조사",
          childrens: [
            {
              id: 41,
              icon: "",
              title: "설문관리",
              target: "surveyMng"
            },
            {
              id: 42,
              icon: "",
              title: "설문결과",
              target: "surveyResult"
            },
          ]
        },
        {
          id:5,
          icon: "mdi-chart-bar",
          title: "통계",
          childrens: [
            {
              id: 51,
              icon: "",
              title: "이용자별 통계",
              target: "statistics"
            },
          ]
        },
        {
          id:6,
          icon: "mdi-dots-horizontal",
          title: "설정",
          childrens: [
            {
              id: 61,
              icon: "",
              title: "템플릿 관리",
              target: "template"
            },
          ]
        }
      ],
      colors: {
        menu_background_color: '#263238',
        menu_selected_color: 'red',
      },
    }),
    methods: {
      movePage(target){
        this.$router.push(target);
      },
    },
  }
</script>
