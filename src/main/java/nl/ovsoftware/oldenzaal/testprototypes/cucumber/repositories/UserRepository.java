package nl.ovsoftware.oldenzaal.testprototypes.cucumber.repositories;

import nl.ovsoftware.oldenzaal.testprototypes.cucumber.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);

}
