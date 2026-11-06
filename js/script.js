$("#js-drawer-button").on("click", function () {
  $("#js-drawer").toggleClass("is-open");
  $("body").toggleClass("is-drawer-open");

  $("#js-drawer a").on("click", function () {
    $("#js-drawer").removeClass("is-open");
    $("body").removeClass("is-drawer-open");

    $("#js-drawer-button img").attr("src", "./img/drawer-icon__open.png");
  });

  const img = $(this).find("img");

  if ($("#js-drawer").hasClass("is-open")) {
    img.attr("src", "./img/drawer-icon__close.png");
  } else {
    img.attr("src", "./img/drawer-icon__open.png");
  }
});

//FAQの回答を表示/非表示、表示時is-open付ける
$(".js-accordion").on("click", function () {
  const faq = $(this).closest(".faq__qa");

  faq.find(".faq__a-wrap").slideToggle();
  faq.toggleClass("is-open");
});

const swiper1 = new Swiper(".swiper1", {
  loop: true,

  slidesPerView: 3, // 3枚見せる

  spaceBetween: 20, // 写真の間隔

  breakpoints: {
    768: {
      slidesPerView: 7, // 7枚見せる
      spaceBetween: 20, // 写真の間隔
    },
  },

  speed: 5000, // 動くスピード（大きいほどゆっくり）

  autoplay: {
    delay: 0, // 止まらず流れる
    disableOnInteraction: false,
  },

  allowTouchMove: false, // 手で止めない
});

//PAGETOPクリックでページトップへスクロール
$(".footer__pagetop").on("click", function (e) {
  e.preventDefault();

  $("html, body").animate({
    scrollTop: 0,
  });
});

const pageTop = document.querySelector(".footer__pagetop");

//上部300pxスクロールしたらPAGETOPを表示
window.addEventListener("scroll", () => {
  if (window.scrollY >= 300) {
    pageTop.classList.add("is-show");
  } else {
    pageTop.classList.remove("is-show");
  }
});


const swiper2 = new Swiper(".swiper2", {
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 16,
  breakpoints: {
    768: {
      spaceBetween: 30,
      centeredSlides: false,
      initialSlide: 6, // ★ 最初のスライドを指定
    },
  },
  speed: 5000,

  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  allowTouchMove: false,

  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },

  // 画面幅によって設定を変更
  on: {
    init: function () {
      if (window.innerWidth >= 768) {
        this.autoplay.stop();
      }
    },

    resize: function () {
      if (window.innerWidth >= 768) {
        this.autoplay.stop();
      } else {
        this.autoplay.start();
      }
    },
  },
});

const modalTitles = [
  "海街洋菓子店 スイーツセット",
  "ねこねこグッズセット",
  "尾道ラーメンセット",
  "おうちで喫茶店セット",
  "工房尾道帆布オリジナルトート",
];

const modalTexts = [
  `海沿いにあるケーキ屋さん、<br>
   海街洋菓子店の人気焼き菓子詰め合わせセット。<br>
   こだわりのバターをふんだんに使ったリッチな味わい<br>
   で、濃厚なコクが後を引く美味しさです。`,

  `お土産としても大人気の猫グッズを集めました。<br>
    お家で、オフィスで、<br>
    眺めているだけでも癒されてしまう<br>
    愛らしい猫たちと一緒に。`,

  `国にファンがいる本格的な尾道ラーメンをお家で。<br>
    尾道ラーメンといえば、透き通った醤油スープと、<br>
    平打ち麺が特徴です。<br>
    コクがありながらまろやかな味のスープは<br>
    思わず飲み干したくなるお味。`,

  `尾道の人気喫茶店のコーヒー豆を使用したドリップ<br>バッグとマグカップのセット。<br>
    香り高い深煎りの豆は、カフェオレにするのも◎<br>
    カンタンに楽しめるドリップバッグは、<br>
    オフィスや在宅ワーク時、忙しい家事の合間など<br>
    日常のさまざまなシーンで大活躍。`,

  `工房尾道帆布とコラボした、<br>
    本キャンペーンオリジナルトート。<br>
    シンプルなデザインで、シーンを選ばず<br>
    お使いいただけます。<br>
    しっかりした生地で、<br>
    年月とともに変化していく風合いも魅力`,
];

$(".js-modal-open").on("click", function () {
  const index = $(".js-modal-open").index(this);

  // 画像
  const imageType = window.matchMedia("(min-width: 768px)").matches
    ? "pc"
    : "sp";

  $(".js-modal-image").attr(
    "src",
    `./img/prizes_modal${index + 1}-pic-${imageType}.jpg`,
  );
  // タイトル
  $(".modal__title").html(modalTitles[index]);

  // テキスト
  $(".modal__text").html(modalTexts[index]);

  // モーダルを表示
  $(".js-modal").addClass("is-open");
  $("body").addClass("is-modal-open");
});

$(".js-modal-close").on("click", function () {
  $(".js-modal").removeClass("is-open");
  $("body").removeClass("is-modal-open");
});
