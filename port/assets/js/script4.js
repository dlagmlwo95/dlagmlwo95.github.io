function loading() {
  const progress = $(".progress"),
      progressText = progress.find(".progress-text");

  let imgLoad = imagesLoaded("body"),
      imgTotal = imgLoad.images.length,
      imgLoaded = 0,
      imgCurrent = 0,
      progressTimer = setInterval(updateProgress, 500 / 60);

  imgLoad.on("progress", function () {
      imgLoaded++;
  })

  function updateProgress() {
      let target = (imgLoaded / imgTotal) * 100;

      imgCurrent += (target - imgCurrent) * 0.1;
      progressText.text(Math.floor(imgCurrent) + "%");

      if (imgCurrent >= 100) {
          clearInterval(progressTimer)
          progress.delay(1300).fadeOut(1000)

        var s = skrollr.init();
        gsap.set(".box1 h1", { opacity: 0, y: "-50px" });
        gsap.set(".box1 div", { opacity: 0, y: "-50px" });
        gsap.set(".sec1 .t1 p", { opacity: 0, y: "50px" });
        gsap.set(".sec1 .t1 .line", { opacity: 0, x: "500px" });
        gsap.set(".sec1 .t2 p", { opacity: 0, y: "50px" });
        gsap.set(".sec1 .box2 h2", { opacity: 0, y: "50px" });
        gsap.set(".sec1 .box2 div", { opacity: 0, y: "150px" });
        gsap.set(".sec1 .t2 .line", { opacity: 0, x: "-500px" });

        setTimeout(function () {
          let tl = gsap.timeline();
          tl.to(".box1 h1", {
            duration: 1,
            opacity: 1,
            y: 0,
            ease: "power4.out",
          });
          tl.to(".box1 div", {
            duration: 0.5,
            opacity: 1,
            y: 0,
            ease: "power4.out",
          });

          tl.to(".sec1 .t1 .line", {
            duration: 0.8,
            opacity: 1,
            x: 0,
            ease: "power4.out",
          });
          tl.to(".sec1 .t1 p", {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "power2.out",
          });

          tl.to(".sec1 .box2 h2", {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "power4.out",
          });

          tl.to(".sec1 .t2 p", {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "power4.out",
          });

          tl.to(".sec1 .box2 div:nth-child(2)", {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "power2.out",
          });
          tl.to(".sec1 .box2 div:nth-child(3)", {
            duration: 0.3,
            opacity: 1,
            y: 0,
            ease: "power2.out",
          });
          tl.to(".sec1 .t2 .line", {
            duration: 0.8,
            opacity: 1,
            x: 0,
            ease: "power4.out",
          });
        }, 500);
      }
      if (imgCurrent > 99) {
        imgCurrent = 100;
    }
}
}
  loading();


$(window).scroll(function () {
  let scroll = parseInt($(this).scrollTop());
  // 왼쪽상단 스크롤박스
  // $(".scroll").text(scroll);
  //스크롤 시 왼쪽 오른쪽으로 움직임
  $(".text.t1 p").css("transform", "translatex(" + scroll + "px");
  $(".text.t2 p").css("transform", "translatex(" + -scroll + "px");
  $(".text.t8 p").css("transform", "translatex(" + scroll + "px");
  $(".big_text .bar").css("transform", "translatex(" + -scroll + "px");
  $(".text.t3 p").css("transform", "translatex(" + -scroll + "px");
  $(".text.t4 p").css("transform", "translatex(" + scroll + "px");
  $(".text.t5 p").css("transform", "translatex(" + -scroll + "px");
  $(".text.t6 p").css("transform", "translatex(" + scroll + "px");
  $(".center_text .cir").css("transform", "translatex(" + -scroll + "px");

  //가로스크롤
  let offset = scroll - $("#section5").offset().top;
  if (scroll > $("#section5").offset().top) {
    $(".sec5").css("left", -offset + "px");
  }

});

// up-scroll모션
function isElementUnderBottom(elem, triggerDiff) {
  const { top } = elem.getBoundingClientRect();
  const { innerHeight } = window;
  return top > innerHeight + (triggerDiff || 0);
}
function handleScroll() {
  const elems = document.querySelectorAll(".up-scroll");
  elems.forEach((elem) => {
    if (isElementUnderBottom(elem, -20)) {
      elem.style.opacity = "0";
      elem.style.transform = "translateY(150px)";
    } else {
      elem.style.opacity = "1";
      elem.style.transform = "translateY(0px)";
    }
  });
}
window.addEventListener("scroll", handleScroll);

// 사진 리빌효과
$(window).scroll(function () {
  let scrollTop = $(this).scrollTop();
  $(".reveal").each(function () {
    if (scrollTop + $(window).height() > $(this).offset().top) {
      $(this)
        .delay($(this).data("delay"))
        .queue(function () {
          $(this).addClass("show");
        });
    }
  });
  $(".line").each(function () {
    if (scrollTop + $(window).height() > $(this).offset().top) {
      $(this).addClass("on");
    }
  });
});

// arrow 클릭
$(function () {
  $(".project_desc .arrow").click(function (e) {
    e.preventDefault();
    var windowWidth = $(window).width();
    if (windowWidth > 768) {
      $(this).next().toggleClass("hide");
      $(this).next().next().toggleClass("show");
    }
  });
});
