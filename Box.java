import javax.swing.*;
import java.awt.*;

public class Box {
    public static void main(String[] args) {
        // إنشاء نافذة
        JFrame frame = new JFrame("تخطيط BoxLayout");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(200, 300);

        JPanel pan = new JPanel();
        pan.setLayout(new BoxLayout(pan, BoxLayout.Y_AXIS)); // عمودي

        pan.add(new JButton("شمال"));
        pan.add(new JButton("غرب"));
        pan.add(new JButton("جنوب"));
        pan.add(new JButton("وسط"));
        pan.add(new JButton("شرق"));

        // إضافة اللوحة إلى النافذة
        frame.add(pan);

        // عرض النافذة
        frame.setVisible(true);
    }
}