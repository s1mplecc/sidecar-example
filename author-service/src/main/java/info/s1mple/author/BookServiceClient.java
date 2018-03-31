package info.s1mple.author;

import org.springframework.cloud.netflix.feign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient("node-sidecar")
public interface BookServiceClient {

    @GetMapping("/book/{bookId}")
    Book getBook(@PathVariable("bookId") String bookId);

}
