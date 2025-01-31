package org.ssafy.respring.domain.challenge.vo;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.Set;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Challenge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String image;
    private LocalDate startDate;
    private LocalDate endDate;

    @ElementCollection(fetch = FetchType.LAZY)
    private Set<String> tags;

    private Long likes;
    private int views;
    private int participantCount;

    private UUID ownerId;
}
