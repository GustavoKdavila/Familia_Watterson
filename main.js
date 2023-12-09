var images = [
"gumball projeto 2.png",
"gumball projeto 3.webp",
"gumball projeto 4.png",
"gumball projeto 5.png",
"gumball projeto 6.png"
];
var names = 
[
    "Gumball", "Darwin", "Anais", "Nicole", "Ricardo"
];

var i = 0;
function update()
{
    i++;
    var numbersOfFamilyMemberInArray = 5
    if(i > numbersOfFamilyMemberInArray )
    {
        i = 0;
    }
    var updatedImage = images[i];
    var updatedName = names[i];
    document.getElementById("familyMemberImage").src = updatedImage;
    document.getElementById("familyMemberName").innerHTML = updatedName;
}