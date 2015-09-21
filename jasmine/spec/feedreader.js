$(function() {
    describe('RSS Feeds', function() {//Tests the RSS feeds array

        it('Are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        it('Links are defined', function() {
            for(var i = 0; i < allFeeds.length; i++){
            expect(allFeeds[i].url).toBeDefined();
            expect(allFeeds[i].url).not.toBe("");//Checks if all the links are defined
            }
        });

        it('Names are defined', function() {
            for(var i = 0; i < allFeeds.length; i++){
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name).not.toBe("");//Checks if all the names for the links are defined
            }
        });
    });

    describe('The menu', function() {//Tests the menu

        it('Hidden by default', function() {
            var bodyHidden = $("body").hasClass( "menu-hidden" );//Checks if the menu is hidden by default
            expect(bodyHidden).toBe(true);
        });

        it('Visible on click', function() {
            var menuIcon = $(".menu-icon-link");
            menuIcon.click();
            var bodyHidden = $("body").hasClass( "menu-hidden" );//Checks if the menu appears when clicked
            expect(bodyHidden).toBe(false);
        });

        it('Hidden on second click', function() {
            var menuIcon = $(".menu-icon-link");
            menuIcon.click();
            var bodyHidden = $("body").hasClass( "menu-hidden" );//Checks if it toggles when clicked the second time
            expect(bodyHidden).toBe(true);
        });
    });

    describe('Inital Entries', function() {//Checks if we have feed entries of first load

        beforeEach(function(done) {
            loadFeed(0,done);
        });

        it('Has entries on first load', function() {
                var hasEntries = $( "article" ).hasClass( "entry" );//We check if the entry class is present to confirm it
                expect(hasEntries).toBe(true);
            });
        });

    describe('New Feed Selection', function() {//Checks if we load different feeds when changing the topic

        var result1,result2;

        beforeEach(function(done) {
            loadFeed(1,function(){
                result1 = $( ".feed" ).html();
                done();
            });
        });

        it('Loads different feeds', function(done) {
            loadFeed(0,function(){
                result2 = $( ".feed" ).html();
                expect(result1).not.toEqual(result2);//We compare two differnt feeds based on two different topics to confirm
                done();
            });
        });
    });
}());