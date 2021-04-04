<template>
<v-container
    class="py-8 px-10"
    fluid
>
    <v-row>
        <v-card
        class="mx-auto"
        color="#26c6da"
        dark
        max-width="400"
        >
        <v-card-actions>
        <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
            <v-img
                class="elevation-6"
                alt=""
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
            ></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
            <v-list-item-title>Evan You</v-list-item-title>
            </v-list-item-content>

            <v-row
            align="center"
            justify="end"
            >
            <v-icon class="mr-1">
                mdi-heart
            </v-icon>
            <span class="subheading mr-2">256</span>
            <span class="mr-1">·</span>
            <v-icon class="mr-1">
                mdi-share-variant
            </v-icon>
            <span class="subheading">45</span>
            </v-row>
        </v-list-item>
        </v-card-actions>
        </v-card>
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