package BaseClass;

public class DataProvider {
    @org.testng.annotations.DataProvider(name = "both")
    public static Object[][] dataProvBoth(){
        return new Object[][]{
                {"Chrome"},
                {"Edge"}
        };
    }

    @org.testng.annotations.DataProvider(name = "chrome")
    public static Object[][] dataProvChrome(){
        return new Object[][]{
                {"Chrome"}
        };
    }

    @org.testng.annotations.DataProvider(name = "edge")
    public static Object[][] dataProvEdge(){
        return new Object[][]{
                {"Edge"}
        };
    }
}