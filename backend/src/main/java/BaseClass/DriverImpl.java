package BaseClass;
import Utility.GlobalVariables;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;

import java.util.Locale;

public class DriverImpl {
    public static WebDriver driver;
    private String driverPath;

    @SuppressWarnings("deprecation")
    public DriverImpl(int flag) {
        driverPath = getDriverPath(GlobalVariables.osInfo.toLowerCase(Locale.ROOT), flag);
        if (flag == 1) {
            System.setProperty("webdriver.chrome.driver", driverPath);
            driver = new ChromeDriver();
        } else {
            System.setProperty("webdriver.edge.driver", driverPath);
            driver = new EdgeDriver();
        }
        driver.manage().deleteAllCookies();
        driver.manage().window().maximize();
    }

    private String getDriverPath(String osInfo, int flag) {
        if (flag == 1) {
            return osInfo.contains("windows") ? GlobalVariables.chromeDriverPathWin : GlobalVariables.chromeDriverPathMac;
        } else {
            return osInfo.contains("windows") ? GlobalVariables.edgeDriverPathWin : GlobalVariables.edgeDriverPathMac;
        }
    }
}
