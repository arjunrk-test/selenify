package Utility;

import java.io.File;
import java.net.InetAddress;
import java.net.UnknownHostException;

public class GlobalVariables {
    public static String userName = System.getProperty("user.name");
    public static String projectDir = System.getProperty("user.dir");
    public static String chromeDriverPathWin = projectDir + "\\Drivers\\chromedriver.exe";
    public static String edgeDriverPathWin = projectDir + "\\Drivers\\msedgedriver.exe";
    public static String chromeDriverPathMac = projectDir + "//Drivers//chromedriver";
    public static String edgeDriverPathMac = projectDir + "//Drivers//msedgedriver";
    public static String url = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";
    public static String loginUserName = "Admin";
    public static String loginUserPassword = "admin123";
    public static String reportPath = projectDir + File.separator + "Reports";
    public static String osInfo = System.getProperty("os.name");

    public static String hostName;
    static {
        try {
            hostName = InetAddress.getLocalHost().getHostName();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
    }
}