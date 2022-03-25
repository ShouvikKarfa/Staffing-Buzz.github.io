jQuery(window).on('scroll', function () {
    if (jQuery(window).scrollTop() > 200) {
      jQuery('#header_frame').css('background-color', '#FFFFFF');
      jQuery('#xy').css('color', 'black');
      jQuery('#xy1').css('color', 'black');
      jQuery('#xy2').css('color', 'black');
      jQuery('#xy3').css('color', 'black');
      jQuery('#xy4').css('color', 'black');
      jQuery('#brand').css({
        'background-color': '#ca0630',
        'background-image': 'linear-gradient(90deg, #d12e2f, #3c839c)',
        'background-size': '100%',
        '-webkit-background-clip': 'text',
        '-moz-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent;',
        '-moz-text-fill-color': 'transparent',
        'color':'',
        'font': 'size 1.5em',
        'font-weight': '700',
        'text-decoration': 'none !important',
        'font-size': 'xx-large',
      });
      jQuery('#brand-img').css('display', 'block');
      // -webkit-linear-gradient(#CA0630, #CA0630)

      window.scrollTo(1080,0);
    } else {
      jQuery('#header_frame').css('background-color', '');
      jQuery('#xy').css('color', 'whitesmoke');
      jQuery('#xy1').css('color', 'whitesmoke');
      jQuery('#xy2').css('color', 'whitesmoke');
      jQuery('#xy3').css('color', 'whitesmoke');
      jQuery('#xy4').css('color', 'whitesmoke');
      jQuery('#brand').css({
        'background-color': '#ffc107',
        'background-image': 'linear-gradient(0deg, #ffc107, #ffc107)',
        'background-size': '100%',
        '-webkit-background-clip': 'text',
        '-moz-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent;',
        '-moz-text-fill-color': 'transparent',
        'font': 'size 1.5em',
        'font-weight': '700',
        'text-decoration': 'none !important',
        'font-size': 'xx-large',
      });
      jQuery('#brand-img').css('display', 'none');


      


    }
  });