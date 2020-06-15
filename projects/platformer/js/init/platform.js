(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

        // example:
        
        //horizontal lines:
        createPlatform(0, 165, .1, .5);
        createPlatform(0, 290, .1, .5);
        createPlatform(150, 355, .5, .5);
        createPlatform(150, 605, .5, .5);
        createPlatform(175, 105, .5, .5);
        createPlatform(350, 545, .5, .5);
        createPlatform(515, 355, .5, .5);
        createPlatform(675, 150, .5, .5);
        createPlatform(853, 355, .1, .5);
        createPlatform(853, 450, .1, .5);
        createPlatform(853, 545, .1, .5);
        
        //vertical lines:
        createPlatform(150, 605, .03, 2);
        createPlatform(350, 557, .03, 2);
        
        //My own border:
        createPlatform(0, 1, .03, 5000);
        createPlatform(0, 0, 5000, .4);
        createPlatform(888, 1, .03, 5000);
        
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);