 
  let index = 0;
  const totalWorkItems = $(".work-item").length; 

   $(window).on("load",function(){
      $(".preloader").addClass("loaded");
   })

  $(document).ready(function () {

    // nav toggle
    $(".nav-toggle").click(function(){
      $(".header .nav").slideToggle();
    })
    $(".header .nav a").click(function(){
      if($(window).width() < 768){
         $(".header .nav").slideToggle();
      }
    })

    // fixed header 
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $(".header").addClass("fixed");
      }
      else{
        $(".header").removeClass("fixed");
      }
    })

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
     $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } 
  });


  // $(".exp-tab").click(function(){
  //   $(".apart-tab").removeClass('yellow-font')
  //   $(".exp-tab").addClass('yellow-font')
  //  $(".some-activities").html('<span class="highlight-key">Company Name :</span> DxMinds Innovation Labs Pvt. Ltd <br><span class="highlight-key">Duration :</span> JUN 2023 TO Still Working <br><span class="highlight-key">Tech Stacks :</span> HTML | CSS | JavaScript | TypeScript | APIs | ReactJs  <br><span class="highlight-key">Role :</span> Software Engineer<br><span class="highlight-key">Responsibilities :</span><br>&#128073; Build pages like Invest, Regions, Individuals, Funds, ContactUs, SIProfile<br>&#128073; Worked on Referrals, Dashboard, AboutUs, login, FAQs, header, footer<br>&#128073; SEO maintained code and testing<br>&#128073; Weekend team support')
  // })
  $(".exp-tab").click(function(){
    $(".apart-tab").removeClass('yellow-font')
    $(".exp-tab").addClass('yellow-font')
   $(".some-activities").html('<span class="highlight-key">Company Name :</span> DxMinds Innovation Labs Pvt. Ltd <br><span class="highlight-key">Duration :</span> JUN 2023 to Until Now <br><span class="highlight-key">Tech Stacks :</span> HTML | CSS | JavaScript | TypeScript | Node JS | Express JS | ReactJs | MIUI <br><span class="highlight-key">Role :</span> Software Engineer<br><span class="highlight-key">Responsibilities :</span><br>&#128073;  Backend development for "Hallo Club", and "Cozmo" using Node.js, Express.js, MongoDB, TypeScript, and more.<br>&#128073; Created secure authentication systems with CRM and custom APIs for improved platform security and usability.<br>&#128073; Integrated development tools and middleware like logger, Swagger, and npm packages, enhancing project maintainability, and documentation.<br>&#128073; Maintained strong MVC models and a well-structured backend for building model schemas, validations, and authentication.')
  })

  $(".apart-tab").click(function(){
    $(".apart-tab").addClass('yellow-font')
    $(".exp-tab").removeClass('yellow-font')
    $(".some-activities").html('<br>Some other activities that I love to do!<br><span>&#128073; Listening Music</span> <br><span>&#128073; Playing Cricket</span> <br><span>&#128073; Traveling</span><br><br>Live life to the fullest, and focus on the positive. ... "Focus on the journey", not the destination. ..."')
   })
    
  var typed = new Typed('.element', {
    strings: ['Full Stack Developer', 'FrontEnd Developer','BackEnd Developer','Full Stack Developer', 'FrontEnd Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  loopCount: Infinity,
  startDelay: 10
  });

  })
  
  