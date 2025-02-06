package org.ssafy.respring.domain.book.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.ssafy.respring.domain.book.dto.request.BookRequestDto;
import org.ssafy.respring.domain.book.dto.request.BookUpdateRequestDto;
import org.ssafy.respring.domain.book.dto.response.BookResponseDto;
import org.ssafy.respring.domain.book.service.BookSearchService;
import org.ssafy.respring.domain.book.service.BookService;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/books")
@RequiredArgsConstructor
@Tag(name = "Books API", description = "봄날의 서(자서전) 관련 API")
public class BookController {
	private final BookService bookService;
	private final BookSearchService bookSearchService;

	@PostMapping(consumes = {"multipart/form-data"})
	@Operation(summary = "봄날의 서(자서전) 생성", description = "새로운 봄날의 서를 생성합니다.")
	public ResponseEntity<String> createBook(@RequestPart("requestDto") BookRequestDto requestDto,
										     @RequestPart(value = "표지 이미지", required = false) MultipartFile coverImg) {
		return ResponseEntity.ok(bookService.createBook(requestDto, coverImg));
	}

	@PutMapping(path = "/{book_id}", consumes = {"multipart/form-data"})
	@Operation(summary = "봄날의 서(자서전) 수정", description = "특정 봄날의 서를 수정합니다.")
	public ResponseEntity<Void> updateBook(@Parameter(description = "봄날의 서 ID") @PathVariable String book_id,
										   @RequestPart("requestDto") BookUpdateRequestDto requestDto,
										   @RequestPart(value = "표지 이미지", required = false) MultipartFile coverImg,
										   @RequestHeader("X-User-Id") UUID userId) {
		bookService.updateBook(userId, book_id, requestDto, coverImg);
		return ResponseEntity.ok().build();
	}

	@DeleteMapping("/{book_id}")
	@Operation(summary = "봄날의 서(자서전) 삭제", description = "특정 봄날의 서를 삭제합니다.")
	public ResponseEntity<Void> deleteBook(@Parameter(description = "봄날의 서 ID") @PathVariable String book_id,
										   @RequestHeader("X-User-Id") UUID userId) {
		bookService.deleteBook(book_id, userId);
		return ResponseEntity.noContent().build();
	}

	@GetMapping("/all")
	@Operation(summary = "모든 봄날의 서(자서전) 조회", description = "모든 봄날의 서를 조회합니다.")
	public ResponseEntity<List<BookResponseDto>> getAllBooks(
	  @RequestHeader("X-User-Id") UUID userId
	) {
		return ResponseEntity.ok(bookService.getAllBooksSortedByTrends());
	}

	@GetMapping("/my")
	@Operation(summary = "나의 모든 봄날의 서(자서전) 조회", description = "나의 모든 봄날의 서를 조회합니다.")
	public ResponseEntity<List<BookResponseDto>> getMyBooks(@RequestHeader("X-User-Id") UUID userId) {
		return ResponseEntity.ok(bookService.getBooksByUser(userId));
	}

	@GetMapping("/user/{user_id}")
	@Operation(summary = "특정 유저가 작성한 모든 봄날의 서(자서전) 조회", description = "특정 유저가 작성한 모든 봄날의 서를 조회합니다.")
	public ResponseEntity<List<BookResponseDto>> getBooksByUser(@Parameter(description = "유저 ID") @PathVariable UUID user_id) {
		return ResponseEntity.ok(bookService.getBooksByUser(user_id));
	}

	@GetMapping("/{book_id}")
	@Operation(summary = "봄날의 서(자서전) 세부 조회", description = "특정 봄날의 서 내용을 조회합니다.")
	public ResponseEntity<BookResponseDto> getBookDetail(
			@Parameter(description = "봄날의 서 ID") @PathVariable String book_id,
			@RequestHeader("X-User-Id") UUID userId) {
		// 봄날의 서 내용 가져오기 (Chapter 에서)
		// 봄날의 서 댓글 가져오기
		return ResponseEntity.ok(bookService.getBookDetail(userId, book_id));
	}

	@PatchMapping("/likes/{book_id}")
	@Operation(summary = "좋아요 추가/취소", description = "특정 봄날의 서에 좋아요를 추가하거나 취소합니다.")
	public ResponseEntity<String> toggleLike(
			@Parameter(description = "좋아요를 추가/취소할 봄날의 서 ID", example = "1") @PathVariable String book_id,
			@Parameter(description = "좋아요를 누른 사용자 UUID", example = "2c85e3f3-da0a-11ef-bb99-28c5d21f3483") @RequestParam UUID userId) {
		boolean isLiked = bookService.toggleLike(book_id, userId);
		return ResponseEntity.ok(isLiked ? "Liked" : "Unliked");
	}

	@GetMapping("/all/sorted")
	@Operation(summary = "모든 봄날의 서 정렬", description = "모든 봄날의 서를 조회할 때 정렬 기준을 지정합니다.")
	public ResponseEntity<List<BookResponseDto>> getBooksSorted(
			@RequestParam List<String> sortFields,
			@RequestParam(required = false, defaultValue = "desc") List<String> directions) {
		return ResponseEntity.ok(bookService.getBooksSorted(sortFields, directions));
	}

	@GetMapping("/weeklyTop3")
	@Operation(summary = "봄날의 서 주간 랭킹 Top3", description = "봄날의 서 주간 랭킹 Top3를 반환합니다.")
	public ResponseEntity<List<BookResponseDto>> getWeeklyTop3() {
		return ResponseEntity.ok(bookService.getWeeklyTop3());
	}

	@GetMapping("/search")
	@Operation(summary = "봄날의 서 제목 검색 (Elasticsearch)", description = "Elasticsearch에서 책 제목을 검색합니다.")
	public ResponseEntity<List<BookResponseDto>> searchBooks(@RequestParam String keyword) throws IOException {
		return ResponseEntity.ok(bookSearchService.searchByTitle(keyword));
	}
}
