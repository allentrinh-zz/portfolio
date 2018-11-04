<template>
  <div id="contact-form">
    <div class="form-wrapper content">
      <h4>Introduce yourself</h4>
      <form @submit.prevent="submit" class="contact-form">
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
          <span class="email-error"><i class="fa fa-exclamation-circle"></i> Oops! This email doesn't look valid. Please try again.</span>
        </label>
        <label>
          <textarea name="message" id="message" cols="30" rows="10"
            @keyup="checkFilled(contactFormValues.message)"
            v-model="contactFormValues.message.value"
            :class="{ 'is-filled': contactFormValues.message.isFilled }"></textarea>
          <span class="placeholder">Message</span>
        </label>
        <div class="button-wrapper has-text-right">
          <button type="submit" class="button is-primary">Let's talk! <i class="fa fa-paper-plane"></i></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      contactFormValues: {
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
      },
    };
  },
  methods: {
    submit() {
      this.contactFormValues.submitted = true;

      let name = this.contactFormValues.name.value;
      let email = this.contactFormValues.email.value;
      let message = this.contactFormValues.message.value;

      if (name && email && message) {

      } else {

      }
    },
    checkFilled(field) {
      console.log(field);
      if (field.value !== '') {
        field.isFilled = true;
      }
      else {
        field.isFilled = false;
      }
    },
    validateEmail() {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      this.contactFormValues.email.valid = re.test(String(this.contactFormValues.email.value).toLowerCase());
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles.scss';

.form-wrapper {
  padding: 2em 1em;
  background :#f4f4f4;
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
</style>
