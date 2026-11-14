// Váš Instalatér — form sending.
// Each request goes to email (Web3Forms, if a key is set) and to Telegram
// (/api/lead, if configured in Netlify/Cloudflare). It counts as sent if either works.
(function () {
  function post(url, data) {
    return fetch(url, { method: 'POST', headers: { 'Accept': 'application/json' }, body: data })
      .then(function (r) { return r.json().then(function (j) { if (!r.ok || !j.success) throw new Error(); return true; }); });
  }

  document.querySelectorAll('form.js-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = form.querySelector('.form-status');
      var btn = form.querySelector('button[type=submit]');
      var key = form.querySelector('input[name=access_key]').value;
      var data = new FormData(form);
      var jobs = [post('/api/lead', data)];
      if (key) jobs.push(post('https://api.web3forms.com/submit', data));

      btn.disabled = true;
      status.className = 'form-status';
      status.textContent = form.dataset.sending;

      Promise.allSettled(jobs).then(function (results) {
        var ok = results.some(function (r) { return r.status === 'fulfilled'; });
        if (ok) {
          form.reset();
          status.className = 'form-status ok';
          status.textContent = form.dataset.ok;
          if (window.umami) window.umami.track('lead-sent');
        } else {
          status.className = 'form-status err';
          status.textContent = form.dataset.err;
        }
        btn.disabled = false;
      });
    });
  });

  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
