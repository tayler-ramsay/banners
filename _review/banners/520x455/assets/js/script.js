var tl1 = new TimelineMax({});

tl1
   .from('#myAd_JMH',1.5,{x: -450, ease: Back.easeOut})
   .from('#myAd_SD',1.5,{x:600, ease: Back.easeOut}, '-=1.5')
   .to('#myAd_SD',.8,{ ease: Back.easeIn.config(1.7), x: 700},'+=.2')
   .to('#myAd_JMH',.8,{
     scale: 2,
     x: 35,
     y: 70,
     top:50


   },'-=.5')
   .to('#myAd_CTA_1', .7, {y:100});

// var tl2 = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 1});
// tl2.to('#myAd_CTA_1', 0.7, { y: -165 });
