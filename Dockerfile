FROM dimaip/docker-neos-alpine:latest
ENV PHP_TIMEZONE=Europe/Moscow
ENV REPOSITORY_URL=https://github.com/psmb/ErmDistr
ENV DONT_PUBLISH_PERSISTENT=1
VOLUME /data/www/Web/_Resources
RUN /provision-neos.sh
