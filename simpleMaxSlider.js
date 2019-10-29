function MSlider(options) {
  let mSlide = document.querySelectorAll('.mSlide');
  let interval;

  let opt = {
    autoplay: options.autoplay || false,
    pagination: options.pagination || true,
    reverse: options.direction || false,
    delay: options.delay || 4000

  };


  if (opt.autoplay) {
    start(opt);
  }


  function start(opt) {
    clearInterval(interval);
    interval = setInterval(() => {
      changeSlide(mSlide, opt.reverse);
    }, opt.delay);
  }

  let button = new $('.mBtn');


  button._on('click', function () {
    if (this.getAttribute('data-attr') == 'Next') {
      changeSlide(mSlide, false);
    } else {
      changeSlide(mSlide, true);
    }
  });

  function changeSlide(item, flg) {
    start(opt);
    if (flg) {
      for (var i = 0; item.length > i; i++) {
        if (item[i].classList.contains('active')) {
          item[i].classList.remove('active');
          if (i === 0) {
            item[item.length - 1].classList.add('active');
          } else {
            item[i - 1].classList.add('active');
          }
          return;
        }
      }
    } else {
      for (var i = 0; item.length > i; i++) {
        if (item[i].classList.contains('active')) {
          item[i].classList.remove('active');
          if (i === item.length - 1) {
            item[0].classList.add('active');
          } else {
            item[i + 1].classList.add('active');
          }
          return;
        }
      }
    }
  }

}


function $(selector) {
  this.element = document.querySelectorAll(selector);

  this._on = function (event, callback) {
    for (var i = 0; this.element.length > i; i++) {
      this.element[i].addEventListener(event, callback);
    }
    return this;
  }
}









