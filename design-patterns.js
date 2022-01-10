// The ultimate goal when we write code should be make it maintainable , readbable and reusable , no matter which programming language is used   
// Design patterns are reusable templates for commonly occurring problems in software design . 
// solutions for repeated problems 

// Creational - how to create objects 
// Structural -  relationships between objects
// Behavior - communication/interaction between objects 

// OOPs concepts (Explanation using Java)
// Encapsulation  - having the variables and methods in a unit called Class and allowing only the Class to update variables using methods . 
// The class can entirely control how the state must be altered 
// Abstraction - hide certain details and show only what is important in the object . 100 % abstraction can be achieved using interfaces . 
// We can include only those which are to be exposed to the caller . The class implementing this interface can have more methods which are not directly exposed to the caller
// Another simple way to achieve abstraction is by making methods private . Ex If there is ConnectServer class ,  we can make initiate() , authenticate() methods
// private and only expose one method called connect by making it public 
// We can change the implementation details without affecting parts 
// Inheritenc  - mechanism to reuse code 
// Polymorphism - an object that can take on different forms 

// Ex consider we are building a UI with input fields like text box , check box , button 
// All these fields have some common properties like focus, onclick and events
// We can create a common class called UIControls with these common methods - focus,onclick 
// And create one class for text box , check box and button . These classes can extend the common class UIcontrols

public class UIControls {
  public void onClick(){
   .... 
  }
  
  public void onFocus(){
   .... 
  }
}


public class InputText extends UIControls {
   public void someCustomMethod() {
    .....  
   } 
}

// If you create an object of type InputText the object will have access to onClick and onFocus methods coming from UIControls. This is called inheritence. 
// If the default implementation is not needed it is also possible to override these methods and give our own implementation

public class MainApp{
  public static void main(String args[]) {
      onClickControls(new InputText()); // This works perfectly fine since UIControls is the parent class of this type  
  }

  public static void onClickControls(UIControls uiControls){ // At runtime this object can take on many different forms - this is the concept of polymorphism 
    uiControls.onClick();
  }
}


// UML - Unified Markup Language Diagram 

public class Shape {  
 private int positionX;

 public void render() {
  ... 
 }
}
  
      Shape
  -    positionX : int 
  +    render() 
