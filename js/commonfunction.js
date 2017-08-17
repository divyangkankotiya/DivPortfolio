/*
 allLetters : Validation for Only Letters values.
 paraValue : pass value to be checked
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 */
function validLetters(paraValue , caption , customMsg)
{
    var pattern = /^[A-Za-z\s]+$/;
    if (paraValue.value.match(pattern))
    {
        return true;
    }
    else
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please enter alphabet characters only for '" + caption + "'.");
        }
        paraValue.focus();
        return false;
    }
}
/*
 alphanumeric : Validation for Alpha Numeric values.
 paraValue : pass value to be checked
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 */
function validAlphaNumeric(paraValue , caption , customMsg)
{
    var pattern = /^[0-9a-zA-Z\s]+$/;
    if (paraValue.value.match(pattern))
    {
        return true;
    }
    else
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please enter alphabet characters only for '" + caption + "'.");
        }
        paraValue.focus();
        return false;
    }
}
/*
 ValidateEmail : Validation for Email Address.
 paraValue : pass value to be checked
 caption : pass caption to be shown in alert
 customMsg : pass mesage if you want to alert custom message otherwise leave it blank like ""
 */
function ValidEmail(paraValue , caption , customMsg)
{
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (paraValue.value.match(pattern))
    {
        return true;
    }
    else
    {
        if (customMsg.trim().length > 0)
        {
            alert(customMsg);
        }
        else
        {
            alert("Please enter valid value for '" + caption + "'");
        }
        paraValue.focus();
        return false;
    }
}