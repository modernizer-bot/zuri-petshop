package com.turkninja.petshop.api.response.product;

import lombok.Data;

import java.time.LocalDateTime;

/**
 * @author ali turgut bozkurt
 * Created at 7/12/2021
 */

@Data
public class GetCategoryResponse {
    private Long id;
    private String name;
    private String createdBy;
    private String photoUrl;
    private int depth;
    private LocalDateTime createdAt;
    private LocalDateTime revisedAt;
}
