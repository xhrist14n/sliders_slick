console.log('\'Allo \'Allo!'); // eslint-disable-line no-console
$(
  function(){
    $('.one-time').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 5,
      touchMove: false,
      slidesToScroll: 1
    });
    hljs.initHighlightingOnLoad();

  }

);
