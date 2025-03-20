package Utility;

import BaseClass.DriverImpl;
import org.openqa.selenium.By;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.IOException;
import java.time.Duration;

public class Action extends DriverImpl {

    public Action(int flag){
        super(flag);
    }

    public static void waitBy(By element) throws InterruptedException, IOException{
        WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(30));
        wait.until(ExpectedConditions.visibilityOfElementLocated(element));
        Thread.sleep(500);
    }

    public static void sendKeys(By element, int index, String key) throws InterruptedException, IOException{
        driver.findElements(element).get(index).sendKeys(key);
        Thread.sleep(500);
    }

}