<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="500"
  >
    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      >
        <v-img 
        class="kakao_btn"
        @click="loginWithKakao"
        src="@/assets/login/kakao_login_medium_wide.png">
        </v-img>
      </v-row>

      <v-divider class="mx-4"></v-divider>
        <v-card-text>
        <div class="text--primary">회원가입을 하시면 더 많은 정보를 받아보실 수 있습니다.</div>
        </v-card-text>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  methods: {
    loginWithKakao() {
        const params = {
            redirectUri: "http://localhost:8080/cont/joinForm",
        };
        window.Kakao.Auth.authorize(params);
    },
  }
}
</script>