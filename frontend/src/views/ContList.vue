<template>
    <v-container
      class="py-8 px-6"
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
              <template v-for="item in contList">
                <v-list-item

                  :key="item"
                >
                  <v-list-item-avatar color="grey darken-1">
                  </v-list-item-avatar>

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
                  <img src="https://developers.kakao.com/assets/img/about/logos/kakaolink/kakaolink_btn_small.png"/>
                </v-list-item-avatar>
                </v-list-item>

                <v-divider
                  v-if="item !== 6"
                  :key="`divider-${item}`"
                  inset
                ></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script src="https://developers.kakao.com/sdk/js/kakao.min.js"/>
<script>Kakao.init('5d3c28c356903cf178b0ff3f1554d59b');</script>
<script>
export default {
  data: () => ({
    cards: ['고객리스트'],
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
    drawer: null,
  }),
  created() {
    this.getContList();
  },
  methods: {
    getContList(){
      this.$axios.get('/api/cont/list')
      .then((response) => {
        this.contList = response.data;
      }).catch((ex)=> {
        console.log('err!!!'+ ex);
      })

    },
  }
}
</script>