let index = 0;
const totalWorkItems = $(".work-item").length;

$(window).on("load", function () {
  $(".preloader").addClass("loaded");
});

$(document).ready(function () {

  // ============================
  // NAV TOGGLE
  // ============================

  $(".nav-toggle").click(function () {
    $(".header .nav").slideToggle();
  });

  $(".header .nav a").click(function () {
    if ($(window).width() < 768) {
      $(".header .nav").slideToggle();
    }
  });


  // ============================
  // FIXED HEADER
  // ============================

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".header").addClass("fixed");
    } else {
      $(".header").removeClass("fixed");
    }
  });


  // ============================
  // SMOOTH SCROLL
  // ============================

  $("a").on("click", function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });


  // ============================
  // EXPERIENCE
  // ============================

  $(".exp-tab").click(function () {

    $(".apart-tab").removeClass("yellow-font");
    $(".exp-tab").addClass("yellow-font");

    $(".some-activities").html(
      '<span class="highlight-key">Company Name :</span> TadPul Technologies Private Limited' +
      '<br>' +
      '<span class="highlight-key">Duration :</span> AUG 2025 to Present' +
      '<br>' +
      '<span class="highlight-key">Tech Stacks :</span> React.js | TypeScript | Firebase | Firestore | Cloud Functions | OpenAI | Whisper | Deepgram | Playwright | Cucumber | GitHub Actions | Jenkins' +
      '<br>' +
      '<span class="highlight-key">Role :</span> Software Engineer' +
      '<br>' +
      '<span class="highlight-key">Project :</span> NeoRecruit' +
      '<br>' +
      '<span class="highlight-key">Responsibilities :</span>' +
      '<br>' +
      '&#128073; Build and maintain full-stack features for NeoRecruit, an AI-powered recruitment and candidate assessment platform.' +
      '<br>' +
      '&#128073; Develop frontend features using React.js and TypeScript.' +
      '<br>' +
      '&#128073; Develop backend workflows using Firebase Cloud Functions and Firestore.' +
      '<br>' +
      '&#128073; Integrate OpenAI, Whisper, and Deepgram for AI conversations, speech-to-text processing, transcript generation, and candidate assessment workflows.' +
      '<br>' +
      '&#128073; Work on authentication, authorization, Firestore security rules, Cloud Storage access, server-side file validation, API rate limiting, and audit logging.' +
      '<br>' +
      '&#128073; Create and maintain end-to-end automated tests using Playwright and Cucumber.' +
      '<br>' +
      '&#128073; Maintain CI/CD workflows using GitHub Actions and Jenkins.'
    );
  });


  // ============================
  // TYPED TEXT
  // ============================

  var typed = new Typed(".element", {
    strings: [
      "Full Stack Developer",
      "Backend Developer",
      "Software Engineer",
      "React.js Developer",
      "Node.js Developer"
    ],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
    loopCount: Infinity,
    startDelay: 10
  });

});
