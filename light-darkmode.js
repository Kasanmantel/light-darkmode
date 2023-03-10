var Font_Color, Invert, item, Background_Color;

// Light Mode
function LightMode() {
    $('.body').css({
      'background-color':'#ffffff',
      'color':'#000000',
    });
    $('#bannertext').css({
      'color':'#FFFFFF',
    });
    $('.line-divider').css({
      'background-color':'#000000',
    });
    $('.section-richtext').css({
      'color':'#000000',
    });
    $('.negativbloc').css({
      'color':'#FFFFFF',
    });
    $('[bloc=infobox]').css({
      'background-color':'#e3e8ef',
    });
    $('[bloc=titelhintergrund]').css({
      'background-color':'#e3e8ef',
    });
    $('.blog-richtext').css({
      'color':'#000000',
    });
    $('a').css({
      'color':'#3538cd',
    });
    for (var item_index in Font_Color) {
      item = Font_Color[item_index];
      $(item).css({
        'color':'#000000',
      });
    }
    for (var item_index2 in Invert) {
      item = Invert[item_index2];
      $(item).removeClass('invert');
    }
    for (var item_index3 in Background_Color) {
      item = Background_Color[item_index3];
      $(item).css({
        'background-color':'#FFFFFF',
      });
    }
      $('.mode-left').css({
        'background-color':'#FFFFFF',
      });
      $('.mode-right').css({
        'background-color':'#000000',
      });
      $('.moon').css({
        'opacity':'50%',
      });
      $('.mode-main-wrapper').css({
        'border-color':'#000000',
      });
      $('.mode-left').css({
        'border-right-color':'#000000',
      });
      $('.mode-right').css({
        'border-left-color':'#000000',
      });
      $('.mode-right').css({
        'border-right-color':'#000000',
      });
    $('.wg-dd-1-togle').css({
      'background-color':'#FFFFFF',
    });
    $('.wg-dd-1-list').css({
      'background-color':'#FFFFFF',
    });
    $('.w-dropdown').css({
      'background-color':'#FFFFFF',
    });
    $('.wg-dropdown-1-link').css({
      'color':'#000000',
    });
    $('.wg-dd-1-togle').css({
      'border-color':'#000000',
    });
    $('.main-navi-linktext').removeClass('dark');
    $('.main-navi-linktext.subtext.zusatz').removeClass('dark');
    $('.particles-js').addClass('invert');
    $('.particle-bg').css({
      'background-color':'#f4f4f4',
    });
    $('.main-navi-link').css({
      'border-left-color':'#000000',
    });
    $('.c-faq').css({
      'border-left-color':'#000000',
    });
    $('.c-faq-item').css({
      'border-left-color':'#000000',
    });
    $('.main-navi-loadercontent').css({
      'background':'#000000',
    });
    $('.faq-stripe-2').css({
      'background':'#000000',
    });
    $('.faq-stripe-1').css({
      'background':'#000000',
    });
    $('.button-1').css({
      'color':'#FFFFFF',
    });
    $('.footer-social-wrapper').addClass('invert');
    $('.field-label-outside').css({
      'color':'#000000',
    });
    $('.form-input-outside').css({
      'background':'#FFFFFF',
    });
    $('.form-input-outside').css({
      'color':'#000000',
    });
    $('.offerte-main-wrapper').css({
      'background':'#FFFFFF',
    });
    $('.popup-offerte-main-wrapper').removeClass('dark');
    $('.button-1').css({
      'color':'#FFFFFF',
    });
    $('[bloc=offertentext]').css({
      'color':'#000000',
    });
    $('.offerte-formular-titel').css({
      'color':'#000000',
    });
    $('.field-label').css({
      'color':'#000000',
    });
    $('.step-tag').css({
      'color':'#000000',
    });
    $('[bloc=offertenhinweis]').css({
      'background':'#e3e8ef',
    });
    $('[bloc=faq-icon]').css({
      'background-color':'#000000',
    });
    $('[bloc=faq-item]').css({
      'border-color':'#000000',
    });
    $('.nummer-bright').removeClass('hide');
    $('.nummer-dark').addClass('hide');
    $('.grid-person-content-wrapper').css({
      'background-color':'#FFFFFF',
    });
    $('.grid-person-content-wrapper').css({
      'border-color':'#000000',
    });
    $('.person-grid-text').css({
      'color':'#000000',
    });
    $('.vorschau-element-main-wrapper').css({
      'border-color':'#000000',
    });
    $('.vorschau-element-main-wrapper').css({
      'background':'#FFFFFF',
    });
    $('.negativblock-h3').css({
      'color':'#FFFFFF',
    });
    $('.external-link-button').css({
      'color':'#000000',
    });
    $('.referenzen-slider').css({
      'background-color':'#cdd5df',
    });
    $('.suche-inputfield').css({
      'color':'#FFFFFF',
    });
    $('.suchbutton').css({
      'color':'#FFFFFF',
    });
    $('.suche-erklaerung').css({
      'color':'#FFFFFF',
    });
    $('.footer-buttom').css({
      'color':'#000000',
    });
    $('.footer_legal-link').css({
      'color':'#000000',
    });
    $('[bloc=kontaktheader]').css({
      'color':'#000000',
    });
    $('[bloc=Datenschutzlink]').css({
      'color':'#FFFFFF',
    });
    $('[bloc=zulassen]').css({
      'color':'#FFFFFF',
    });
    $('[bloc=einstellungenspeichern]').css({
      'color':'#FFFFFF',
    });
}

