var tl1 = new TimelineMax({});

tl1.to('#myAd_cans', 2, { scale: 1.5, x: 120, y: 10, rotationZ: 0.01 }, '-=1');

var tl2 = new TimelineMax({ repeat: -1, yoyo: true });
tl2.to('#myAd_CTA_1', 0.7, { x: -165 });
