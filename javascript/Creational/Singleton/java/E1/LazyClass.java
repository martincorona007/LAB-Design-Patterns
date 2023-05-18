public class LazyClass{
  private static LazyClass instance;
  private LazyClass(){

  }
  public static synchronized LazyClass getInstance(){
    if(instance == null){
    instance = new LazyClass();
    }
    return instance;
  }
  public void sampleMethod(){
  System.out.println("CALIS");
  }
  public static void main(String[]args){
    LazyClass temp = LazyClass.getInstance();
    temp.sampleMethod();
    LazyClass temps = LazyClass.getInstance();
    temps.sampleMethod();
  }  
}
