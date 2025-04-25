# syntax=docker/dockerfile:1
FROM varnish:7.6

LABEL maintainer="PloneGov-BR <gov@plone.org.br>" \
      org.label-schema.name="pybr25-site-varnish" \
      org.label-schema.description="PythonBrasil 2025 Varnish image." \
      org.label-schema.vendor="PloneGov-BR"

COPY etc/varnish.vcl /etc/varnish/default.vcl
