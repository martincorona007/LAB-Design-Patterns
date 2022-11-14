public class BackingFacade{
    AccountDebitor debitor = new AccountDebitor();
    AccountCreditor creditor = new AccountCreditor();
    FDIssuer fdIssuer = new FDIssuer();
    public void onlineTransfer(String fromAcc,String toAcc,Double amount){
        debitor.debitAccount(fromAcc,amount);
        creditor.creditAccount(toAcc,amount);
    }
    public  void atmWithdrawal(String fromAcc,Double amount){
        debitor.debitAccount(fromAcc,amount);
    }
    public void issueFD(String fromAcc,Double amount){
        debitor.debitAccount(fromAcc,amount);
        fdIssuer.issueFD(amount);
    }
}