package info.s1mple.author;

public class Author {

    private String authorId;
    private String authorName;

    public Author() {
    }

    public Author(String authorId, String authorName) {

        this.authorId = authorId;
        this.authorName = authorName;
    }

    public String getAuthorId() {
        return authorId;
    }

    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public String getAuthorName() {
        return authorName;
    }

    public void setAuthorName(String authorName) {
        this.authorName = authorName;
    }
}
