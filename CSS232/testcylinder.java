public class testcylinder {
    public static void main(String[] args) {
        cylinder cy1 = new cylinder();
        System.out.println("Radius is "+ cy1.getradius()
        + "Height is " + cy1.getheight()
        + "colur is " + cy1.getcolur()
        + "Base area is " + cy1.getarea()
        + "Volumn is " + cy1.getvolumn());
        cylinder cy2 = new cylinder(5.0,2.0);
        System.out.println("Radius is "+ cy2.getradius()
        + "Height is " + cy2.getheight()
        + "colur is " + cy2.getcolur()
        + "Base area is " + cy2.getarea()
        + "Volumn is " + cy2.getvolumn());
    }
}
