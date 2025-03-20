package Listener;
import Utility.GlobalVariables;
import com.aventstack.extentreports.ExtentReports;
import com.aventstack.extentreports.ExtentTest;
import com.aventstack.extentreports.Status;
import com.aventstack.extentreports.reporter.ExtentSparkReporter;
import com.aventstack.extentreports.reporter.configuration.Theme;
import org.testng.ITestContext;
import org.testng.ITestListener;
import org.testng.ITestResult;

import java.io.File;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ExtentReportListener implements ITestListener {

    public ExtentSparkReporter sparkReporter;
    public ExtentReports extent;
    public ExtentTest test;

    public void onStart(ITestContext context) {
        String date = new SimpleDateFormat("MM_dd_yyyy").format(new Date());
        sparkReporter = new ExtentSparkReporter(GlobalVariables.reportPath + File.separator + "Report_" + date + ".html");
        sparkReporter.config().setDocumentTitle("Automation Test Report");
        sparkReporter.config().setReportName("Functional Testing");
        sparkReporter.config().setTheme(Theme.DARK);

        extent = new ExtentReports();
        extent.attachReporter(sparkReporter);

        extent.setSystemInfo("Computer", GlobalVariables.hostName);
        extent.setSystemInfo("Environment", "QA");
        extent.setSystemInfo("Tester Name", GlobalVariables.userName);
        extent.setSystemInfo("OS", GlobalVariables.osInfo);
    }

    public void onTestStart(ITestResult result) {
    }

    public void onTestSuccess(ITestResult result) {
        test = extent.createTest(result.getName());
        test.log(Status.PASS, "Test case PASSED: " + result.getName());
    }

    public void onTestFailure(ITestResult result) {
        test = extent.createTest(result.getName());
        test.log(Status.FAIL, "Test case FAILED: " + result.getName());
        test.log(Status.FAIL, "Test case FAILED CAUSE: " + result.getThrowable());
    }

    public void onTestSkipped(ITestResult result) {
        test = extent.createTest(result.getName());
        test.log(Status.SKIP, "Test case SKIPPED: " + result.getName());
    }

    public void onFinish(ITestContext context) {
        extent.flush();
    }

}