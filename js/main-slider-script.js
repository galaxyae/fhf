
	var tpj=jQuery;                  
    var revapi486;
    tpj(document).ready(function() {
		
		//Slider One
        if(tpj("#rev_slider_one").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_one");
        }else{
            revapi486 = tpj("#rev_slider_one").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:400,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"right",
                            v_align:"bottom",
                            h_offset:62,
                            v_offset:1
                        },
                        right: {
                            h_align:"right",
                            v_align:"bottom",
                            h_offset:1,
                            v_offset:1
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,778,480],
                 visibilityLevels:[1200,1040,778,480],
                 gridwidth:[1200,1040,778,480],
                 gridheight:[850,650,550,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
		 
		 //Slider Two
		 if(tpj("#rev_slider_two").revolution == undefined){
            revslider_showDoubleJqueryError("#rev_slider_two");
        }else{
            revapi486 = tpj("#rev_slider_two").show().revolution({
			sliderType:"standard",
                jsFileLocation:"plugins/revolution/js/",
                sliderLayout:"auto",
                dottedOverlay:"none",
                delay:10000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                        mouseScrollReverse:"default",
                    onHoverStop:"off",
                    touch:{
                        touchenabled:"on",
                        touchOnDesktop:"off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style:"metis",
                        enable:true,
                        hide_onmobile:true,
                        hide_under:400,
                        hide_onleave:false,
                        tmp:'',
                        left: {
                            h_align:"right",
                            v_align:"bottom",
                            h_offset:62,
                            v_offset:1
                        },
                        right: {
                            h_align:"right",
                            v_align:"bottom",
                            h_offset:1,
                            v_offset:1
                        }
                    }
                    
                },
                 responsiveLevels:[1200,1040,778,480],
                 visibilityLevels:[1200,1040,778,480],
                 gridwidth:[1200,1040,778,480],
                 gridheight:[650,650,550,500],
                 lazyType:"none",
                 parallax: {
                     type:"scroll",
                     origo:"enterpoint",
                     speed:400,
                     levels:[5,10,15,20,25,30,35,40,45,50,46,47,48,49,50,55],
                     type:"scroll",
                 },
                 shadow:0,
                 spinner:"off",
                 stopLoop:"off",
                 stopAfterLoops:-1,
                 stopAtSlide:-1,
                 shuffle:"off",
                 autoHeight:"off",
                 hideThumbsOnMobile:"off",
                 hideSliderAtLimit:0,
                 hideCaptionAtLimit:0,
                 hideAllCaptionAtLilmit:0,
                 debugMode:false,
                 fallbacks: {
                     simplifyAll:"off",
                     nextSlideOnWindowFocus:"off",
                     disableFocusListener:false,
                 }
             });
         }
		 
     }); /*ready*/