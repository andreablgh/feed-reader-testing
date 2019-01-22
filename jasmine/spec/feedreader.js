/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* For loop */
        it('URL is defined and not empty', function() {
          for(var i = 0; i < allFeeds.length; i++) {
            expect(allFeeds[i].url).toBeDefined(); /*url be defined*/
            expect(allFeeds[i].url.length).not.toBe(0); /*url not be */
          }
          });
        });
        /*for loop that loops through each feed */
        it('names are defined and not empty', function() {
          for(var i= 0; i < allFeeds.length; i++) {
          expect(allFeeds[i].name).toBeDefined(); /*feed name is defined*/
          expect(allFeeds[i].name.length).not.toBe(0); /*feed name is not empty*/
        }
      });
    });

describe('The menu', function() {
  it('menu is hidden', function() {
    expect($('body').hasClass('menu-hidden')).toBe(true);
  })
  /*does the menu display when clicked?*/
     it('should check if menu can show and hide on click', function() {
       $('.menu-icon-link').trigger('click');
       expect($('body').hasClass('menu-hidden')).toBe(false);
      $('.menu-icon-link').trigger('click');
      expect($('body').hasClass('menu-hidden')).toBe(true);
    });
  });


      /* using the beforeEach and done function*/
describe('Initial Entries', function() {
  beforeEach(function(done) {
    loadFeed(0, function() {
      done();
    });
  });

  it('at least a single element', function() {
      expect($('.feed .entry').length).toBeGreaterThan(0); /*there is at least a single .entry element*/
  });
});

    /* because loadFeed() is asynchronous i'm using beforeEach and done functions*/
describe('New Feed Selection', function() {
var startFeed;

  beforeEach(function(done) {
    loadFeed(0, function() {
        var startFeed = $('.feed').html();
    loadFeed(1, function() {
      done();
    });
  });
});

it('new feed loaded', function() {
  var lastFeed = $('.feed').html();
  expect(lastFeed).not.toBe(startFeed); /*the new feed content is not the same as the last, so it changes*/
});
});
