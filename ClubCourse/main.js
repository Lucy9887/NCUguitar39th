$(document).ready(function(){
    
    $("#courseTable").append("<tr><th>週一</th><th>週二</th><th>週三</th><th>週四</th><th>週五</th><th>週六</th><th>週日</th><tr>");
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;
    
    for(var x=0;x<topicCount;x=x+7)
    {
        var y=x+1;
        var z=x+2;
        var a=x+3;
        var b=x+4;
        var c=x+5;
        var d=x+6;
        $("#courseTable").append("<tr>");
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+x*dayUnit))).toLocaleDateString().slice(5)+"<br>"+topic[x]+"</td>");
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+(x+1)*dayUnit))).toLocaleDateString().slice(5)+"<br>"+topic[y]+"</td>");
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+(x+2)*dayUnit))).toLocaleDateString().slice(5)+"<br>"+topic[z]+"</td>");
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+(x+3)*dayUnit))).toLocaleDateString().slice(5)+"<br>"+topic[a]+"</td>");   
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+(x+4)*dayUnit))).toLocaleDateString().slice(5)+"<br>"+topic[b]+"</td>"); 
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+(x+5)*dayUnit))).toLocaleDateString().slice(5)+"<br>"+topic[c]+"</td>");   
        $("#courseTable").append("<td>"+(new Date((startDate.getTime()+(x+6)*dayUnit))).toLocaleDateString().slice(5)+"<br>"+topic[d]+"</td>");   
        $("#courseTable").append("</tr>");
    }
});
