package org.ssafy.respring.domain.post.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.ssafy.respring.domain.post.vo.Post;
import org.ssafy.respring.domain.user.vo.User;

import java.util.List;
import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, Long>, PostRepositoryQuerydsl {
    List<Post> findByUser_Id(UUID userId);
    List<Post> findByUserIn(List<User> users);
}
