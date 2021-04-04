<template>
    <v-container
      class="py-8 px-10"
      fluid
    >
      <v-row>
        <v-col
          v-for="card in cards"
          :key="card"
          cols="12"
        >
          <v-card>
            <v-subheader>{{ card }}</v-subheader>

            <v-list two-line>
              <template v-for="(item,idx) in contList">
                <v-list-item

                  :key="idx"
                >
                  <v-list-item-icon>
                    <v-icon
                      large
                      right
                    >
                      mdi-account
                    </v-icon>
                  </v-list-item-icon>

                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      {{ item.name }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ item.comp }} / {{ item.job }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <img v-bind:id="`kakao-link-btn-${item.no}`" src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
                  @click="sendKakaoLink(`${item.no}`);"/>
                  <v-list-item-avatar
                  tile
                  size="30"
                  >
                </v-list-item-avatar>
                </v-list-item>

                <v-divider
                  v-if="idx !== 6"
                  :key="`divider-${idx}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: ['고객목록'],
    contList: [
    {
      id: '',
      name: '',
      comp: '',
      age: '',
      gender: '',
      job: '',
    },
    ],
  }),
  created() {
    this.getContList();
  },
  methods: {
    getContList() {
      this.$axios.get('/api/cont/list')
      .then((response) => {
        this.contList = response.data;
      }).catch((ex)=> {
        console.log('err!!!'+ ex);
      })

    },
    sendKakaoLink(no){
      window.Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn-' + no,
        objectType: 'feed',
        content: {
          title: '유비케어 신장사업부',
          description: '채널추가 및 회원가입 하시면더 많은 정보를 받아보실 수 있습니다.',
          imageUrl:
            'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '가입하기',
            link: {
              mobileWebUrl: 'http://localhost:8080/join/' + no,
              webUrl: 'http://localhost:8080/join/' + no,
            },
          },
          {
            title: '채널추가',
            link: {
              mobileWebUrl: 'http://localhost:8080/join/' + no,
              webUrl: 'http://localhost:8080/join/' + no,
            },
          },
        ],
      });
    },
  },
  
}
</script>