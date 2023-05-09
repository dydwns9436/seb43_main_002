package com.branch.sikgu.exception;

public enum ExceptionCode {
    DUPLICATE_EMAIL("중복된 이메일입니다."),
    INVALID_PASSWORD("잘못된 비밀번호입니다."),
    MEMBER_NOT_FOUND("해당 회원을 찾을 수 없습니다."),
    INVALID_TOKEN("유효한 토큰이 아닙니다.");
    // 예외 메세지 필요하시면 추가하셔도 됩니다.

    private final String message;

    ExceptionCode(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}