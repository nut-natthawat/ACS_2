public class cylinder extends circle {
    private double height;

    public cylinder(){
        super();
        height = 1.0;
    }
    public cylinder(double radius,double height){
        super(radius);
        this.height = height;
    }

    public double getheight(){
        return height;
    }
    public void setheight(double height){
        this.height = height;
    }
    public double getvolumn(){
        return getarea()*height;
    }
}
