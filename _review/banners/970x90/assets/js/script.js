var tl1 = new TimelineMax({});

tl1.from('#myAd_cans', 2, { scale: 1.5, x: 120, y: 10, rotationZ: 0.01 }, '-=1')
   .from('#myAd_legal', .3, { opacity:0} );

var tl2 = new TimelineMax({ repeat: 4, yoyo: true, repeatDelay: 1});
tl2.to('#myAd_CTA_1', 0.7, { y: -165 });
