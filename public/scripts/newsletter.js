/* Newsletter sign-up (blog index and article pages).
 *
 * The form used to be onsubmit="return false": a visitor typed their email,
 * tapped Subscribe, and nothing happened and nothing was sent. There is no
 * mailing-list service on the site, so a sign-up goes to the studio inbox
 * through the contact form's endpoint (/api/contact), and the line under the
 * form says what happened. */
;(function () {
  document.querySelectorAll('.news__form').forEach(function (form) {
    var input = form.querySelector('input[type="email"]');
    var button = form.querySelector('button[type="submit"]');
    var note = form.parentElement && form.parentElement.querySelector('.news__fine');
    var original = note ? note.textContent : '';
    var busy = false;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (busy || !input) return;
      if (!input.checkValidity()) { input.reportValidity(); return; }
      busy = true;
      button.disabled = true;
      if (note) note.textContent = 'Signing you up…';

      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Newsletter sign-up',
          email: input.value.trim(),
          message: 'Please add this address to the monthly newsletter. (Sent from the sign-up form on ' + location.pathname + '.)',
          services: ['Newsletter'],
        }),
      })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { return { ok: r.ok, j: j }; }); })
        .then(function (res) {
          if (!res.ok) throw new Error(res.j.error || 'failed');
          form.reset();
          if (note) note.textContent = 'You’re on the list. First email lands next month.';
        })
        .catch(function () {
          if (note) note.textContent = 'That didn’t go through. Please try again, or email info@theemcreativestudio.com.';
          setTimeout(function () { if (note) note.textContent = original; }, 8000);
        })
        .then(function () { busy = false; button.disabled = false; });
    });
  });
})();
