
public class circle {
    private double  radius;
    private String colur;

    public circle(){
        radius = 1.0;
        colur = "red";
    }
    public circle(double r){
        radius = r;
        colur = "red";
    }
    public circle(double r, String C){
        radius = r;
        colur = C;
    }
    public double getradius(){
        return  radius;
    }
    public String getcolur(){
        return colur;
    }
    public double getarea(){
        return radius*radius*Math.PI;
    }
}
