// აპლიკაცია: გამოიცანით რიცხვი

// ამ თამაშში პროგრამა აგენერირებს შემთხვევით რიცხვს მითითებული დიაპაზონიდან.
// მომხმარებლებს სთხოვენ გამოიცნონ რიცხვი.
// არასწორი რიცხვის შემთხვევაში პროგრამა მომხმარებელს აძლევს მინიშნებას (უფრო მაღალი/უფრო დაბალი).
// თამაში აკონტროლებს მცდელობების რაოდენობას და აჩვენებს შედეგს,
// როდესაც მომხმარებელი გამოიცნობს სწორ რიცხვს.

guessNumber();
function guessNumber() {
  let lowerNumber = 1; //დიაპაზონის განსაზღვრა
  let upperNumber = 9;

  //პროგრამის მიერ გამოსაცნობი რიცხვის დაგენერირება

  let randomNumber =
    Math.floor(Math.random() * (upperNumber - lowerNumber + 1)) + lowerNumber;

  let attempts = 0; //ჩაწერილი რიცხვის მცდელობების განსაზღვრა

  while (true) {
    //while ციკლით შეასრულოს, სანამ ეს პირობა სწორია

    // მომხმარებელს ვთხოვთ შეიყვანოს რიცხვი დიაპაზონიდან

    let userGuess = parseInt(
      prompt(`Guess the number between ${lowerNumber} and ${upperNumber}:`)
    );
    console.log("Your number was: ", userGuess);

    if (isNaN(userGuess) || userGuess === null) {
      //თუ ჩაწერილი რიცხვი არ არის number ტიპის ან საერთოდ არ ჩაწერს არაფერს,
      alert("Please enter a valid number."); //დაუწეროს რომ ჩაწეროს რიცხვი.
      continue; //განაგრძოს თუკი სწორია
    }

    attempts++; //მცდელობების დათვლა

    if (userGuess === randomNumber) {
      alert(
        `Congratulations^_^ You guessed the number ${randomNumber} in ${attempts} attempts.`
      );
      console.log(
        `You guessed the number ${randomNumber} in ${attempts} attempts.`
      ); //თუ გამოიცნობს დაუწეროს რომ გამოიცნო კონკრეტულ ცდაში.
      break; //დაასრულოს თუ სწორია
    } else if (userGuess < randomNumber) {
      //თუ ჩწერილი რიცხვი ნაკლებია გამოსაცნობ რიცხვზე, გვიწერს რომ ჩაწეროს მაღალი რიცხვი, წინააღმდეგ შემთხვევაში-დაბალი.
      alert("The number is lower.");
    } else {
      alert("The number is higher.");
    }
  }
}

// აპლიკაცია: კალკულატორი

// კალკულატორის ფუნქცია მომხმარებლებს საშუალებას აძლევს შეასრულონ ძირითადი არითმეტიკული მოქმედებები:
// (+, -, *, /). მომხმარებლებს შეუძლიათ შეიყვანონ ორი რიცხვი და შემდეგ აირჩიონ ოპერაცია შედეგის მისაღებად.
// კალკულატორი ასევე შეიცავს შეყვანის ვალიდაციას არასწორი შეყვანების დასამუშავებლად.

// calculator();
function calculator() {
  let number1 = prompt("Enter the first number:"); //ჩაწეროს პირველი რიცხვი

  while (isNaN(number1) || number1 === null) {
    // პირობის არსებობამდე შეასრულოს- თუ ჩაწერილი რიცხვი არ არის number ტიპის ან საერთოდ არ ჩაწერს არაფერს, დაუწეროს რომ ჩაწეროს რიცხვი ახლიდან.
    alert("Please, enter a valid number.");
    number1 = prompt("Enter the first number:");
  }

  let number2 = prompt("Enter the second number:");

  while (isNaN(number2) || number2 === null) {
    alert("Please, enter a valid number.");
    number2 = prompt("Enter the second number:");
  }

  let operation = prompt("Choose an operation (+, -, *, /):"); //აირჩიოს ოპერაცია

  while (!["+", "-", "*", "/"].includes(operation)) {
    //თუ არ აირჩევს აქედან რომელიმე ოპერაციას, მისცეს ახლიდან სწორად ჩაწერის შესაძლებლობა.
    alert("Please choose only one +, -, *, or /.");
    operation = prompt("Choose an operation (+, -, *, /):");
  }

  let result; //ვსაზღვრით შედეგს

  switch (
    operation //ვასრულებთ თითოეული ოპერაციის არჩევის შემთხვევებს
  ) {
    case "+":
      result = +number1 + +number2;
      break; //დაასრულოს მცდელობა
    case "-":
      result = number1 - number2;
      break;
    case "*":
      result = number1 * number2;
      break;
    case "/":
      result = number2 !== 0 ? number1 / number2 : "Cannot divide by zero"; //თუ ჩაწერილი მეორე რიცხვი ნული არ არის, შეასრულოს გაყოფა.
      break;
    default: //თუ არაფერს დაწერს, არასწორი ოპერაციაა
      result = "Invalid operation";
  }

  console.log(`Result: ${result}`); //გამოგვაქვს ოპერაციის შესრულების შედეგი.
}
