$(document).ready(function() {
  var eraseScreen2 = "#bellact-screen-2-img",
    eraseScreen3 = "#bellact-screen-3-img",
    eraseScreen4 = "#bellact-screen-4-img",
    showScreen2 = "[data-js='show-screen-2']",
    showScreen3 = "[data-js='show-screen-3']",
    showScreen4 = "[data-js='show-screen-4']",
    screen1 = ".bellact__screen-1",
    screen2 = ".bellact__screen-2",
    screen3 = ".bellact__screen-3",
    screen4 = ".bellact__screen-4",
    screen5 = ".bellact__screen-5",
    eraseContainer = ".erase-container",
    mainContainer = '.bellact';

  function showFinal() {
    $(eraseContainer).addClass("hide");
    lastScreenEnable = true;
  }

  function showCanvas(id) {
    $(id).eraser({
      completeRatio: 0.15,
      completeFunction: showFinal,
      size: 50
    });
  }

  function screenInit(screenForHide, screenForShow, canvasScreen) {
    shakeEnable = false;
    $(screenForHide).addClass("hide");
    $(screenForShow).addClass("visible");
    showCanvas(canvasScreen);
    $(screen5).addClass("visible");
  }

  $(mainContainer).addClass('visible');

  $(document)
    .on("click", showScreen2, function() {
      screenInit(screen1, screen2, eraseScreen2);
    })
    .on("click", showScreen3, function() {
      screenInit(screen1, screen3, eraseScreen3);
    })
    .on("click", showScreen4, function() {
      screenInit(screen1, screen4, eraseScreen4);
    })

    .on("mousedown", "canvas", function() {
      $(".bellact__finger").hide();
    });

  // --------------

  function removeCl(el, classN, time) {
    setTimeout(function() {
      $(el).removeClass(classN);
    }, time);
  }

  function addCls(el, classN, time) {
    setTimeout(function() {
      $(el).addClass(classN);
    }, time);
  }

  var removeTime = 4000;
  var shakeEnable = true;
  var lastScreenEnable = false;
  var animationClass = "wobble-hor-bottom";
  var animationClass2 = "zoom-in-out";
  var animationClass3 = "move-finger";

  var timerId = setTimeout(function tick() {
    if (shakeEnable) {
      addCls(".bellact__screen-1-img-1", animationClass, 1000);
      addCls(".bellact__screen-1-img-2", animationClass, 2000);
      addCls(".bellact__screen-1-img-3", animationClass, 3000);

      removeCl(".bellact__screen-1-img-1", animationClass, removeTime);
      removeCl(".bellact__screen-1-img-2", animationClass, removeTime);
      removeCl(".bellact__screen-1-img-3", animationClass, removeTime);
    }

    timerId = setTimeout(tick, 4100);
  }, 50);

  var timerId2 = setTimeout(function tick2() {
    if (lastScreenEnable) {
      addCls(".bellact__screen-5-img-3", animationClass2, 1000);
      addCls(".bellact__screen-5-img-4", animationClass2, 2000);
      addCls(".bellact__screen-5-img-5", animationClass2, 3000);

      removeCl(".bellact__screen-5-img-3", animationClass2, removeTime);
      removeCl(".bellact__screen-5-img-4", animationClass2, removeTime);
      removeCl(".bellact__screen-5-img-5", animationClass2, removeTime);
      timerId2 = setTimeout(tick2, 4100);
    } else {
      timerId2 = setTimeout(tick2, 50);
    }
  }, 50);

  var timerId3 = setTimeout(function tick3() {
    addCls(".bellact__finger img:nth-child(1)", animationClass3, 100);

    removeCl(".bellact__finger img:nth-child(1)", animationClass3, 2000);

    timerId3 = setTimeout(tick3, 2100);
  }, 50);
});
