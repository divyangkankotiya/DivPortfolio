function validLetters(paraValue)
{
    var pattern = /^[A-Za-z\s]+$/;
    if (paraValue.value.trim().length > 0  && paraValue.value.trim().match(pattern))
    {
        return true;
    }
    else  
    {
        paraValue.focus();
        return false;
    }
}
function validMsg(paraValue)
{
    if (paraValue.value.trim().length > 0)
    {
        return true;
    }
    else
    {
        paraValue.focus();
        return false;
    }
}
function ValidEmail(paraValue)
{
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (paraValue.value.trim().length > 0  && paraValue.value.trim().match(pattern))
    {
        return true;
    }
    else
    {
        paraValue.focus();
        return false;
    }
}