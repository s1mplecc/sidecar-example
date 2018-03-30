package nodesidecar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.sidecar.EnableSidecar;

@SpringBootApplication
@EnableSidecar
public class NodeSidecarApplication {

    public static void main(String[] args) {
        SpringApplication.run(NodeSidecarApplication.class, args);
    }
}