let choices = ['rock', 'paper', 'scissor'];
const player_field = document.getElementById("pl");
const comp_field = document.getElementById("cl");
const result_field = document.getElementById("result");

let points = 0;

function playgame(userchoice) {
    let result = "";
    let computer_choice = choices[Math.floor(Math.random() * 3)];
    player_field.textContent = userchoice;
    comp_field.textContent = computer_choice;

    if (userchoice === computer_choice) {
        result = "It's a Tie 😹";
    } else {
        switch (userchoice) {
            case "rock":
                result = (computer_choice == "scissor") ? "You Won😁" : "You Lost🥲";
                break;

            case "paper":
                result = (computer_choice == "rock") ? "You Won😁" : "You Lost🥲";
                break;

            case "scissor":
                result = (computer_choice == "paper") ? "You Won😁" : "You Lost🥲";
                break;
        }
    }

    switch (result) {
        case "You Won😁":
            points++;
            result += ` Your current points : ${points}`;
            break;
        case "It's a Tie 😹":
            result += ` Your current points : ${points}`;
            break;
        default:
            points++;
            result += ` Sorry, you did not win any points this round! Try again...✌️`;
            break;
    }

    result_field.textContent = result;
}
