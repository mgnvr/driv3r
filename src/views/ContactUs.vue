<template>
  <div>
    <div class="header">
      <div class="container container-header">

        <div class="logo">
        <router-link class="about-link" tag="a" to="/" title="На главную">
        <img :src="this.publicPath + 'footer.png'" width="200px" height="auto" alt="DriV3R">
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

    <div class="container container-contactus">

      <vk-breadcrumb>
        <router-link class="home" tag="vk-breadcrumb-item" to="/" title="Вернуться на главную страницу">Главная</router-link>
        <vk-breadcrumb-item>Забронировать место</vk-breadcrumb-item>
      </vk-breadcrumb>

      <h1 class="about-header">Забронируйте место</h1>

      <form action="https://send.pageclip.co/YR97n0GUKhRoDRB8QgxgjFgUXX86SOa5/contact-form" method="post" class="form-reserve" autocomplete="off">
          <input type="text" name="subject" value="" placeholder="Имя" class="input-reserve" title="" required>
          <input type="tel" class="input-reserve" id="tel" name="tel" placeholder="Телефон в формате 8-(XXX)-XXX-XX-XX"  title=""  required>
          <div class="datetime-reserve">
            <input type="text" id="date" name="date" class="input-reserve" placeholder="Дата в формате ДД.ММ.ГГГГ" title="" required>
            <input type="text" id="time" name="time" class="input-reserve" placeholder="Время в формате ЧЧ:ММ" title="" required>
          </div>
          <textarea name="extras" rows="5" placeholder="Дополнительные пожелания" class="input-reserve textarea-reserve" title=""></textarea>
          <button  class="button-reserve" type="submit">
            <span>Забронировать</span>
          </button>
      </form>

    </div>

    <div class="footer">
    <div class="container container-footer">
      <div class="logo">
        <router-link class="about-link" tag="a" to="/about" title="О нас">
        <img :src="this.publicPath + 'footer.png'" width="200px" height="auto" alt="DriV3R">
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

import IMask from 'imask';

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
          console.log('SUCCESS!', response.status, response.text)
        }, (error) => {
          console.log('FAILED...', error)
        })
    }
  },
  mounted () {
    let showhideTel = document.getElementById('tel');
    let patternMaskTel = new IMask(showhideTel, {
      mask: '{8}-(000)-000-00-00',
      lazy: true,
      placeholderChar: '_'
    });
    showhideTel.addEventListener('focus', function() {
      patternMaskTel.updateOptions({ lazy: false });
    }, true);
    showhideTel.addEventListener('blur', function() {
      patternMaskTel.updateOptions({ lazy: true });
      if (!patternMaskTel.masked.rawInputValue) {
        patternMaskTel.value = '';
      }
    }, true);

    let showhideDate = document.getElementById('date');
    let patternMaskDate = new IMask(showhideDate, {
      mask: '00.00.0000',
      lazy: true,  // make placeholder always visible
      placeholderChar: '_'     // defaults to '_'
    });
    showhideDate.addEventListener('focus', function() {
      patternMaskDate.updateOptions({ lazy: false });
    }, true);
    showhideDate.addEventListener('blur', function() {
      patternMaskDate.updateOptions({ lazy: true });
      if (!patternMaskDate.masked.rawInputValue) {
        patternMaskDate.value = '';
      }
    }, true);

    let showhideTime = document.getElementById('time');
    let patternMaskTime = new IMask(showhideTime, {
      mask: '00:00',
      lazy: true,  // make placeholder always visible
      placeholderChar: '_'     // defaults to '_'
    });
    showhideTime.addEventListener('focus', function() {
      patternMaskTime.updateOptions({ lazy: false });
    }, true);
    showhideTime.addEventListener('blur', function() {
      patternMaskTime.updateOptions({ lazy: true });
      if (!patternMaskTime.masked.rawInputValue) {
        patternMaskTime.value = '';
      }
    }, true);
  }
}
</script>
