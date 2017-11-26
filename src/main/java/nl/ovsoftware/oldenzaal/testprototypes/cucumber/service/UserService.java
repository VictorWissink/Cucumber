package nl.ovsoftware.oldenzaal.testprototypes.cucumber.service;


import nl.ovsoftware.oldenzaal.testprototypes.cucumber.model.User;

import java.util.List;

public interface UserService {
	
	User findById(Long id);

	User findByName(String name);

	void saveUser(User user);

	void updateUser(User user);

	void deleteUserById(Long id);

	void deleteAllUsers();

	List<User> findAllUsers();

	boolean isUserExist(User user);
}