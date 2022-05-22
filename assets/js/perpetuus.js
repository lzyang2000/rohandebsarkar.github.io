---
---
{%- if site.enable_umami_analytics -%}
window.addEventListener("load", function() {
    let script = document.createElement('script');
    
    script.src = '{{ site.umami.script }}';
    script.async = true;
    script.defer = true;

    script.setAttribute('data-website-id', '{{ site.umami_analytics }}');
    script.setAttribute('do-not-track', 'true');
    script.setAttribute('data-domains', 'rohandebsarkar.github.io');

    {% if site.umami.integrity %}
    script.integrity = '{{ site.umami.integrity }}';
    script.setAttribute('crossorigin', 'anonymous');
    {% endif %}

    document.body.appendChild(script);
});
{% endif %}
