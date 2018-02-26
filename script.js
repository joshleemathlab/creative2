$(document).ready(function() {

    $("#recipeSubmit").click(function(e) {
      e.preventDefault();
      var value = $("#recipeInput").val();
      console.log(value);
      
      var myurl= "http://api.yummly.com/v1/api/recipes?_app_id=84595f8e&_app_key=256cc9c10912cab72e895321f2477a8f&q=" + value;
        $.ajax({
        url : myurl,
        dataType : "json",
        success : function(json) {
          console.log(json);
          var results = "";
          results += '<h2>Yummy results for "' + value + '"</h2><br>';
        for (var i=0; i<json.matches.length; i++) {
            
            results += '<img src="'+json.matches[i].smallImageUrls+'"/> </p>';
            //console.log(json.matches[i].smallImageUrls);
            results += '<b><u>'+json.matches[i].recipeName + "</p></u></b>";
            //results += "Ingredients: </p>";
            for(var j=0; j<json.matches[i].ingredients.length; j++){
                results += "   &#x2022 "+json.matches[i].ingredients[j] + "</p>";
            }
            results += "<hr></p>"
          }
          results += "</p>";
          $("#recipeResults").html(results);
        }
      });
    });
});

