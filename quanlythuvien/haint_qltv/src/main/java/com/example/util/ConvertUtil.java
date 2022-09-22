package com.example.util;

import java.time.LocalDateTime;
import java.util.Date;

public class ConvertUtil {
    public Date convertToDateViaSqlTimestamp(LocalDateTime dateToConvert) {
        return java.sql.Timestamp.valueOf(dateToConvert);
    }
}
