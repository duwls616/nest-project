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
    },
    methods: {
        async getAccessToken() {
            const kakaoHeader = {
                'Authorization': 'bfb854d5578bcc7cc0fa5d5b1272933b',//admin 키
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            };
            console.log('kakao authorization');
            try {
                const data = {
                    grant_type: 'authorization_code',
                    client_id: '9b5dd25de9bd0da6ed28afef748d1371',//rest api 키
                    redirect_uri: 'http://localhost:8080/cont/joinAuth',
                    code: this.$route.query.code,
                };
                const queryString = Object.keys(data)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                    .join('&');
                const result = await this.$axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
                
                if(result){
                    window.Kakao.Auth.setAccessToken(result.data.access_token);
                    this.getKakaoUserInfo();
                }
            } catch (e) {
                return e;
            }
        },
        async getKakaoUserInfo() {
            let res = '';
            await window.Kakao.API.request({
                url: '/v2/user/me',
                success: function (response) {
                    res = response;
                },
                fail: function (error) {
                    console.log(error);
                },
            });
            console.log('카카오 계정 정보', res);
            return res;
            }
    },
})
</script>
