package Pages;
import BaseClass.DataProvider;
import PagesTest.LoginPageTest;
import Utility.LoginUtil;
import org.testng.Assert;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.Test;

import java.io.IOException;
import java.io.PrintStream;

public class LoginPage {
    @Test(enabled = true, dataProvider = "edge", dataProviderClass = DataProvider.class)
    public void checkLogin(String browser) throws InterruptedException, IOException{
        try{
            PrintStream console = System.out;
            LoginUtil.login(browser);
            LoginPageTest.loginTest();
            System.out.println(console);
        }
        catch(Exception | AssertionError e){
            System.out.println(e);
            Assert.assertEquals(1, 2);
        }
    }

    @AfterMethod
    public void closeBrowser(){
        System.out.println("Closing the browser");
        LoginUtil.close();
    }
}