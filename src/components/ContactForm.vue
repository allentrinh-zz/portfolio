<template>
  <div id="contact-form">
    <div class="form-wrapper content">
      <h4>Introduce yourself</h4>
      <form @submit.prevent="submit" class="contact-form">
        <div class="alert" v-show="contactFormValues.hasErrors">
          <p class="has-text-danger">All fields are required. Is something missing?</p>
        </div>
        <div class="alert" v-show="contactFormValues.hasSuccess">
          <p class="has-text-success">Success! I'll be in touch! In the mean time, here's some <router-link to="/blog">light reading.</router-link></p>
        </div>
        <input type="hidden" name="phone" value="0it8hePl4n"
          v-model="contactFormValues.phone.value">
        <label>
          <input type="text" name="name" autocomplete="off"
            @keyup="checkFilled(contactFormValues.name)"
            v-model="contactFormValues.name.value"
            :class="{ 'is-filled': contactFormValues.name.isFilled }">
          <span class="placeholder">Name</span>
        </label>
        <label :class="{ 'not-valid': !contactFormValues.email.valid }">
          <input type="email" name="email" autocomplete="off"
            @keyup="checkFilled(contactFormValues.email);"
            @blur="validateEmail()"
            v-model="contactFormValues.email.value"
            :class="{ 'is-filled': contactFormValues.email.isFilled }">
          <span class="placeholder">Email</span>
          <span class="email-error"><i class="fa fa-exclamation-circle"></i> Oops! This needs to be a valid email. Please try again.</span>
        </label>
        <label>
          <textarea name="message" id="message" cols="30" rows="10"
            @keyup="checkFilled(contactFormValues.message)"
            v-model="contactFormValues.message.value"
            :class="{ 'is-filled': contactFormValues.message.isFilled }"></textarea>
          <span class="placeholder">Message</span>
        </label>
        <div class="button-wrapper has-text-right">
          <button type="submit" class="button is-primary" :disabled="contactFormValues.submitted">
            <span v-if="contactFormValues.submitted" class="heart">
              <span></span>
            </span>
            <span v-else>
              Let's talk! <i class="fa fa-paper-plane"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data() {
    return {
      contactFormValues: {
        phone: {
          value: '0it8hePl4n',
          isFilled: true,
        },
        name: {
          value: '',
          isFilled: false,
        },
        email: {
          value: '',
          valid: true,
          isFilled: false,
        },
        message: {
          value: '',
          maxLength: 255,
          isFilled: false,
        },
        submitted: false,
        hasErrors: false,
        hasSuccess: false,
      },
    };
  },
  methods: {
    submit() {
      this.contactFormValues.submitted = true;

      const name = this.contactFormValues.name.value.trim();
      const email = this.contactFormValues.email.value.trim();
      const message = this.contactFormValues.message.value.trim();
      const phone = this.contactFormValues.phone.value.trim();

      if (name && email && message && phone) {
        axios.post('http://lvh.me/mailer.php', {
          name, email, message, phone,
        })
          .then((response) => {
            if (response.status === 200) {
              this.resetForm();
              this.contactFormValues.hasSuccess = true;
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        this.contactFormValues.hasErrors = true;
        this.contactFormValues.submitted = false;
      }
    },
    checkFilled(field) {
      this.contactFormValues.hasErrors = false;
      this.contactFormValues.hasSuccess = false;
      if (field.value !== '') {
        field.isFilled = true;
      } else {
        field.isFilled = false;
      }
    },
    validateEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.contactFormValues.email.valid = re.test(String(this.contactFormValues.email.value).toLowerCase());
    },
    resetForm() {
      this.contactFormValues.name.value = '';
      this.contactFormValues.name.isFilled = false;
      this.contactFormValues.email.value = '';
      this.contactFormValues.email.isFilled = false;
      this.contactFormValues.message.value = '';
      this.contactFormValues.message.isFilled = false;
      this.contactFormValues.submitted = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.form-wrapper {
  padding: 2em 1em;
  background: #f4f4f4;
  color: $color;
  border-radius: 2px;
  @include box-shadow;
}

label {
  display: block;
  position: relative;
  span.placeholder {
    position: absolute;
    left: 8px;
    top: 33px;
    font-size: 0.85em;
    opacity: 0.75;
    @include transition;
  }
}

input {
  background: #fff;
  width: 100%;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.35);
  margin-top: 2em;
  margin-bottom: 0.5em;
  padding: 0.5em;
  &:focus, &:active, &.is-filled {
    + span.placeholder {
      transform: translate(-8px, -30px);
      opacity: 1;
    }
  }
}

textarea {
  background: #fff;
  width: 100%;
  resize: none;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.35);
  margin-top: 2em;
  margin-bottom: 0.5em;
  padding: 0.5em;
  color: $color;
  &:focus, &:active, &.is-filled {
    + span.placeholder {
      transform: translate(-8px, -30px);
    }
  }
}

button {
  i {
    margin-left: 8px
  }
}

.not-valid {
  input {
    box-shadow: 0 0 10px #f00;
    outline: 0;
  }
  .email-error {
    display: block;
  }
}

.email-error {
  color: #f00;
  font-size: 0.8em;
  display: none;
}

.heart {
  display: block;
  width: 100%;
  height: 100%;
  position: relative;
  -webkit-animation: heartbeat 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  animation: heartbeat 1s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 20px !important;
  height: 20px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}

.heart span {
  display: block;
  top: 6px;
  left: 2px;
  position: absolute;
  width: 15px;
  height: 15px;
  background: #fff;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}

.heart span:after,
.heart span:before {
  content: '';
  position: absolute;
  display: block;
  width: 15px;
  height: 15px;
  background: #fff;
}


.heart span:before {
  left: -14px;
  border-radius: 50% 0 0 50%;
}

.heart span:after {
  top: -14px;
  border-radius: 50% 50% 0 0;
}

.has-text-success {
  a {
    color: lighten(#23d160, 10%);
    text-decoration: underline;
  }
}

@keyframes heartbeat {
  0% {
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
  }
  5% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  39% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  45% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  60% {
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
  }
  100% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
}

@-webkit-keyframes heartbeat {
  0% {
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
  }
  5% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  39% {
    -webkit-transform: scale(0.75);
    transform: scale(0.75);
  }
  45% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  60% {
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
  }
  100% {
    -webkit-transform: scale(0.8);
    transform: scale(0.8);
  }
}
</style>
