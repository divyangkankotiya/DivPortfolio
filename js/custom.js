/* HTML document is loaded. DOM is ready.
 -------------------------------------------*/
$(function ()
{

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element') , function (el)
    {
        return $(el).text();
    });
    $(".element").typed({
        strings : subElementArray ,
        typeSpeed : 30 ,
        contentType : 'html' ,
        showCursor : false ,
        loop : true ,
        loopCount : true ,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)
     ---------------------------------------------------------------------------------*/
    $('.templatemo-nav').singlePageNav({
        offset : $(".templatemo-nav").height() ,
        filter : ':not(.external)' ,
        updateHash : false
    });

    /* start navigation top js */
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 58)
        {
            $(".templatemo-nav").addClass("sticky");
        }
        else
        {
            $(".templatemo-nav").removeClass("sticky");
        }
    });

    /* Hide mobile menu after clicking on a link
     -----------------------------------------------*/
    $('.navbar-collapse a').click(function ()
    {
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart' , function ()
    {});

    /* wow
     -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function ()
{
    $('.preloader').fadeOut(1000); // set duration in brackets
});
/* end preloader */
function validateForm()
{
    // Form Validation
    var varFname = document.getElementById("fullname");
    var varEmail = document.getElementById("email");
    var varMsg = document.getElementById("message");
    if (validLetters(varFname))
    {
        if (ValidEmail(varEmail))
        {
            if (validMsg(varMsg))
            {
                if (sendMail(varFname , varEmail , varMsg))
                {
                    $("#idSpanResult").html("Your message is successfully submited. \n I will contact you soon.");
                    $("#idSpanResult").css("background-color" , "green");
                    varFname.value = "";
                    varEmail.value = "";
                    varMsg.value = "";
                    $("#idSpanName").html("");
                    $("#idSpanEmail").html("");
                    $("#idSpanMessage").html("");
                }
                else
                {
                    $("#idSpanResult").html("There is some technichal problem, Please try again later.");
                    $("#idSpanResult").css("background-color" , "red");
                }
                $('html, body').scrollTop($(document).height());
                return true;
            }
            else
            {
                $("#idSpanMessage").html("<b>Please enter value for 'MESSAGE'.</b>");
                return false;
            }
        }
        else
        {
            $("#idSpanEmail").html("<b>Please enter valid value for 'EMAIL'.</b>");
            return false;
        }
    }
    else
    {
        $("#idSpanName").html("<b>Please enter valid value for 'FULL NAME'.</b>");
        return false;
    }
}
function fnClearValue()
{
    var varFname = document.getElementById("fullname");
    var varEmail = document.getElementById("email");
    var varMsg = document.getElementById("message");
    $("#idSpanResult").html("");
    varFname.value = "";
    varEmail.value = "";
    varMsg.value = "";
    $("#idSpanName").html("");
    $("#idSpanEmail").html("");
    $("#idSpanMessage").html("");
}
function clrValue(id)
{
     $("#"+id).html("");
}