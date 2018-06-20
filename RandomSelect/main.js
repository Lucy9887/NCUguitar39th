$(document).ready(function(){
   $("#WhichOne").click(function()
    {   
       var numberOfListItem = $("#choices li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("H1").text($("#choices li").eq(randomChildNumber).text());
       $("#getArtist").click(function(){
           switch(randomChildNumber){
            case 0:
                var GetHref=location.assign("UtubePlayer1.html");
                break;
            case 1:
                var GetHref=location.assign("UtubePlayer2.html");
                break;
            case 2:
                var GetHref=location.assign("UtubePlayer3.html");
                break;
            case 3:
                var GetHref=location.assign("UtubePlayer4.html");
                break;
            case 4:
                var GetHref=location.assign("UtubePlayer5.html");
                break;
            case 5:
                var GetHref=location.assign("UtubePlayer6.html");
                break;
            case 6:
                var GetHref=location.assign("UtubePlayer7.html"); 
                break;
            case 7:
                var GetHref=location.assign("UtubePlayer8.html");
                break;
            default: 
                alert("請先得到歌手！");
                break;
           }
       })
       
   })
});
    
   
    /*$("#getArtist").click(function()
    {   var TextofArtist = $("H1").text;
       if(TextofArtist =="謝震廷"){
           
        else {
           if(TextofArtist=="徐佳瑩")
            }
        })*/
   
/*
        switch(TextofArtist){
            case 0:
                if(TextofArtist =="?"){
                    alert("請先得到歌手！");
                }
                break;
            case 1:
                if(TextofArtist=="謝震廷"){
            location= "UtubePlayer1.html";
        }
                break;
            case 2:
                if(TextofArtist=="徐佳瑩"){
            location ="UtubePlayer2.html";
        }
                break;
            case 3:
                if(TextofArtist=="魏如萱"){
            location = "UtubePlayer3.html";
        }
                break;
            case 4:
                if(TextofArtist=="Crispy樂團"){
            location = "UtubePlayer4.html";
        }
                break;
            case 5:
                if(TextofArtist=="柯智棠"){
            location = "UtubePlayer5.html";
        }
                break;
            case 6:
                if(TextofArtist=="吳汶芳"){
            location= "UtubePlayer6.html";
        }
                break;
            case 7:
                if(TextofArtist=="Hush"){
            location="UtubePlayer7.html";
        }
                break;
            case 8:
                if(TextofArtist=="洪安妮"){
            location="UtubePlayer8.html";
        }
                break;
            default: 
                return;
        }*/