package PagesTest;

import BaseClass.DriverImpl;

public class LoginPageTest extends DriverImpl {

    public LoginPageTest(int flag){
        super(flag);
    }

    public static void loginTest(){
        System.out.println("Logged in");
    }
}