   
   $(document).ready(function()
   {
      $('#wb_infoBlock2Text').addClass('visibility-hidden');
      $('#wb_Text1').addClass('visibility-hidden');
      $("a[href*='#LayoutGridCarousel']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_LayoutGridCarousel').offset().top }, 600, 'easeOutCubic');
      });
      $("a[href*='#infoBlock1']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#wb_infoBlock1').offset().top }, 600, 'easeOutSine');
      });
      $("a[href*='#team']").click(function(event)
      {
         event.preventDefault();
         $('html, body').stop().animate({ scrollTop: $('#team').offset().top }, 600, 'easeOutSine');
      });
      function onScrollinfoBlock2Text()
      {
         var $obj = $("#wb_infoBlock2Text");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_infoBlock2Text', 'transform-scale-in', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_infoBlock2Text', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_infoBlock2Text').inViewPort(true))
      {
         $('#wb_infoBlock2Text').addClass("in-viewport");
      }
      onScrollinfoBlock2Text();
      $(window).scroll(function(event)
      {
         onScrollinfoBlock2Text();
      });
      $('#headerMenu .dropdown-toggle').dropdown({popperConfig:{placement:'bottom-start',modifiers:{computeStyle:{gpuAcceleration:false}}}});
      $(document).on('click','.headerMenu-navbar-collapse.show',function(e)
      {
         if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) 
         {
            $(this).collapse('hide');
         }
      });
      function skrollrInit()
      {
         skrollr.init({forceHeight: false, mobileCheck: function() { return false; }, smoothScrolling: false});
      }
      skrollrInit();
      $("#ThemeableButton3").button();
      function onScrollText1()
      {
         var $obj = $("#wb_Text1");
         if (!$obj.hasClass("in-viewport") && $obj.inViewPort(false))
         {
            $obj.addClass("in-viewport");
            AnimateCss('wb_Text1', 'transform-tada', 0, 2000);
         }
         else
         if ($obj.hasClass("in-viewport") && !$obj.inViewPort(true))
         {
            $obj.removeClass("in-viewport");
            AnimateCss('wb_Text1', 'animate-fade-out', 0, 0);
         }
      }
      if (!$('#wb_Text1').inViewPort(true))
      {
         $('#wb_Text1').addClass("in-viewport");
      }
      onScrollText1();
      $(window).scroll(function(event)
      {
         onScrollText1();
      });
      $("#welcome-carousel").on('slid.bs.carousel', function(e)
      {
         var index = $(e.relatedTarget).index();
         switch(index)
         {
            case 0:
               AnimateCss('wb_welcome-text1', 'slide-down-in', 500, 1000);
               AnimateCss('wb_welcome-text2', 'slide-up-in', 1000, 1000);
               AnimateCss('welcome-button1', 'slide-up-in', 2000, 1000);
               break;
            case 1:
               AnimateCss('wb_welcome-text3', 'slide-down-in', 500, 1000);
               AnimateCss('wb_welcome-text4', 'slide-up-in', 1000, 1000);
               AnimateCss('welcome-button2', 'slide-up-in', 2000, 1000);
               break;
            case 2:
               AnimateCss('wb_welcome-text5', 'slide-down-in', 500, 1000);
               AnimateCss('wb_welcome-text6', 'slide-up-in', 1000, 1000);
               AnimateCss('welcome-button3', 'slide-up-in', 2000, 1000);
               break;
         }
      });
      $("#welcome-carousel").bootstrapcarousel({interval:6000, pause: false});
   });
