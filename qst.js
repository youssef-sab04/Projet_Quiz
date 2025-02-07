const questions = [
    {
        category : "Programming",
        questions : [ {
                         question : "Which of the following is used to declare a variable in C?" ,
                         options : ["var" , "let" , "int" , "def"] ,
                         correctAnsw : 2 },
                         {
                            question: "What is the correct syntax for a `for` loop in C?",
                            options: ["for (i = 0; i < 10; i++)", "for (i = 0, i < 10, i++)", "loop for i = 0; i < 10;", "for i = 0 to 10"],
                            correctAnsw: 0
                          },
                          {
                            question: "How do you print a message to the console in C?",
                            options: ["print(\"Hello, World!\");", "printf(\"Hello, World!\");", "echo(\"Hello, World!\");", "console.log(\"Hello, World!\");"],
                            correctAnsw: 1
                          },
                          {
                            question: "Which operator is used to take the address of a variable in C?",
                            options: ["&", "*", "#", "$"],
                            correctAnsw: 0
                          },
                          {
                            question: "What is the correct way to allocate memory dynamically in C?",
                            options: ["malloc()", "new", "alloc()", "calloc()"],
                            correctAnsw: 0
                          },
                          {
                            question: "Which of the following is the correct way to declare a class in C++?",
                            options: ["class MyClass {}", "class MyClass;", "create class MyClass {}", "function MyClass {}"],
                            correctAnsw: 0
                          },
                          {
                            question: "Which operator is used to access members of a class in C++?",
                            options: [".", "::", "->", "&"],
                            correctAnsw: 0
                          },
                          {
                            question: "How do you define the main function in C++?",
                            options: ["void main()", "int main()", "main()", "start()"],
                            correctAnsw: 1
                          },
                          {
                            question: "Which of the following is used to handle errors in C++?",
                            options: ["try-catch", "throw-catch", "error-catch", "except-catch"],
                            correctAnsw: 0
                          },
                          {
                            question: "How do you declare a pointer in C++?",
                            options: ["pointer p;", "*p;", "int p*;", "int* p;"],
                            correctAnsw: 3
                          },
                          
                          {
                            question: "What does HTML stand for?",
                            options: ["Hyper Tool Markup Language", "Home Text Markup Language", "Hyper Text Markup Language", "Hyperlinks and Text Markup Language"],
                            correctAnsw: 2
                          },
                          {
                            question: "Which HTML tag is used for inserting a line break?",
                            options: ["<br>", "<break>", "<hr>", "<line>"],
                            correctAnsw: 0
                          },
                          {
                            question: "Which tag is used to create an unordered list in HTML?",
                            options: ["<ol>", "<ul>", "<list>", "<li>"],
                            correctAnsw: 1
                          },
                          {
                            question: "What is the correct HTML tag to display a hyperlink?",
                            options: ["<link>", "<a>", "<href>", "<url>"],
                            correctAnsw: 1
                          },
                          {
                            question: "Which HTML tag is used to define an image?",
                            options: ["<image>", "<src>", "<img>", "<picture>"],
                            correctAnsw: 2
                          },
                          
                          {
                            question: "What is the output of the following code in JS? console.log(2 + '2');",
                            options: ["4", "22", "NaN", "Error"],
                            correctAnsw: 1
                          },
                          {
                            question: "Which of the following is not a data type in JavaScript?",
                            options: ["String", "Number", "Character", "Object"],
                            correctAnsw: 2
                          },
                          {
                            question: "How do you create a function in JavaScript?",
                            options: ["function myFunction() {}", "def myFunction() {}", "create myFunction() {}", "function = myFunction()"],
                            correctAnsw: 0
                          },
                          {
                            question: "What does the `console.log()` function do in JavaScript?",
                            options: ["Logs messages to the console", "Creates a new log file", "Writes data to the screen", "Defines a variable"],
                            correctAnsw: 0
                          },
                          {
                            question: "Which method is used to find the length of a string in JS?",
                            options: ["length()", "size()", "count()", "stringLength()"],
                            correctAnsw: 0
                          },
                          
                          {
                            question: "Which of the following is used to apply styles to HTML elements in CSS?",
                            options: ["class", "id", "selector", "element"],
                            correctAnsw: 2
                          },
                          {
                            question: "What is the correct syntax for changing the background color of a webpage in CSS?",
                            options: ["background-color: red;", "color-background: red;", "bgcolor: red;", "set-background: red;"],
                            correctAnsw: 0
                          },
                          {
                            question: "Which CSS property is used to change the font size of text?",
                            options: ["text-font-size", "font-size", "size-font", "text-size"],
                            correctAnsw: 1
                          },
                          {
                            question: "How do you add a border to an element in CSS?",
                            options: ["border-style: solid;", "border: 1px solid black;", "outline: 1px solid black;", "both b) and c)"],
                            correctAnsw: 1
                          },
                          {
                            question: "Which CSS property is used to change the text color?",
                            options: ["text-color", "color", "font-color", "text-style"],
                            correctAnsw: 1
                          } ]
                        },
                        
                        {
                            category: "Geography",
                            questions: [
                              {
                                question: "What is the largest continent by land area?",
                                options: ["Asia", "Africa", "North America", "Europe"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which is the longest river in the world?",
                                options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the capital city of France?",
                                options: ["Paris", "Berlin", "Madrid", "Rome"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which country is known as the Land of the Rising Sun?",
                                options: ["South Korea", "Japan", "China", "Thailand"],
                                correctAnsw: 1
                              },
                              {
                                question: "Which desert is the largest in the world?",
                                options: ["Kalahari", "Sahara", "Gobi", "Atacama"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the smallest country in the world by land area?",
                                options: ["Monaco", "Vatican City", "Nauru", "San Marino"],
                                correctAnsw: 1
                              },
                              {
                                question: "Which ocean is the largest?",
                                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                                correctAnsw: 3
                              },
                              {
                                question: "Mount Everest is located in which country?",
                                options: ["India", "Nepal", "China", "Pakistan"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the capital city of Australia?",
                                options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which continent is known as the 'Dark Continent'?",
                                options: ["Asia", "Africa", "South America", "Australia"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the capital of Japan?",
                                options: ["Kyoto", "Osaka", "Tokyo", "Hokkaido"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which country has the most official languages?",
                                options: ["India", "South Africa", "Canada", "Switzerland"],
                                correctAnsw: 1
                              },
                              {
                                question: "The Great Barrier Reef is located off the coast of which country?",
                                options: ["New Zealand", "Australia", "Philippines", "Indonesia"],
                                correctAnsw: 1
                              },
                              {
                                question: "Which country has the largest population?",
                                options: ["India", "United States", "China", "Russia"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which is the tallest mountain in North America?",
                                options: ["Mount McKinley (Denali)", "Mount Everest", "Mount Kilimanjaro", "Mount Fuji"],
                                correctAnsw: 0
                              },
                              {
                                question: "What is the name of the river that flows through Egypt?",
                                options: ["Amazon", "Yangtze", "Nile", "Ganges"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which country is bordered by both the Mediterranean Sea and the Atlantic Ocean?",
                                options: ["Spain", "Italy", "Portugal", "France"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which is the largest country by land area?",
                                options: ["China", "Canada", "United States", "Russia"],
                                correctAnsw: 3
                              },
                              {
                                question: "Which country is famous for the Pyramids of Giza?",
                                options: ["Egypt", "Mexico", "Peru", "Italy"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which continent is home to the Amazon Rainforest?",
                                options: ["Africa", "Asia", "South America", "Australia"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which country has the longest coastline?",
                                options: ["Canada", "United States", "Russia", "Australia"],
                                correctAnsw: 0
                              }
                            ]
                          },

                          {
                            category: "Mathematics",
                            questions: [
                              {
                                question: "What is the value of pi (π)?",
                                options: ["3.14", "3.14159", "3.1416", "3.15"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the square root of 64?",
                                options: ["6", "8", "10", "16"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the result of 5 + 3 × 2?",
                                options: ["16", "11", "13", "21"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the area of a circle with a radius of 3 cm?",
                                options: ["9π cm²", "3π cm²", "6π cm²", "π cm²"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which of the following is a prime number?",
                                options: ["4", "9", "11", "15"],
                                correctAnsw: 2
                              },
                              {
                                question: "What is the derivative of x²?",
                                options: ["2x", "x", "x²", "2x²"],
                                correctAnsw: 0
                              },
                              {
                                question: "What is the sum of the angles in a triangle?",
                                options: ["90°", "180°", "270°", "360°"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the value of 2³?",
                                options: ["4", "6", "8", "16"],
                                correctAnsw: 2
                              },
                              {
                                question: "What is the solution to the equation 3x = 12?",
                                options: ["x = 2", "x = 4", "x = 6", "x = 8"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the area of a rectangle with length 4 cm and width 6 cm?",
                                options: ["10 cm²", "24 cm²", "12 cm²", "36 cm²"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the formula for the area of a triangle?",
                                options: ["base × height", "1/2 × base × height", "base + height", "2 × base × height"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the value of 7 factorial (7!)?",
                                options: ["5040", "720", "240", "120"],
                                correctAnsw: 0
                              },
                              {
                                question: "What is the perimeter of a square with side length 5 cm?",
                                options: ["10 cm", "15 cm", "20 cm", "25 cm"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which of the following is a solution to the quadratic equation x² - 5x + 6 = 0?",
                                options: ["x = 1", "x = 2", "x = 3", "x = 4"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the value of sin(90°)?",
                                options: ["0", "0.5", "1", "undefined"],
                                correctAnsw: 2
                              },
                              {
                                question: "What is the hypotenuse of a right triangle with legs 3 cm and 4 cm?",
                                options: ["5 cm", "7 cm", "6 cm", "8 cm"],
                                correctAnsw: 0
                              },
                              {
                                question: "What is the slope of the line y = 2x + 1?",
                                options: ["1", "2", "3", "4"],
                                correctAnsw: 1
                              },
                              {
                                question: "Which of the following is the correct formula for the area of a circle?",
                                options: ["πd", "πr²", "2πr", "πr"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the sum of the first 10 prime numbers?",
                                options: ["129", "100", "150", "120"],
                                correctAnsw: 3
                              },
                              {
                                question: "What is the value of log₁₀(1000)?",
                                options: ["2", "3", "10", "100"],
                                correctAnsw: 1
                              }
                            ]
                          }, 

                          {
                            category: "Entertainment",
                            questions: [
                              {
                                question: "Who is known as the King of Pop?",
                                options: ["Elvis Presley", "Michael Jackson", "Prince", "Justin Bieber"],
                                correctAnsw: 1
                              },
                              {
                                question: "Which movie won the Oscar for Best Picture in 1994?",
                                options: ["The Shawshank Redemption", "Forrest Gump", "Pulp Fiction", "The Lion King"],
                                correctAnsw: 1
                              },
                              {
                                question: "Which artist sang 'Rolling in the Deep'?",
                                options: ["Adele", "Beyoncé", "Rihanna", "Lady Gaga"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which TV show features a group of six friends living in New York City?",
                                options: ["How I Met Your Mother", "Friends", "The Office", "Big Bang Theory"],
                                correctAnsw: 1
                              },
                              {
                                question: "What is the name of the fictional wizarding school in the Harry Potter series?",
                                options: ["Hogwarts", "Durmstrang", "Beauxbatons", "Ilvermorny"],
                                correctAnsw: 0
                              },
                              {
                                question: "Who directed the movie 'Avatar'?",
                                options: ["James Cameron", "Steven Spielberg", "Christopher Nolan", "Peter Jackson"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which superhero is also known as 'The Dark Knight'?",
                                options: ["Spider-Man", "Superman", "Batman", "Iron Man"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which singer is famous for the hit song 'Shape of You'?",
                                options: ["Ed Sheeran", "Shawn Mendes", "Charlie Puth", "John Legend"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which animated movie features a clownfish named Nemo?",
                                options: ["Toy Story", "Finding Nemo", "Shrek", "Frozen"],
                                correctAnsw: 1
                              },
                              {
                                question: "Who played the role of Jack Dawson in Titanic?",
                                options: ["Tom Hanks", "Brad Pitt", "Johnny Depp", "Leonardo DiCaprio"],
                                correctAnsw: 3
                              },
                              {
                                question: "Which video game features a character named Mario?",
                                options: ["Sonic the Hedgehog", "Super Mario", "Zelda", "Minecraft"],
                                correctAnsw: 1
                              },
                              {
                                question: "Which TV series features a zombie apocalypse?",
                                options: ["The Walking Dead", "Breaking Bad", "Stranger Things", "Game of Thrones"],
                                correctAnsw: 0
                              },
                              {
                                question: "Who won the first season of 'American Idol'?",
                                options: ["Kelly Clarkson", "Carrie Underwood", "Jennifer Hudson", "Fantasia Barrino"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which actress played Hermione Granger in the Harry Potter films?",
                                options: ["Emma Watson", "Natalie Portman", "Scarlett Johansson", "Megan Fox"],
                                correctAnsw: 0
                              },
                              {
                                question: "Which famous musician is known for the album 'The Dark Side of the Moon'?",
                                options: ["Led Zeppelin", "The Beatles", "Pink Floyd", "Queen"],
                                correctAnsw: 2
                              },
                              {
                                question: "What year was the first 'Star Wars' movie released?",
                                options: ["1975", "1980", "1977", "1983"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which animated movie features a snowman named Olaf?",
                                options: ["Frozen", "Tangled", "Moana", "Coco"],
                                correctAnsw: 0
                              },
                              {
                                question: "What is the highest-grossing movie of all time?",
                                options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
                                correctAnsw: 2
                              },
                              {
                                question: "Which popular singer is known for the hit song 'Bad Guy'?",
                                options: ["Billie Eilish", "Ariana Grande", "Taylor Swift", "Katy Perry"],
                                correctAnsw: 0
                              },
                              {
                                question: "Who is the creator of the 'Game of Thrones' TV series?",
                                options: ["George R. R. Martin", "J.R.R. Tolkien", "Stephen King", "J.K. Rowling"],
                                correctAnsw: 0
                              }
                            ]
                          }
                        ]
                          
                          
                      
                          

                          
                        

                          