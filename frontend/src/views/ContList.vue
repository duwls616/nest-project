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

                  <v-list-item-content>
                    <v-list-item-title class="headline mb-1">
                      {{ item.name }}
                    </v-list-item-title>

                    <v-list-item-subtitle>
                      {{ item.comp }} / {{ item.job }}
                    </v-list-item-subtitle>
                  </v-list-item-content>
                  <v-list-item-avatar
                  tile
                  size="30"
                  >
                  <img id="kakao-link-btn" src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_medium.png"
                  @click="sendKakaoLink();"/>
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
    sendKakaoLink(){
      window.Kakao.Link.createCustomButton({
        container: '#kakao-link-btn',
        templateId: 48876,
        templateArgs: {
          title:
            '유비케어 회원가입',
          description:
            '채널추가 및 회원가입을 하시면 더 많은 정보를 받아보실 수 있습니다.',
        },
      });
    },
  },
  
}
</script>