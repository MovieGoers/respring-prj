package org.ssafy.respring.domain.user.service;

import jakarta.mail.AuthenticationFailedException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import org.ssafy.respring.domain.image.service.ImageService;
import org.ssafy.respring.domain.image.vo.ImageType;
import org.ssafy.respring.domain.user.dto.request.LoginRequestDto;
import org.ssafy.respring.domain.user.dto.request.PasswordEncryptionResultDto;
import org.ssafy.respring.domain.user.dto.request.SignUpRequestDto;
import org.ssafy.respring.domain.user.mapper.UserMapper;
import org.ssafy.respring.domain.user.repository.SaltRepository;
import org.ssafy.respring.domain.user.repository.UserRepository;
import org.ssafy.respring.domain.user.vo.Salt;
import org.ssafy.respring.domain.user.vo.User;
import org.ssafy.respring.util.OpenCrypt;
import org.ssafy.respring.domain.user.dto.response.LoginResponseDto;

import java.util.*;

@Service
@Transactional
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final SaltRepository saltRepository;
    private final ImageService imageService;
    private final UserMapper userMapper;


    public void addUser(SignUpRequestDto signUpRequestDto) {

        User user = userMapper.dtoToEntity(signUpRequestDto);

        String profileImageUrl = (signUpRequestDto.getImage() != null && !signUpRequestDto.getImage().isEmpty())
                ? imageService.uploadImageToS3(signUpRequestDto.getImage(), "profile")
                : "public/placeholder_profilepic.png"; // 기본 프로필 이미지

        user.setProfileImage(profileImageUrl);

        PasswordEncryptionResultDto encryptionResult = OpenCrypt.encryptPw(signUpRequestDto.getPassword());
        user.changePassword(encryptionResult.getHashedPassword());

        userRepository.save(user);
        saltRepository.save(new Salt(user.getId(), encryptionResult.getSalt()));
    }


    public User findByNickname(String nickname) {
        return userRepository.findByUserNickname(nickname).get();
    }


}




