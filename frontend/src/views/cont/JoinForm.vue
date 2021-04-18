<template>
    <v-container fill-height fluid>
        <v-row align="center"
        justify="center">
            <v-col cols="12"
            sm="6">
            <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >   
                <v-text-field
                v-model="this.name"
                :counter="10"
                :rules="nameRules"
                label="이름"
                required
                ></v-text-field>
                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
                ></v-text-field>
                    
                <v-text-field
                v-model="phone"
                label="핸드폰번호"
                :rules="phoneRules"
                required
                ></v-text-field>

                <v-radio-group
                label="성별"
                row
                >
                <v-radio
                    label="여자"
                    value="male"
                ></v-radio>
                <v-radio
                    label="남자"
                    value="female"
                ></v-radio>
                </v-radio-group>
                
                <v-subheader>관심분야</v-subheader>
                <v-row>
                <v-col cols="3">
                    <v-checkbox
                    label="관심분야1"
                    color="indigo"
                    value="indigo"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="3">
                    <v-checkbox
                    label="관심분야2"
                    color="indigo darken-3"
                    value="indigo darken-3"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="3">
                    <v-checkbox
                    label="관심분야3"
                    color="indigo"
                    value="indigo"
                    hide-details
                    ></v-checkbox>
                </v-col>
                <v-col cols="3">
                    <v-checkbox
                    label="관심분야4"
                    color="indigo darken-3"
                    value="indigo darken-3"
                    hide-details
                    ></v-checkbox>
                </v-col>
                </v-row>
                
                <v-row>
                <v-textarea
                counter
                label="개인정보처리방침"
                :value="policy"
                readonly
                ></v-textarea>
                </v-row>
                <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="개인정보 처리 방침에 동의하십니까?"
                required
                ></v-checkbox>
                
                <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="validate"
                >
                가입
                </v-btn>

                <v-btn
                color="error"
                class="mr-4"
                @click="reset"
                >
                초기화
                </v-btn>
            </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
 
export default ({
    data: () => ({
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || '이름 형식이 올바르지않습니다.',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail 형식이 올바르지 않습니다.',
        ],
        phone: '',
        phoneRules: [
            v => !!v || 'Phone is required',
            v => /.+@.+\..+/.test(v) || '- 생략하여 입력해주세요.',
        ],
        checkbox: false,
        code : '',
        policy: '1. 개인정보 처리방침이란?\n\
        주식회사 유비케어(이하"회사")는 이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며, \n\
        ‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다.\n 2. 개인정보 수집\n\
        서비스 제공을 위한 필요 최소한의 개인정보를 수집하고 있습니다.\n\
        회원 가입 시 또는 서비스 이용 과정에서 홈페이지 또는 개별 어플리케이션이나 프로그램 등을 통해 아래와 같은 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.',
    }),
    created() {
        this.getAccessToken();
    },
    methods: {
        // 토큰발급
        async getAccessToken() {
            const kakaoHeader = {
                'Authorization': 'bfb854d5578bcc7cc0fa5d5b1272933b',//ADMIN 키
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            };
            console.log('kakao authorization');
            try {
                const data = {
                    grant_type: 'authorization_code',
                    client_id: '9b5dd25de9bd0da6ed28afef748d1371',//REST API 키
                    redirect_uri: 'http://localhost:8080/cont/joinForm',
                    // 인가코드
                    code: this.$route.query.code,
                };
                const queryString = Object.keys(data)
                    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
                    .join('&');
                const response = await this.$axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
                
                if(response){
                    if (response.statusCode == 400) {
                        return console.log('카카오 로그인 실패');
                    }

                    // 토큰할당
                    window.Kakao.Auth.setAccessToken(response.data.access_token);
                    this.getKakaoUserInfo();
                }
            } catch (e) {
                return e;
            }
        },
        // 이용자 정보 호출
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
            this.name = res.kakao_account.profile.nickname;
        },
        validate () {
        this.$refs.form.validate();
        },
        reset () {
            this.$refs.form.reset();
        },
        resetValidation () {
            this.$refs.form.resetValidation();
        },
    },
})
</script>
