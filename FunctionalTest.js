/*
1. A shopping cart checkout feature that allows a user to check out as a guest (without an account),
    or as a logged-in user. They should be allowed to do either, but should be asked if they want
    to create an account or log in if they check out as a guest.
*/


//When the user clicks "CART" 
    //prompt the user to login or continue as a guest if they have not login yet
        //When the user clicks "LOG IN" allow user to log in and then take them to their cart
        //If the user clicks "GUEST" prompt the user if they like to create an account or login or coninue as a guest
            //If the user clicks "CONTINUE AS GUEST" take them directly to their cart
//Once the user is succesfully in thier cart
    //If the cart is empty after the user logged in or continued as guest
        //then display "There are no items in your cart"
        //prompt the user to add items to their cart
    //If cart is not empty display items in cart along with order total
        //Allow the user to change the quantity of each item 
        //automatically set item quauntiy to 1 if the quantity was not change by user
    //Then if the user clicks "CHECKOUT" as a guest
        //prompt the user to enter payment method or gift card information
            //Display message if an incorrect payment method was added
            //Display message if an invalid gift card was added
        //prompt the user to enter shipping address
            //Display message if an incorrect shipping address was added
    //If the user clicks "CHECKOUT" and is logged in
        //Display thier shipping address and payment method 
            //allow user to change thier shipping address
            //alow user to change their payment method 
            //alow user to add a gift card information if applicable 
    //Allow user to click "PLACE ORDER" if payment method and shipping address is filled out correcty and cart is not empty
            //When user clicks "PLACE ORDER" display order details and estimated dilivery date
                //Allow user to be able to cancel order 
                    //If user clicks "CANCEL ORDER" display the message that their order is succesfully cancelled
