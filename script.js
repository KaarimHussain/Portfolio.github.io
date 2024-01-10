document.addEventListener('DOMContentLoaded', () => {
     const outlineText = document.querySelectorAll('.outlineInnerText .bi-chevron-left, .bi-chevron-right');
     const cursorDot = document.querySelector("[data-cursor-dot]");
     const cursorOutline = document.querySelector("[data-cursor-outline]");
     var skillContainers = document.querySelectorAll('.elem');
     const resumeBtn = document.querySelector('.resumeBtn');
     const skillsSet = document.querySelectorAll('#skillsSet');
     const mail = document.querySelector('#mail');
     const linkden = document.querySelector('#linkden');
     const twitter = document.querySelector('#twitter');
     const curMail = document.querySelector('#cur-mail');
     const curTwitter = document.querySelector('#cur-twitter');
     const curLinkden = document.querySelector('#cur-linkden');

     const scroll = new LocomotiveScroll({
          el: document.querySelector('#main'),
          smooth: true
     });
     var tl = gsap.timeline();
     function gsapAnimationSet() {
          gsap.to(".heading h1 span", {
               delay: 5.7,
               bottom: 2,
               stagger: 0.1,
               duration: 1,
               ease: "power2.out",
          })
          gsap.to(".ballStart", {
               left: "5%",
               duration: 3,
               delay: 4.5,
               ease: "power2.out"
          })
          gsap.to(".ballEnd", {
               right: "-10%",
               duration: 3,
               delay: 4.7,
               ease: "power2.out"
          })
     }
     gsapAnimationSet();

     skillContainers.forEach(function (elemC) {
          var elems = elemC.querySelectorAll(".elem");
          skillContainers.forEach(function (e) {
               e.addEventListener("mouseenter", () => {
                    cursorOutline.style.border = "2px solid black";
                    var image = e.getAttribute("data-image");
                    fixed.style.backgroundImage = `url(${image})`;
               });
               e.addEventListener("mouseleave", () => {
                    cursorOutline.style.border = "2px solid #fe330a";
                    fixed.style.backgroundImage = `none`;
               });
          });
     });
     window.addEventListener('mousemove', function (e) {
          const posX = e.clientX;
          const posY = e.clientY;

          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;

          cursorOutline.style.left = `${posX}px`;
          cursorOutline.style.top = `${posY}px`;

          cursorOutline.animate({
               left: `${posX}px`,
               top: `${posY}px`
          }, { duration: 450, fill: "forwards" });
     });
     resumeBtn.addEventListener('mouseenter', function () {
          cursorOutline.style.height = "0px";
          cursorOutline.style.width = "0px";
     })
     resumeBtn.addEventListener('mouseleave', function () {
          cursorOutline.style.height = "50px";
          cursorOutline.style.width = "50px";
     })
     skillsSet.forEach(function (elemC) {
          elemC.addEventListener('mouseenter', function () {
               cursorOutline.style.backgroundColor = "#fe330a";
               cursorOutline.style.height = "100px";
               cursorOutline.style.width = "100px";
               cursorOutline.style.boxShadow = "0px 0px 150px #fe330a";
               outlineText.forEach(function (i) {
                    i.style.opacity = "1";
               })

          })
          elemC.addEventListener('mouseleave', function () {
               cursorOutline.style.backgroundColor = "transparent";
               cursorOutline.style.height = "50px";
               cursorOutline.style.width = "50px";
               cursorOutline.style.boxShadow = "0px 0px 0px transparent";
               outlineText.forEach(function (i) {
                    i.style.opacity = "0";
               })
          })
     })
     const swiper = new Swiper('.swiper', {
          slidesPerView: 4,
          spaceBetween: 20,
          freeMode: true,
          navigation: false,
          pagination: false,
          mousewheel: false,

          breakpoints: {
               // Adjust values as needed for different screen sizes
               200: {
                    slidesPerView: 1,
                    spaceBetween: 5,
               },
               320: {
                    slidesPerView: 1,
                    spaceBetween: 5,
               },
               480: {
                    slidesPerView: 2,
                    spaceBetween: 10,
               },
               768: {
                    slidesPerView: 3,
                    spaceBetween: 15,
               },
               1024: {
                    slidesPerView: 4,
                    spaceBetween: 20,
               },
          },
     });
     mail.addEventListener('mouseenter', function () {
          curMail.style.opacity = 1;
          curMail.style.color = "white";
          cursorOutline.style.boxShadow = "0px 0px 150px #fc626a";
          cursorOutline.style.border = "none";
          cursorOutline.style.backgroundColor = "#fc626a";
          cursorOutline.style.height = "120px";
          cursorOutline.style.width = "120px";
     })
     mail.addEventListener('mouseleave', function () {
          curMail.style.opacity = 0;
          curMail.style.color = "transparent";
          cursorOutline.style.boxShadow = "0px 0px 0px transparent";
          cursorOutline.style.border = "3px solid #fe330a"
          cursorOutline.style.backgroundColor = "transparent";
          cursorOutline.style.height = "50px";
          cursorOutline.style.width = "50px";
     })

     twitter.addEventListener('mouseenter', function () {
          curTwitter.style.opacity = 1;
          curTwitter.style.color = "white";
          cursorOutline.style.boxShadow = "0px 0px 150px #1DA1F2";
          cursorOutline.style.border = "none";
          cursorOutline.style.backgroundColor = "#1DA1F2";
          cursorOutline.style.height = "120px";
          cursorOutline.style.width = "120px";
     })
     twitter.addEventListener('mouseleave', function () {
          curTwitter.style.opacity = 0;
          curTwitter.style.color = "transparent";
          cursorOutline.style.boxShadow = "0px 0px 0px transparent";
          cursorOutline.style.border = "3px solid #fe330a"
          cursorOutline.style.backgroundColor = "transparent";
          cursorOutline.style.height = "50px";
          cursorOutline.style.width = "50px";
     })

     linkden.addEventListener('mouseenter', function () {
          curLinkden.style.opacity = 1;
          curLinkden.style.color = "white";
          cursorOutline.style.boxShadow = "0px 0px 150px #51cde7";
          cursorOutline.style.border = "none";
          cursorOutline.style.backgroundColor = "#51cde7";
          cursorOutline.style.height = "120px";
          cursorOutline.style.width = "120px";
     })
     linkden.addEventListener('mouseleave', function () {
          curLinkden.style.opacity = 0;
          curLinkden.style.color = "transparent";
          cursorOutline.style.boxShadow = "0px 0px 0px transparent";
          cursorOutline.style.border = "3px solid #fe330a"
          cursorOutline.style.backgroundColor = "transparent";
          cursorOutline.style.height = "50px";
          cursorOutline.style.width = "50px";
     })
     function menuAnimation() {

          var menu = document.querySelector("nav h3");
          var full = document.querySelector("#full-scr");
          var navImg = document.querySelector("nav img");
          var flag = 0;

          menu.addEventListener("click", function () {
               if (flag == 0) {
                    full.style.top = 0;
                    navImg.style.opacity = 0;
                    flag = 1;
               }
               else {
                    full.style.top = "-100%";
                    navImg.style.opacity = 1;
                    flag = 0;
               }
          })
     }
     function loaderAnimation() {
          var loader = document.querySelector(".loader");
          setTimeout(function () {
               loader.style.top = "-100%";
               cursorOutline.style.opacity = 1;
          }, 4000)
     }

     loaderAnimation();

     // ContactMailerCode

     emailjs.init("zpGXs1saQ3xvDJjvI");
     const sendMailBtn = document.querySelector('.mailSendBtn');
     sendMailBtn.addEventListener("click", sendMail);
     function sendMail() {

          const nameCon = document.getElementById('userName').value;
          const subjectCon = document.getElementById('userSubject').value;
          const Text = document.getElementById('userMsg').value;

          emailjs.send("service_23fobx4", "template_nhcmg5f", {
               to_email: "kaariminnocent@gmail.com",
               subject: subjectCon,
               message: Text
          }).then(function () {
               window.location.reload();
          }), function (error) {
               console.log(error);
          };
     };

     // FooterCode

     const footer = document.querySelector(".footer");
     const blurCursor = document.querySelector(".blurCursor");

     window.addEventListener("mousemove", function (e) {
          const posX = e.clientX;
          const posY = e.clientY;

          // Move the blurCursor to follow the mouse cursor with smooth animation
          blurCursor.style.left = `${posX}px`;
          blurCursor.style.top = `${posY}px`;

          blurCursor.animate(
               { left: `${posX}px`, top: `${posY}px` },
               { duration: 450, fill: "forwards" }
          );
     });

     footer.addEventListener("mouseenter", function () {
          cursorOutline.style.scale = 0;
          blurCursor.style.animation = "none";
     });

     footer.addEventListener("mouseleave", function () {
          cursorOutline.style.scale = 1;
          blurCursor.style.left = "50%";
          blurCursor.style.top = "50%";
          blurCursor.style.animation = "";
     });


})
