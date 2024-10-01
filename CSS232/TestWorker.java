public class TestWorker {
    public static void main(String[] args) {
        fulltimeworker em1 = new fulltimeworker("null", 100.0,260);
        System.out.println("Name = " + em1.getname() + " Salary_rate = " + em1.getsalary() + " Hours_worked = " + em1.gethours() + " Get paid = " + em1.computePav());
        hourlyworker em2 = new hourlyworker("null", 50.0, 70);
        System.out.println("Name = " + em2.getname() + " Salary_rate = " + em2.getsalary() + " Hours_worked = " + em2.gethours() + " Get paid = " + em2.computePav());
    }
}
