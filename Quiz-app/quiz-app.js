const quiz =  [
        {
            question: "What is the capital of France?",
            ans1text: "Berlin",
            ans2text: "Madrid",
            ans3text: "Paris",
            ans4text: "Rome",
            answer: "Paris"
        },
        {
            question: "Which programming language is known as the language of the web?",
            ans1text: "Python",
            ans2text: "JavaScript",
            ans3text: "Java",
            ans4text: "C++",
            answer: "JavaScript"
        },
        {
            question: "What is the largest planet in our solar system?",
            ans1text: "Earth",
            ans2text: "Mars",
            ans3text: "Jupiter",
            ans4text: "Venus",
            answer: "Jupiter"
        },
        {
            question: "Who painted the Mona Lisa?",
            ans1text: "Vincent van Gogh",
            ans2text: "Pablo Picasso",
            ans3text: "Leonardo da Vinci",
            ans4text: "Claude Monet",
            answer: "Leonardo da Vinci"
        }
    ]

    const question = document.getElementById("quiz-question");
    console.log(question);
    console.log(question.textContent);

    const option_a = document.getElementById("text_option_a");
    const option_b = document.getElementById("text_option_b");
    const option_c = document.getElementById("text_option_c");
    const option_d = document.getElementById("text_option_d");

    console.log(option_a);
    console.log(option_b);
    console.log(option_c);
    console.log(option_d);

    console.log(option_a.textContent);
    console.log(option_b.textContent);
    console.log(option_c.textContent);
    console.log(option_d.textContent);

    let currentQuestion = 0;
    let score = 0;

    console.log(quiz[currentQuestion].question);
    console.log(quiz[currentQuestion].ans1text);
    console.log(quiz[currentQuestion].ans2text);
    console.log(quiz[currentQuestion].ans3text);
    console.log(quiz[currentQuestion].ans4text);

    question.textContent = quiz[currentQuestion].question;
    option_a.textContent = quiz[currentQuestion].ans1text;
    option_b.textContent = quiz[currentQuestion].ans2text;
    option_c.textContent = quiz[currentQuestion].ans3text;
    option_d.textContent = quiz[currentQuestion].ans4text;

    submit.addEventListener("click", () => {
        const checkedAns = document.querySelector('input[type="radio"]:checked');
        console.log(checkedAns);
        console.log(checkedAns.nextElementSibling.textContent);
        if(checkedAns === null){
            alert("Please selcet an answer");
        }else{
            if(checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
                score++;
            }
            
            currentQuestion++;
            if( currentQuestion < quiz.length){
                question.textContent = quiz[currentQuestion].question;
                option_a.textContent = quiz[currentQuestion].ans1text;
                option_b.textContent = quiz[currentQuestion].ans2text;
                option_c.textContent = quiz[currentQuestion].ans3text;
                option_d.textContent = quiz[currentQuestion].ans4text;
                checkedAns.checked = false;
            }else{
                alert("Your score is " + score + " out of " + quiz.length);
                location.reload();
            }
        }
    });