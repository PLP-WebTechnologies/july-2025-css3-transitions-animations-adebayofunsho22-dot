// =================================================================
// 1. Event Listener to Trigger Functions
// The DOMContentLoaded event ensures that the script runs only after the HTML is fully loaded.
// =================================================================
document.addEventListener('DOMContentLoaded', () => {
    const triggerBtn = document.getElementById('trigger-btn');
        const transitionBox = document.getElementById('transition-box');
            
                // Add a click event listener to the button
                    triggerBtn.addEventListener('click', () => {
                            // We'll call a series of functions to demonstrate the concepts
                                    console.log("Button clicked! Demonstrating JavaScript concepts...");
                                            
                                                    // Example of a function call with parameters and a return value
                                                            const greeting = createGreeting("Alice");
                                                                    console.log(greeting);

                                                                            // Example of a function call to toggle an animation class
                                                                                    toggleAnimationClass(transitionBox);
                                                                                        });

                                                                                        // =================================================================
                                                                                        // 2. Function Scope & Parameters
                                                                                        // This function demonstrates how variables are scoped to the function and how parameters work.
                                                                                        // =================================================================
                                                                                            function createGreeting(name) {
                                                                                                    // 'message' is scoped to this function. It cannot be accessed outside.
                                                                                                            const message = "Hello, " + name + "! Welcome to the site.";

                                                                                                                    // 'name' is a parameter that receives the value passed during the function call.
                                                                                                                            console.log(`Inside createGreeting function, 'name' is: ${name}`);

                                                                                                                                    // The return statement sends the final value back to the caller.
                                                                                                                                            return message;
                                                                                                                                                }
                                                                                                                                                    
                                                                                                                                                        // The following line would cause an error because 'message' is not in the global scope.
                                                                                                                                                            // console.log(message); 
                                                                                                                                                            });


                                                                                                                                                            // =================================================================
                                                                                                                                                            // 3. Animation Triggers with JavaScript
                                                                                                                                                            // This function dynamically adds or removes a CSS class to trigger a transition.
                                                                                                                                                            // =================================================================
                                                                                                                                                            // This function is declared in the global scope, so it is accessible from anywhere.
                                                                                                                                                            function toggleAnimationClass(element) {
                                                                                                                                                                // We check if the element has the class and add it if it doesn't, or remove it if it does.
                                                                                                                                                                    // This provides a simple way to toggle between two states.
                                                                                                                                                                        if (element.classList.contains('active-state')) {
                                                                                                                                                                                element.classList.remove('active-state');
                                                                                                                                                                                    } else {
                                                                                                                                                                                            element.classList.add('active-state');
                                                                                                                                                                                                }
                                                                                                                                                                                                }