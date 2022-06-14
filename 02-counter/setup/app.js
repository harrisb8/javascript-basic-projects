//set starting point equal to 0
let count = 0;

//select value and all buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

//set up a function that goes through the buttons
btns.forEach(function (btn) {
    //add event listener when a button is clicked
    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        //set up decrease, reset, increase
        if(styles.contains('decrease')){
            //-- means minus 1
            count--;
        }
        //here is a second conditional statement
        else if(styles.contains('increase')){
            //count will increase by 1
            count++;
        }
        //If the count does not increase or decrease then the count should reset to 0
        else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "green";
        }
        else if(count < 0) {
            value.style.color = "red";
        }

        //takes the value from html and changes it 
        value.textContent = count;
    })
});