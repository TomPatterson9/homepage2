const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const months = ["January" , "February", "March","April", "May","June","July","August","September","October","November","December"]
const greets = ["Morning", "Afternoon", "Evening"]

function getDay(){
    const d = new Date();
    let day = d.getDay();
    console.log(d)
    let month = d.getMonth()
    let splitDate = d.toString().split(" ")
    console.log(splitDate)
        console.log(days[day-1])
        console.log(months[month])
        var element = document.getElementById("date")
        element.append(days[day-1] + ", " + splitDate[2] + " " + months[month] + " " + splitDate[3])


}

function greetings(){
    const timePeroids = ["04:00:00", "12:00:00", "18:00:00"]
    const d = new Date();
    let splitDate = d.toString().split(" ")[4]
    let message = ""

    if(splitDate > timePeroids[0] & splitDate < timePeroids[1] ){
        message = greets[0]
    }
    else if(splitDate > timePeroids[1] & splitDate < timePeroids[2]){
        message = greets[1]
    }
    else{
        message = greets[2]
    }
    var element = document.getElementById("greetings")
    element.append("Good " + message)
    console.log(message)
}

greetings();
getDay();