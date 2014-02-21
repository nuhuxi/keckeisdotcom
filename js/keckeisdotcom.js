           


$(document).ready(function()
{
    // When the page loads, show the home banner
    $("#banner-home").show();
    $("#banner-whatsthat").hide();
    $("#banner-shouldicare").hide();
    $("#banner-wecanhelp").hide();
    $("#banner-aboutus").hide();

    $("#proposal-home").show();
    $("#proposal-whatsthat").hide();
    $("#proposal-shouldicare").hide();
    $("#proposal-wecanhelp").hide();
    $("#proposal-aboutus").hide();

    //These are the scripts for the buttons

    $("#lnk-home-button").on({
        click: function() {
            $("#banner-home").show();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutus").hide();

            $("#proposal-home").show();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutus").hide();
            }
   
    })
    $("#lnk-what-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").show();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutus").hide();

            $("#proposal-home").hide();
            $("#proposal-whatsthat").show();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutus").hide();
        }   
    })
    $("#lnk-care-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").show();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutus").hide();

            $("#proposal-home").hide();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").show();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutus").hide();
        } 
    })  
    $("#lnk-help-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").show();
            $("#banner-aboutus").hide();

            $("#proposal-home").hide();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").show();
            $("#proposal-aboutus").hide();
        }
    })
    $("#lnk-about-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutus").show();

            $("#proposal-home").hide();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutus").show();
        }
    })

});﻿
// This is a comment