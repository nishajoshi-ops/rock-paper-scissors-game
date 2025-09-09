let score = JSON.parse(localStorage.getItem('score')) ||  {                     //json.parse convert  string into object to get score directly from localstrorage instead reset 0 from everytime.         
       
        wins : 0,
        losses: 0,
        ties : 0


    };                                         
  updatescoreElement();     //display score intially
  /*
  
  if(!score ){                              // for reset the 'score' doesnt exist for removeitem so we declare the 'score' if it null
    score = {
       
        win : 0,
        losses: 0,
        ties : 0


    };
  }
    */           
  function playerGame (playerMove){    //create new parameter

        pickComputerMove();  //calling funcution reused code //

          let result = '';
        if (playerMove === 'scissors'){         //use  another if else for pramerter.change code according to parameter 
            if (computerMove === 'rock') {
              result = 'You lose.';
            } else if (computerMove === 'paper') {    // we are calculate the result in this function.
              result = 'You win.';
            } else if (computerMove === 'scissors') {
              result = 'tie.';
            }

        } else if (playerMove === 'paper'){ 
            if (computerMove === 'rock') {
                result = 'You win.';
              } else if (computerMove === 'paper') {
                result = 'tie.';
              } else if (computerMove === 'scissors') {
                result = 'You lose.';
              } 

        } else if (playerMove ==='rock'){
            if (computerMove === 'rock') {
                result = 'tie.';
              } else if (computerMove === 'paper') {
                result = 'You lose.';
              } else if (computerMove === 'scissors') {
                result = 'You win.';
              }
          }

        if (result=== 'You win.') {                             // after calculate the result add code to update the score

              score.wins += 1; 
                                        //score.win+=1
            } else if (result === 'You lose.') {

              score.losses += 1;

            } else if (result === 'tie.')  {

              score.ties += 1;
            }

         // localStorage.setItem('score',score)  score is object & localStorage only support the string so convert object into string

         localStorage.setItem('score',JSON.stringify(score));   //json.stringify convert object to string.

        updatescoreElement();       //call function to update score on webpage

        document.querySelector('.js-result')        

         document.querySelector('.js-moves')        
        .innerHTML = `You
      <img src="images/${playerMove}-emoji.png" class="move-icon">
      <img src="images/${computerMove}-emoji.png"class="move-icon">
      computer`

       /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result} ;
        wins: ${score.wins} , losses: ${score.losses} , ties: ${score.ties}`)*/
      
        }


        function updatescoreElement(){
        document.querySelector('.js-score')     //create function for clear code//
        .innerHTML = ` wins: ${score.wins} , losses: ${score.losses} , ties: ${score.ties}`;    
        }


      let computerMove = '';
       //Global variable//   
        function pickComputerMove() {                     //using function
         const randomNumber = Math.random(); 

          if (randomNumber >= 0 && randomNumber < 1 / 3) {

            computerMove = 'rock';

          } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {

            computerMove = 'paper';

          } else if (randomNumber >= 2 / 3 && randomNumber < 1) {

            computerMove = 'scissors';
          }

         
/* function resetScore() {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      alert("Score reset! Back to square one 🧼\nWins: 0, Losses: 0, Ties: 0");

      }

      we can used function for reset button
      */
      }