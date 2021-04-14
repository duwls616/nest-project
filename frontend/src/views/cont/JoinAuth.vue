<template>
    <div>
        {{$route.query.code}}
    </div>
</template>
<script>

export default ({
    data: () => ({
        data : {},
        code : '',
    }),
    created() {
        this.getAccessToken();
        console.log('111');
    },
    methods: {
        async getAccessToken() {
            const kakaoHeader = {
                'Authorization': 'bfb854d5578bcc7cc0fa5d5b1272933b',
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            };
            console.log('loginWithKakao');
            try {
                const data = {
                    grant_type: 'authorization_code',
                    client_id: '9b5dd25de9bd0da6ed28afef748d1371',
                    redirect_uri: 'http://localhost:8080/cont/joinAuth',
                    code: this.$route.query.code,
                };
                const queryString = Object.keys(data)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                    .join('&');
                const result = await this.$axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
                if(result){
                    console.log('카카오 토큰', result.data.access_token);
                }
            } catch (e) {
                return e;
            }
        },
    },
})
</script>
