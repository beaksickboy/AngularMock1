package Main;

import java.util.Scanner;

import DAO.UsersDAO;
import Entity.Users;
import Service.UsersService;



public class Main {	
	public static Scanner scanner = new Scanner(System.in);
	private static void showMenu() {
		System.out.println("''''''''''''''''''''''''''''''");
		System.out.println("Hello! What do you want to do??");
		System.out.println("1.Register");
		System.out.println("2.Log in");
		System.out.println("0.Exit");
		System.out.println("''''''''''''''''''''''''''''''");		
	}
	
	private static void showMenu_Cus() {
		System.out.println("''''''''''''''''''''''''''''''");
		System.out.println("Hello! What do you want to do??");
		System.out.println("1.Book Room");
		System.out.println("0.Exit");
		System.out.println("''''''''''''''''''''''''''''''");
	}
	
	private static void showMenu_Clerk() {
		System.out.println("''''''''''''''''''''''''''''''");
		System.out.println("Hello! What do you want to do??");
		System.out.println("1.View all of rooms");
		System.out.println("2. Search/Filter room");
		System.out.println("3.Update status of room");
		System.out.println("0.Exit");
		System.out.println("''''''''''''''''''''''''''''''");
	}
	
	private static void showMenu_Admin() {
		System.out.println("''''''''''''''''''''''''''''''");
		System.out.println("Hello! What do you want to do??");
		System.out.println("1.Creates new user");
		System.out.println("2.Set Role");
		System.out.println("3.View all of users");
		System.out.println("4.Search & Filter");
		System.out.println("5.Update user information");
		System.out.println("0.Exit");
		System.out.println("''''''''''''''''''''''''''''''");	
	}
	
	
	public static void main(String[] args) {
		String choose = null;
		boolean exit = false;
		String f_name=null;
		String l_name=null;
		String account=null;
		String pass=null;
		Users u = new Users();
		UsersDAO ud = new UsersDAO();
		UsersService us = new UsersService();
		showMenu();
		while(true) {
		choose= scanner.nextLine(); 
		switch(choose) {
		case "1":
				System.out.println("First Name:");
				f_name = scanner.nextLine();
				u.setF_name(f_name);
				System.out.println("Last Name:");
				l_name = scanner.nextLine();
				u.setL_name(l_name);
				System.out.println("Account:");
				account = scanner.nextLine();
				u.setAccount(account);
				System.out.println("Password:");
				pass = scanner.nextLine();
				u.setPass(pass);
				u.setId_role(1);
				ud.register(u);
				System.out.println("Success!!");
				showMenu();
				break;
		case "2":
				System.out.println("Account:");
				account = scanner.nextLine();
				u.setAccount(account);
				System.out.println("Password:");
				pass = scanner.nextLine();
				u.setPass(pass);
				if(us.login(u))
				{
				if(u.getId_role()==1) {
					showMenu_Cus();
					while(true) {
					choose= scanner.nextLine(); 
					switch(choose) {
						case "1":
								break;
						case "0":
							System.out.println("Exited!");
							exit = true;
							break;
					default: System.out.println("You input wrong!!");
							break;	
					}
					if(exit) {
						break;
					}
					}
				} else  if(u.getId_role()==2){
						showMenu_Clerk();
						} else {
							showMenu_Admin();	
							while(true) {
								choose= scanner.nextLine(); 
								switch(choose) {
									case "1":
										System.out.println("First Name:");
										f_name = scanner.nextLine();
										u.setF_name(f_name);
										System.out.println("Last Name:");
										l_name = scanner.nextLine();
										u.setL_name(l_name);
										System.out.println("Account:");
										account = scanner.nextLine();
										u.setAccount(account);
										System.out.println("Password:");
										pass = scanner.nextLine();
										u.setPass(pass);
										System.out.println("Role:");
										int role= scanner.nextInt();
										u.setId_role(role);
										ud.register(u);
										System.out.println("Success!!");
										showMenu();
											break;
									case "2":
											System.out.println("Choose Account:");
											account= scanner.nextLine();
											Users u1 = new Users();
											u1.setAccount(account);
											ud.getUser(u1);
											System.out.println("This role is " + Integer.toString(u1.getId_role()));
											System.out.println("Input new role:");
											role = scanner.nextInt();
											u1.setId_role(role);
											System.out.println("Finished!");
											ud.update(u1);
											showMenu_Admin();
											break;
									case "3":
											
											break;
									case "4":
										
										break;
									case "5":
											System.out.println("Choose Account:");
											account= scanner.nextLine();
											Users u2 = new Users();
											ud.getUser(u2);
											System.out.println("Which do you wanna edit??");
											us.showU(u2);
											while(true) {
												choose=scanner.nextLine();
												switch (choose) {
												case "1":
													System.out.println("InpuT Account:");
													break;
												case "2":
													
													break;
												case "3":
													
													break;
												case "4":
	
													break;
												case "5":
	
													break;
												default:
													break;
												}
											}
										
										break;
									case "0":
										System.out.println("Exited!");
										exit = true;
										break;
								default: System.out.println("You input wrong!!");
										break;	
								}
								if(exit) {
									break;
								}
								}
						}
				}else {
					showMenu();
				}
				
				break;
		case "0":
				System.out.println("Exited!");
				exit = true;
				break;
		default: System.out.println("You input wrong!!");
				break;	
		}
		if(exit) {
			break;
		}
	}
	}
	

}
