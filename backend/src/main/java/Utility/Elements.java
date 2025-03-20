package Utility;

import BaseClass.DriverImpl;
import org.openqa.selenium.By;

public class Elements extends DriverImpl {

    public Elements(int flag){
        super(flag);
    }

    public static By username = By.cssSelector("input[name = 'username']");
    public static By password = By.cssSelector("input[name = 'password']");
    public static By submit = By.cssSelector("button[type = 'submit']");
    public static By header = By.cssSelector("div.oxd-topbar-header-title");

}