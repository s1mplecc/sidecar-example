package info.s1mple.author;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
public class AuthorController {

    @Resource
    private BookServiceClient bookServiceClient;

    @GetMapping("/book/{bookId}/author")
    public Author getAuthor(@PathVariable String bookId){
        Book book = bookServiceClient.getBook(bookId);
        return new Author(book.getAuthorId(),"Jack");
    }

}
