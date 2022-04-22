FROM openjdk:16-alpine as build
WORKDIR /workspace/app

COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

RUN sh mvnw install -DskipTests

EXPOSE 8081

CMD ["java", "-jar", "target/demo-0.0.1-SNAPSHOT.jar"]