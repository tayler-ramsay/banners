var tl1 = new TimelineMax({});

tl1
.from('#myAd_SD', 1.5, {x: 150, ease:  Power4.easeOut})
.from('#myAd_JMH', 1.5, {x: -155, ease:Power4.easeOut},'-=1.5')
.to('#myAd_JMH', .4, {scale: 1.28, x:55, y:50, ease: Power4.easeOut, delay: 1})
.to('#myAd_SD', 1, {x: 150,  ease: Power4.easeOut},'-=.4')
.to('#myAd_CTA_1',.5,{y:250,  ease: Power4.easeOut},'-=.9');


// var tl2 = new TimelineMax({ repeat: -1, yoyo: true, repeatDelay: 1});
// tl2.to('#myAd_CTA_1', 0.7, { y: -165 });
