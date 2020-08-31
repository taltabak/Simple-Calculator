 $("document").ready(function() 
 {
  $("#screendiv").text(0);
  var eq = false;

  $(".number").click(function() 
  {
    if($(this).val() == "AC")
      $("#screendiv").text(0);
    else if(eq == true)
      {
        eq = false;
        if($(this).val() == ".")
          $("#screendiv").text(0.);
        else
          $("#screendiv").text($(this).val());
      }
    else if($("#screendiv").text().length > 10)
      return;
    else if($(this).val() == "."){
      if(checkfordots($("#screendiv").text()))
        $("#screendiv").text($("#screendiv").text()+ $(this).val());}
    else if($("#screendiv").text() === "0")
      $("#screendiv").text($(this).val());
    else
      $("#screendiv").text($("#screendiv").text()+ $(this).val());

 	});

  $(".operator").click(function() 
  {
    eq = false;
    if(!checklastoperator($("#screendiv").text()))
      return;
    else if(checkoperator($("#screendiv").text()))
      {
        equals();
        eq = false;
        $("#screendiv").text($("#screendiv").text()+ $(this).val());  
      }
    else if($("#screendiv").text().length > 9)
      return;
    else
      $("#screendiv").text($("#screendiv").text()+ $(this).val());
  });

  $("#equal").click(function() 
  {
    if(!checklastoperator($("#screendiv").text()))
      return;
    equals();
  });



  function equals()
  {
    var txt  =  $("#screendiv").text().replace("÷", "/");
    txt = txt.replace("×", "*");
    $("#screendiv").text(eval(txt));
    eq = true;
  }

  function checkoperator(str)
  {
    var operators = [/[+]/ , /[-]/ , /[×]/ , /[÷]/];
    for( i = 0 ; i < 4 ; i++)
      if(str.search(operators[i]) != -1)
        return true;
      return false;
  }

  function checklastoperator(str)
  {
    var operators = ["+" , "-" , "×" , "÷"];
    for( i = 0 ; i < 4 ; i++)
      if(str.slice(-1) == operators[i])
        return false;
    return true;
  }

  function checkfordots(str)
  {
    var operators = [/[+]/ , /[-]/ , /[×]/ , /[÷]/];
    for( i = 0 ; i < 4 ; i++)
    {
      var arr = str.split(operators[i]);
      if(arr.length > 1)
      {
        if(checkforadot(arr[1]))
          return true;
        else
          return false;
      }
    }    
    if(checkforadot(str))
      return true;
    return false;  
  }

  function checkforadot(str)
  {
    if(str.search(/[.]/) == -1)
      return true;
    return false;
  }

});



