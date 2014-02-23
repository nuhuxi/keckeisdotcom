           


$(document).ready(function()
{
    // When the page loads, show the home banner
    $("#banner-home").show();
    $("#banner-whatsthat").hide();
    $("#banner-shouldicare").hide();
    $("#banner-wecanhelp").hide();
    $("#banner-aboutme").hide();
    $("#banner-contact").hide();

    $("#proposal-home").show();
    $("#proposal-whatsthat").hide();
    $("#proposal-shouldicare").hide();
    $("#proposal-wecanhelp").hide();
    $("#proposal-aboutme").hide();
    $("#proposal-contact").hide();

    //These are the scripts for the buttons

    $("#lnk-home-button").on({
        click: function() {
            $("#banner-home").show();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutme").hide();
            $("#banner-contact").hide();

            $("#proposal-home").show();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutme").hide();
            $("#proposal-contact").hide();
            }
   
    })

    $("#lnk-what-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").show();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutme").hide();
            $("#banner-contact").hide();

            $("#proposal-home").hide();
            $("#proposal-whatsthat").show();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutme").hide();
            $("#proposal-contact").hide();
        }   
    })

    $("#lnk-care-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").show();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutme").hide();
            $("#banner-contact").hide();

            $("#proposal-home").hide();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").show();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutme").hide();
            $("#proposal-contact").hide();

        } 
    })

    $("#lnk-help-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").show();
            $("#banner-aboutme").hide();
            $("#banner-contact").hide();

            $("#proposal-home").hide();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").show();
            $("#proposal-aboutme").hide();
            $("#proposal-contact").hide();
        }
    })

    $("#lnk-aboutme-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutme").show();
            $("#banner-contact").hide();


            $("#proposal-home").hide();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutme").show();
            $("#proposal-contact").hide();
        }
    })

    $("#lnk-contact-button").on({
        click: function() {
            $("#banner-home").hide();
            $("#banner-whatsthat").hide();
            $("#banner-shouldicare").hide();
            $("#banner-wecanhelp").hide();
            $("#banner-aboutme").hide();
            $("#banner-contact").show();


            $("#proposal-home").hide();
            $("#proposal-whatsthat").hide();
            $("#proposal-shouldicare").hide();
            $("#proposal-wecanhelp").hide();
            $("#proposal-aboutme").hide();
            $("#proposal-contact").show();
        }
    })

});﻿
// This is a comment