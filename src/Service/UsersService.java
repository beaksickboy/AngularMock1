package Service;

import DAO.UsersDAO;
import Entity.Users;

public class UsersService {
		UsersDAO ud = new UsersDAO();
		Users u = new Users();
		public  boolean login(Users u) {
			boolean check = false;
			String account= u.getAccount(); 
			String pass = u.getPass();
			if(ud.login(account,pass)) {
				ud.getUser(u);
				check=true;
			System.out.println("Login Success!");
			}else {
			System.out.println("Login Fails!");
			
		    }
			return check;
		}
		
		
		
		

		
		
}