// Dark Mode
function DarkMode() {
    $('.body').css({
      'background-color':'#202939',
      'color':'#FFFFFF',
    });
    $('#bannertext').css({
      'color':'#FFFFFF',
    });
    $('.line-divider').css({
      'background-color':'#FFFFFF',
    });
    $('.section-richtext').css({
      'color':'#FFFFFF',
    });
    $('.negativbloc').css({
      'color':'#FFFFFF',
    });
    $('[bloc=infobox]').css({
      'background-color':'#000000',
    });
    $('[bloc=titelhintergrund]').css({
      'background-color':'#364152',
    });
    $('.blog-richtext').css({
      'color':'#FFFFFF',
    });
	$('.list-item').css({
      'color':'#FFFFFF',
    });
    $('a').css({
      'color':'#6172f3',
    });
    for (var item_index4 in Font_Color) {
      item = Font_Color[item_index4];
      $(item).css({
        'color':'#FFFFFF',
      });
    }
    for (var item_index5 in Invert) {
      item = Invert[item_index5];
      $(item).addClass('invert');
    }
    for (var item_index6 in Background_Color) {
      item = Background_Color[item_index6];
      $(item).css({
        'background-color':'#202939',
      });
    }
      $('.mode-left').css({
        'background-color':'#202939',
      });
      $('.mode-right').css({
        'background-color':'#202939',
      });
      $('.moon').css({
        'opacity':'100%',
      });
      $('.mode-main-wrapper').css({
        'border-color':'#FFFFFF',
      });
      $('.mode-left').css({
        'border-right-color':'#FFFFFF',
      });
      $('.mode-right').css({
        'border-left-color':'#FFFFFF',
      });
      $('.mode-right').css({
        'border-right-color':'#202939',
      });
    $('.wg-dd-1-togle').css({
      'background-color':'#202939',
    });
    $('.wg-dd-1-list').css({
      'background-color':'#000000',
    });
    $('.w-dropdown').css({
      'background-color':'#000000',
    });
    $('.wg-dropdown-1-link').css({
      'color':'#000000',
    });
    $('.wg-dd-1-togle').css({
      'border-color':'#FFFFFF',
    });
    $('.main-navi-linktext').addClass('dark');
    $('.main-navi-linktext.subtext.zusatz').addClass('dark');
    $('.particles-js').removeClass('invert');
    $('.particle-bg').css({
      'background-color':'#121926',
    });
    $('.main-navi-link').css({
      'border-left-color':'#FFFFFF',
    });
    $('.c-faq').css({
      'border-left-color':'#FFFFFF',
    });
    $('.c-faq-item').css({
      'border-left-color':'#FFFFFF',
    });
    $('.main-navi-loadercontent').css({
      'background':'#FFFFFF',
    });
    $('.faq-stripe-2').css({
      'background':'#FFFFFF',
    });
    $('.faq-stripe-1').css({
      'background':'#FFFFFF',
    });
    $('.footer-social-wrapper').removeClass('invert');
    $('.field-label-outside').css({
      'color':'#FFFFFF',
    });
    $('.form-input-outside').css({
      'background':'#4b5565',
    });
    $('.form-input-outside').css({
      'color':'#FFFFFF',
    });
    $('.offerte-main-wrapper').css({
      'background':'#4b5565',
    });
    $('.popup-offerte-main-wrapper').addClass('dark');
    $('.button-1').css({
      'color':'#FFFFFF',
    });
    $('[bloc=offertentext]').css({
      'color':'#FFFFFF',
    });
    $('.offerte-formular-titel').css({
      'color':'#FFFFFF',
    });
    $('.field-label').css({
      'color':'#FFFFFF',
    });
    $('.step-tag').css({
      'color':'#FFFFFF',
    });
    $('[bloc=offertenhinweis]').css({
      'background':'#121926',
    });
    $('[bloc=faq-icon]').css({
      'background-color':'#FFFFFF',
    });
    $('[bloc=faq-item]').css({
      'border-color':'#FFFFFF',
    });
    $('.nummer-bright').addClass('hide');
    $('.nummer-dark').removeClass('hide');
    $('.grid-person-content-wrapper').css({
      'background-color':'#121926',
    });
    $('.grid-person-content-wrapper').css({
      'border-color':'#FFFFFF',
    });
    $('.person-grid-text').css({
      'color':'#FFFFFF',
    });
    $('.vorschau-element-main-wrapper').css({
      'border-color':'#FFFFFF',
    });
    $('.vorschau-element-main-wrapper').css({
      'background':'#121926',
    });
    $('.negativblock-h3').css({
      'color':'#FFFFFF',
    });
    $('.external-link-button').css({
      'color':'#000000',
    });
    $('.referenzen-slider').css({
      'background-color':'#121926',
    });
    $('.suche-inputfield').css({
      'color':'#FFFFFF',
    });
    $('.suchbutton').css({
      'color':'#FFFFFF',
    });
    $('.suche-erklaerung').css({
      'color':'#FFFFFF',
    });
    $('.footer-buttom').css({
      'color':'#FFFFFF',
    });
    $('.footer_legal-link').css({
      'color':'#FFFFFF',
    });
    $('[bloc=kontaktheader]').css({
      'color':'#FFFFFF',
    });
    $('[bloc=Datenschutzlink]').css({
      'color':'#FFFFFF',
    });
    $('[bloc=zulassen]').css({
      'color':'#FFFFFF',
    });
    $('[bloc=einstellungenspeichern]').css({
      'color':'#FFFFFF',
    });
}


  Font_Color = [];
  Font_Color.push('.navbar_link');
  Font_Color.push('.navbar_dropdown-toggle');
  Font_Color.push('H2');
  Font_Color.push('H3');
  Font_Color.push('H4');
  Font_Color.push('H5');
  Font_Color.push('H6');
  Font_Color.push('.text-size-medium');
  Font_Color.push('.paragraph');
  Font_Color.push('.portfolio-richtext');
  Invert = [];
  Invert.push('.navbar_logo');
  Invert.push('.searchimage');
  Invert.push('.menu-main-wrapper');
  Invert.push('.logo-footer');
  Invert.push('.pfeil');
  Invert.push('.content-ani-bar');
  Invert.push('.doppelpfeil');
  Background_Color = [];
  Background_Color.push('.navbar');
  Background_Color.push('.hg');
var we_var_light_mode;

    we_var_light_mode = Cookies.get('we_var_light_mode');
    if (we_var_light_mode != undefined) {
    if (we_var_light_mode == 'true') {
      we_var_light_mode = true;
    }
    if (we_var_light_mode == 'false') {
      we_var_light_mode = false;
    }
    }
    if (we_var_light_mode == undefined) {
      we_var_light_mode = true;
    }
    if (we_var_light_mode == true) {
        LightMode();

    } else {
        DarkMode();

    }
    $('.mode').on('click',function() {
      if (we_var_light_mode == false) {
          LightMode();

      } else {
          DarkMode();

      }
      we_var_light_mode = !we_var_light_mode;
      Cookies.set('we_var_light_mode', we_var_light_mode, { expires: 365 });
    });
$('.menu-main-wrapper').click(function() {
      var we_clicks = $(this).data('we_clicks');
      if (!we_clicks) {
          $('.navi-content').css({
    'z-index':'900',
  });

      } else {
          $('.navi-content').css({
    'z-index':'-5',
  });

      }
      $(this).data("we_clicks", !we_clicks);
    });