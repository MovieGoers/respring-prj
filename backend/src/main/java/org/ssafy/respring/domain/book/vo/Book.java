package org.ssafy.respring.domain.book.vo;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;
import org.ssafy.respring.domain.image.vo.Image;
import org.ssafy.respring.domain.user.vo.User;

import java.time.LocalDateTime;
import java.util.*;

@Document(collection = "book")
@Getter @Setter
public class Book {
    @Id
    private String id; // MongoDB는 기본적으로 ObjectId 사용
    private UUID userId;
    private String title;
    private String content;
    private String coverImg;
    private List<String> tag;
    private Long likes;
    private Long view;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<Long> storyIds; // MySQL에서 관리되는 Story ID 리스트
    private Set<UUID> likedUsers = new HashSet<>();

    // 좋아요 추가/취소 로직
    public boolean toggleLike(UUID userId) {
        boolean isLiked;

        if (likedUsers.remove(userId)) {
            isLiked = false; // 좋아요 취소됨
        } else {
            likedUsers.add(userId);
            isLiked = true; // 좋아요 추가됨
        }

        likes = (long) likedUsers.size(); // likes 값을 likedUsers 크기와 동기화
        return isLiked;
    }

    public void increaseView() {
        this.view = (this.view == null) ? 1 : this.view + 1;
    }
}
