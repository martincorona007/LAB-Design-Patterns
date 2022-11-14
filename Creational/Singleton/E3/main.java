class SingletonObj{
  private static SingletonObj instance = new SingletonObj();
  private SingletonObj(){

  }
  public static SingletonObj getInstance(){
    return instance;
  }
  public void printMessage(){
    System.out.println("Hello from singlenton object!!!");
  }
}
public class main{
  public static void main(String[] args){
    SingletonObj object = SingletonObj.getInstance();
    object.printMessage();
    SingletonObj object1 = SingletonObj.getInstance();
    object1.printMessage();
  }
}