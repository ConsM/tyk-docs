var doNav = function() {
	var currentPage = location.pathname,
		currentPageGH = currentPage.replace(/\/$/, ""),
		githubIndexLink = currentPage.replace(/\/docs/, "/"),
		githubCustomLink = currentPageGH.replace(/\/docs/, "/"),
		githubKOIndexLink = currentPage.replace(/\/docs\/ko-kr/, "/"),
		githubKOCustomLink = currentPageGH.replace(/\/docs\/ko-kr/, "/"),
		prevPage, nextPage, currentPageIndex,
		troubleshootingURL = /\/docs\/troubleshooting\//;
		faqURL = /\/docs\/frequently-asked-questions\//;
		links = $('.st-treed a'),
		getURL = location.pathname,
    langCode = getURL.split('/')[2];

	function getCurrentPageIndex(arr, page) {
		var i;

		for (i = 0; i < arr.length; i++) {
			if(arr[i].link + '/' === page || arr[i].link === page) {
				return i;
			}
		}
		return -1;
	}

	links = links.map(function(index, item) { 
		return {
			text: $(item).text(),
			link: $(item).attr('href')
		}; 
	}).toArray();

	currentPageIndex = getCurrentPageIndex(links, currentPage);
	nextPage = (currentPageIndex === links.length - 1) ? '' : links[currentPageIndex + 1];
	prevPage = (currentPageIndex === 0) ? '' : links[currentPageIndex - 1];

	if(!prevPage) {
		$('#previousArticle').hide();
	} else {
		$("#previousArticle").text(prevPage.text).attr('href', prevPage.link);	
	}
	
	if(!nextPage) {
		$('#nextArticle').hide();
	} else {
		$("#nextArticle").text(nextPage.text).attr('href', nextPage.link);	
	}

	$('.suggest-edit').on('click', function (e){
		e.preventDefault();

	    if ( $('.active').hasClass('st-open')){
	    	if (langCode == 'ko-kr') {
	    		window.open("https://github.com/TykTechnologies/tyk-docs/tree/master/tyk-docs/content" + githubKOIndexLink + 'index.ko.md', "_blank");
	    	}
	    	else {
					window.open("https://github.com/TykTechnologies/tyk-docs/tree/master/tyk-docs/content" + githubIndexLink + 'index.md', "_blank");
				}
			} 
			else if ( $('.active').hasClass('st-file') && $('.active').closest('.st-open').length === 0) {
				if (langCode == 'ko-kr') {
					window.open("https://github.com/TykTechnologies/tyk-docs/tree/master/tyk-docs/content" + githubKOIndexLink + 'index.ko.md', "_blank");
				}
				else {
					window.open("https://github.com/TykTechnologies/tyk-docs/tree/master/tyk-docs/content" + githubIndexLink + 'index.md', "_blank");
				}
			} 
			else if ( $('.active').hasClass('st-file') ) {
				if (langCode == 'ko-kr') {
					window.open("https://github.com/TykTechnologies/tyk-docs/tree/master/tyk-docs/content" + githubKOCustomLink + "ko.md", "_blank");
				}
				else {
					window.open("https://github.com/TykTechnologies/tyk-docs/tree/master/tyk-docs/content" + githubCustomLink + ".md", "_blank");
				}
			}
	});


	if((location.pathname.match(troubleshootingURL)) ||  (location.pathname.match(faqURL)) ) {
		$('#previousArticle').hide();
		$('#nextArticle').hide();
	}
};

$(document).ready(doNav);
$(document).on('turbolinks:load', doNav);
