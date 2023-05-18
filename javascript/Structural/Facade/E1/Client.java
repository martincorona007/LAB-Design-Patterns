public class Client {
    private  BackingFacade facade;
    public Client(BackingFacade facade){
        this.facade=facade;
    }
    public static void main(String args[]){

        BackingFacade facade = new BackingFacade();
        facade.onlineTransfer("1001","1002",10000.0);
        facade.atmWithdrawal("1001",1000.0);
        facade.issueFD("1002",500.0);

    }
}
