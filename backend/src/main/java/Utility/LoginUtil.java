package Utility;

import BaseClass.DriverImpl;
import org.openqa.selenium.By;

public class LoginUtil extends DriverImpl {

    public LoginUtil(int flag){
        super(flag);
    }

    public static void Driver(String browser) throws Exception{
        if(browser.equalsIgnoreCase("Chrome")){
            DriverImpl d = new DriverImpl(1);
        }
        else if(browser.equalsIgnoreCase("Edge")){
            DriverImpl d = new DriverImpl(2);
        }
        else{
            System.out.println("Browser is not correct");
            throw new Exception("Browser is not correct");
        }
    }

    public static void openURL(String browser) throws Exception{
        LoginUtil.Driver(browser);
        driver.get(GlobalVariables.url);
        Action.waitBy(Elements.username);
    }

    public static void login(String browser) throws Exception{
        LoginUtil.Driver(browser);
        driver.get(GlobalVariables.url);
        Action.waitBy(Elements.username);
        Action.sendKeys(Elements.username, 0, GlobalVariables.loginUserName);
        Action.sendKeys(Elements.password, 0, GlobalVariables.loginUserPassword);
        driver.findElements(Elements.submit).get(0).click();
        Action.waitBy(Elements.header);
        Thread.sleep(3000);
    }

    public static void close(){
        driver.quit();
    }
}