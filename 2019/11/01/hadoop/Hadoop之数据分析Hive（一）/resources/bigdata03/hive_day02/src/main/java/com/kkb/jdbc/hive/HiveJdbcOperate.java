package com.kkb.jdbc.hive;

import java.sql.*;

public class HiveJdbcOperate {

    private static String url="jdbc:hive2://192.168.52.120:10000/myhive";
    public static void main(String[] args) throws Exception {
        //通过反射，加载驱动类
        Class.forName("org.apache.hive.jdbc.HiveDriver");
        //获取数据库连接
        Connection connection = DriverManager.getConnection(url, "hadoop","");
        //定义查询的sql语句
        String sql="select * from stu";
        try {
            PreparedStatement ps = connection.prepareStatement(sql);
            ResultSet rs = ps.executeQuery();
            while (rs.next()){
                //获取id字段值
                int id = rs.getInt(1);
                //获取deptid字段
                String name = rs.getString(2);
                System.out.println(id+"\t"+name);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

}
