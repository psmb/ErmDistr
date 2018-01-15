FROM dimaip/docker-neos-alpine:latest

ENV PHP_TIMEZONE=Europe/Moscow
ENV REPOSITORY_URL=https://github.com/sfi-ru/ErmDistr

RUN bash /etc/cont-init.d/00-init-dirs && bash /etc/cont-init.d/10-init-neos
