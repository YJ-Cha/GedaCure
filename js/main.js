new fullpage('#fullpage', {
	//options here
    menu: '.gnb_list',
    anchors: ['s1', 's2', 's3', 's4', 's5'],
    // sectionsColor: ['indianred', 'lemonchiffon', 'mediumaquamarine', 'mediumpurple'],
	autoScrolling: true,
	scrollHorizontally: true,
    scrollBar: true,
    easing: 'easeInOutCubic',
    navigation: true,
	navigationPosition: 'right',
	navigationTooltips: ['GAH소개', '제다큐어', '연구개발', '본사위치', '연구소위치'],
    normalScrollElements: '.s2',
});

