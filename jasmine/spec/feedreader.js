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
        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('Links are defined', function() {
            for(var i = 0; i < allFeeds.length; i++){//Set a loop to go trough the array
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url).not.toBe("");//Check if properties are defined with a jasmine matcher
            }
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names are defined', function() {
            for(var i = 0; i < allFeeds.length; i++){//Set a loop to go trough the array
            expect(allFeeds[i].name).toBeDefined();
            expect(allFeeds[i].name).not.toBe("");//Check if properties are defined with a jasmine matcher
            }
        });
    });

    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('Hidden by default', function() {
            var isHidden = $(".menu-icon-link").hasClass( "hidden" );//Check if the menu icon has a class that makes it hidden
            expect(isHidden).toBe(false);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        it('Visible on click', function() {
            var bodyHidden = $("body").hasClass( "menu-hidden" );
            var menuIcon = $(".menu-icon-link");
            menuIcon.click();
            expect(bodyHidden).toBe(true);//Check the hidden class of the menu on second click
        });

        it('Hidden on second click', function() {
            var bodyHidden = $("body").hasClass( "menu-hidden" );
            var menuIcon = $(".menu-icon-link");
            menuIcon.click();
            expect(bodyHidden).toBe(false);//Check the hidden class of the menu on second click
        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Inital Entries', function() {
        var hasEntry;
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test wil require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
        beforeEach(function(done) {
            loadFeed(0,function(){
                hasEntry = $( "article" ).hasClass( "entry" );//Set up a function to set the hasEentry variable value when the load function is done
                done();
            });
        });

        it('Has entries on first load', function() {
            expect(hasEntry).toBe(true);//Check if the entry class is present
            });
        });

    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var result1,result2;

        beforeEach(function(done) {
            loadFeed(1,function(){
                result1 = $( ".feed" ).html();//Add the html of the first feed result to the variable
                done();
            });
        });

        it('Loads different feeds', function() {
            loadFeed(0,function(){
                result2 = $( ".feed" ).html();//Add the html of the second feed result to the variable
                done();
            });
            expect(result1).not.toEqual(result2);//Check if they are different

        });
    });
}());

