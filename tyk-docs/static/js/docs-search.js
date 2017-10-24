/* Instantsearch for English */

var ENindex = instantsearch({
  appId: 'EIXQM46UN9',
  apiKey: '2fe33796b7f332e9a8ecc25de3d5e0be',
  indexName: 'tyk-docs',
  query: 'query',
  advancedSyntax: true,
  searchFunction(helper) {
    var hits = document.getElementById("hits");
    var pagination = document.getElementById("pagination");
    var algLogo = document.getElementById("algolia-logo");

    if (helper.state.query === '') {
        hits.style.display = 'none';
        pagination.style.display = 'none';
        algLogo.style.display = 'none';
      return;
    }

    helper.setQueryParameter('attributesToSnippet', ['article:10']);
    helper.setQueryParameter('advancedSyntax', true).search();

    hits.style.display = 'block';
    pagination.style.display = 'block';
    algLogo.style.display = 'block';

    helper.search();

  }
});

ENindex.addWidget(
  instantsearch.widgets.searchBox({
    container: '#q',
    autofocus: false
  })
); 


var hitTemplate =
  '<div class="hit media">' +
    '<div class="media-body">' +
      '<div class="media-body-title"><a href="/docs{{path}}" <h4 class="media-heading">{{section}} - {{{_highlightResult.title.value}}}.</h4></p> </a></div>' +
      '<div class="media-body-body"><a href="/docs{{path}}" <h4 class="media-heading em">..{{{_snippetResult.article.value}}}..</h4></p> </a></div>' +
    '</div>' +
  '</div>';

var noResultsTemplate =
  '<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>';

ENindex.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    autofocus: false,
    hitsPerPage: 5,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplate,
    }
  })
);

ENindex.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination',
    cssClasses: {
      root: 'pagination',
      active: 'active'
    }
  })
);

ENindex.start();

/* Instantsearch for Korean */

var KOindex = instantsearch({
  appId: 'EIXQM46UN9',
  apiKey: '2fe33796b7f332e9a8ecc25de3d5e0be',
  indexName: 'korean-test',
  query: 'query',
  advancedSyntax: true,
  searchFunction(helper) {
    var hits = document.getElementById("hits");
    var pagination = document.getElementById("pagination");
    var algLogo = document.getElementById("algolia-logo");

    if (helper.state.query === '') {
        hits.style.display = 'none';
        pagination.style.display = 'none';
        algLogo.style.display = 'none';
      return;
    }

    helper.setQueryParameter('attributesToSnippet', ['article:10']);
    helper.setQueryParameter('advancedSyntax', true).search();

    hits.style.display = 'block';
    pagination.style.display = 'block';
    algLogo.style.display = 'block';

    helper.search();
  }
});

KOindex.addWidget(
  instantsearch.widgets.searchBox({
    container: '#q',
    autofocus: false
  })
); 

var hitTemplateKo =
  '<div class="hit media">' +
    '<div class="media-body">' +
      '<div class="media-body-title"><a href="/docs{{path}}" <h4 class="media-heading">{{section}} - {{{_highlightResult.title.value}}}.</h4></p> </a></div>' +
      '<div class="media-body-body"><a href="/docs{{path}}" <h4 class="media-heading em">..{{{_snippetResult.article.value}}}..</h4></p> </a></div>' +
    '</div>' +
  '</div>';

KOindex.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    autofocus: false,
    hitsPerPage: 5,
    templates: {
      empty: noResultsTemplate,
      item: hitTemplateKo,
    }
  })
);

KOindex.start();