<template>
    <div>
        <h3>Please Login with your Google account to continue</h3>
        <!-- <button @click="login">Login with Google</button> -->
        <div class="d-flex justify-content-center mt-5 google-btn-container">
            <div class="google-btn" @click="login">
                <div class="google-icon-wrapper">
                    <img
                        class="google-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    />
                </div>
                <p class="btn-text">
                    <b>Sign in with google</b>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
  methods: {
    login () {
      const self = this
      var provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope(
        'https://www.googleapis.com/auth/contacts.readonly'
      )
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function (result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken
          // The signed-in user info.
          var user = result.user
          // console.log("this.$router", this.$router);
          self.$router.push('/home')
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          console.log('error', error)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
$white: #fff;
$google-blue: #4285f4;
$button-active-blue: #1669f2;

.google-btn-container {
	transform: scale(2);
}

.google-btn {
    width: 184px;
    height: 42px;
    background-color: $google-blue;
    border-radius: 2px;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
    .google-icon-wrapper {
        position: absolute;
        margin-top: 1px;
        margin-left: 1px;
        width: 40px;
        height: 40px;
        border-radius: 2px;
        background-color: $white;
    }
    .google-icon {
        // position: absolute;
        margin-top: 11px;
        // margin-left: 11px;
        width: 18px;
        height: 18px;
    }
    .btn-text {
        float: right;
        margin: 11px 11px 0 0;
        color: $white;
        font-size: 14px;
        letter-spacing: 0.2px;
        font-family: "Roboto";
    }
    &:hover {
        box-shadow: 0 0 6px $google-blue;
    }
    &:active {
        background: $button-active-blue;
    }
}

@import url(https://fonts.googleapis.com/css?family=Roboto:500);
</style>
