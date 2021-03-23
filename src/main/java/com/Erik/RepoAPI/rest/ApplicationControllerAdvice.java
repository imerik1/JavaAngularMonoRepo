package com.Erik.RepoAPI.rest;


import com.Erik.RepoAPI.rest.exception.ApiErrors;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.List;
import java.util.stream.Collectors;

@RestControllerAdvice
@ControllerAdvice
public class ApplicationControllerAdvice {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ApiErrors handleValidationError(MethodArgumentNotValidException ex) {
        BindingResult br = ex.getBindingResult();
        List<String> message = br.getAllErrors().stream().map(
                objectError -> objectError.getDefaultMessage())
                .collect(Collectors.toList());
        return new ApiErrors(message);
    }
}
