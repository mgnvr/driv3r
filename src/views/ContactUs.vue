<template>
  <div>
    <div class="header">
      <div class="container container-header">

        <div class="logo">
        <router-link class="about-link" tag="a" to="/" title="На главную">
        <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto" alt="DriV3R">
        </router-link>
      </div>

      <div class="header-items">

      <p class="header-item">
        Мы находимся: г. Магнитогорск, ул. Ленина, 83 | ТЦ "Континент", 3 этаж
      </p>

      <p class="header-item">
        Мы работаем: ежедневно с 10:00 до 21:00
      </p>

      </div>

      <div class="header-info">

      <div class="tel">
        <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
      </div>

      <div class="social">
        <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
          <img :src="this.publicPath + 'vk.svg'" alt="" width="30px" height="30px">
        </a>
      </div>

      <router-link class="link" tag="a" to="/about" title="О нас">О нас</router-link>
        
      </div>

      </div>
    </div>

    <div class="container container-about">

      <vk-breadcrumb>
        <router-link class="home" tag="vk-breadcrumb-item" to="/" title="Вернуться на главную страницу">Главная</router-link>
        <vk-breadcrumb-item>Забронировать</vk-breadcrumb-item>
      </vk-breadcrumb>

      <h1 class="about-header">Забронируйте место</h1>

<!--       <form class="contact-form" @submit.prevent="sendEmail">
        <label>Name </label>
        <input type="text" name="user_name"><br>
        <label>Email </label>
        <input type="email" name="user_email"><br>
        <label>Message </label>
        <textarea name="message"></textarea><br>
        <input type="submit" value="Send">
      </form> -->

      <form action="https://send.pageclip.co/YR97n0GUKhRoDRB8QgxgjFgUXX86SOa5/contact-form" class="pageclip-form" method="post">
  <!-- Replace these inputs with your own. Make sure they have a "name" attribute! -->

  <!-- It looks like you are creating a contact form. These email and subject fields are special -->
  <!-- See https://pageclip.co/docs#special-fields for more info -->
  <input type="email" name="email" value="roscoe@example.com" />
  <input type="text" name="subject" value="A contact subject" />

  <!-- This button will have a loading spinner. Keep the inner span for best results. -->
  <button type="submit" class="pageclip-form__submit">
    <span>Send</span>
  </button>
</form>

    </div>

    <div class="footer">
    <div class="container container-footer">
      <div class="logo">
        <router-link class="about-link" tag="a" to="/about" title="О нас">
        <img :src="this.publicPath + 'footer.png'" alt="" width="200px" height="auto" alt="DriV3R">
        </router-link>
      </div>
      <div class="tel">
        <a href="tel: +79000939392" title="Позвонить нам">+7 (900) 093-93-92</a>
      </div>
      <div class="social">
        <a href="https://vk.com/mgnvr" target="_blank" title="Мы ВКонтакте">
          <img :src="this.publicPath + 'vk.svg'" alt="" width="30px" height="30px">
        </a>
      </div>
      <div class="copyright">
        &#9400; Driv3r, 2017 - 2019 | По всем вопросам обращаться по телефону или в группу ВКонтакте
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  name: 'contactus',
  data () {
    return {
      sitename: 'Driv3r - Каталог игр',
      publicPath: process.env.BASE_URL
    }
  },
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('mailjet', 'template_YbJVn2PN', e.target, 'user_5TDlh1RP0pNJnakwgtsyh')
        .then((result) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>

<style scoped>

  input {
    margin-bottom: 10px;
  }

</style>