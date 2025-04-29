# syntax=docker/dockerfile:1.9
FROM ubuntu:noble AS builder

ARG PYTHON_VERSION=3.12
ARG PB_VERSION

SHELL ["sh", "-exc"]
ENV DEBIAN_FRONTEND=noninteractive
RUN <<EOT
    buildDeps="build-essential busybox ca-certificates curl git gosu libbz2-dev libffi-dev libjpeg-turbo8-dev libmagic1 libsasl2-dev libldap2-dev libopenjp2-7-dev libpcre3-dev libpq-dev libssl-dev libtiff6 libtiff5-dev libxml2-dev libxslt1-dev python3-setuptools python$PYTHON_VERSION-dev wget zlib1g-dev"
    apt-get update -qy
    apt-get install -qyy \
        -o APT::Install-Recommends=false \
        -o APT::Install-Suggests=false \
        $buildDeps
    busybox --install -s
EOT

COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

ENV UV_LINK_MODE=copy \
    UV_COMPILE_BYTECODE=1 \
    UV_PYTHON_DOWNLOADS=never \
    UV_PYTHON=python$PYTHON_VERSION \
    UV_PROJECT_ENVIRONMENT=/app

# Script used for pre-compilation of po files
COPY /container/compile_mo.py /compile_mo.py

# Copy default structure for a Plone Project
COPY /container/skeleton /app_base

# Install dependencies
RUN --mount=type=cache,target=/root/.cache \
    --mount=type=bind,source=uv.lock,target=uv.lock \
    --mount=type=bind,source=pyproject.toml,target=pyproject.toml \
    uv sync \
        --locked \
        --no-dev \
        --no-group test \
        --group container \
        --no-install-project

COPY . /src
WORKDIR /src

# Install package
RUN --mount=type=cache,target=/root/.cache \
    uv sync \
        --locked \
        --no-dev \
        --no-group test \
        --group container \
        --no-editable

# Move skeleton files to /app
RUN <<EOT
    mv /app_base/* /app
    rm -Rf /app_base
    mv scripts/create_site.py /app/scripts/create_site.py
EOT

# Compile translation files
RUN <<EOT
    /app/bin/python /compile_mo.py
EOT

FROM ubuntu:noble

ARG PYTHON_VERSION=3.12
ARG PB_VERSION

SHELL ["sh", "-exc"]

LABEL maintainer="PloneGov-BR <gov@plone.org.br>" \
      org.label-schema.name="ghcr.io/pythonbrasil/pybr25-site-backend" \
      org.label-schema.description="PythonBrasil 2025 backend image." \
      org.label-schema.vendor="PloneGov-BR"

RUN <<EOT
    set -e
    useradd --system -m -d /app -U -u 500 plone
    runDeps="ca-certificates git libjpeg8 libopenjp2-7 libpq5 libtiff6 libxml2 libxslt1.1 lynx netcat-openbsd python3-setuptools python$PYTHON_VERSION-dev poppler-utils rsync wv busybox gosu libmagic1 make"
    apt-get update
    apt-get -y upgrade
    apt-get install -y --no-install-recommends $runDeps
    apt-get clean -y
    busybox --install -s
    rm -rf /var/lib/apt/lists/* /usr/share/doc
    bash -c 'mkdir -p /data/{filestorage,blobstorage,cache,logs}'
    chown -R 500:500 /data
EOT

# Disable debug mode
ENV DEBUG_MODE=off

# Set chameleon cache directory
ENV CHAMELEON_CACHE=/data/cache

# Disable compilation of po files into mo files (This should be done in the builder image)
ENV zope_i18n_compile_mo_files=

# See <https://hynek.me/articles/docker-signals/>.
STOPSIGNAL SIGINT

# Expose /data as a volume
VOLUME /data

# Expose Zope Port
EXPOSE 8080

# Use /app as the workdir
WORKDIR /app

# Set healthcheck to port 8080
HEALTHCHECK --interval=10s --timeout=5s --start-period=60s CMD [ -n "$LISTEN_PORT" ] || LISTEN_PORT=8080 ; wget -q http://127.0.0.1:"$LISTEN_PORT"/ok -O - | grep OK || exit 1

# Copy /app from builder
COPY --from=builder --chown=500:500 /app /app

RUN <<EOT
    ln -s /data /app/var
    chown -R 500:500 /data
EOT

ENTRYPOINT [ "/app/docker-entrypoint.sh" ]
CMD ["start"]