const firstPart = ["You are destined for greatness", "Embrace change", "Dream big", "Stay positive", "Believe in yourself"];
const secondPart = ["and amazing things will happen", "and great opportunities will come your way", "and you'll achieve your dreams", "and happiness will follow"];
const thirdPart = ["Remember to smile!", "Keep going!", "You've got this!", "Seize the day!"];

function Messages(){
    const first = firstPart[Math.floor(Math.random() * firstPart.length)];
    const second = secondPart[Math.floor(Math.random() * secondPart.length)];
    const third = thirdPart[Math.floor(Math.random() * thirdPart.length)];
    const Message = first + second+ ". " + third;
    
    return Message;
}

const randomMessage = Messages();
console.log(randomMessage);

