  fetch('/json/fb.feedback.json')
    .then(response => response.json())
    .then(firebaseConfig => {
      firebase.initializeApp(firebaseConfig);
      const database = firebase.database();

      async function submitissue() {
        const title = document.querySelector('.issue-title').value;
        const tag = document.querySelector('.issue-tag').value;
        const description = document.querySelector('.issue-description').value;
        window.location.reload();

        if (!title || !description) {
          return;
        }

        try {
          const response = await fetch("https://api.ipify.org/?format=json");
          const data = await response.json();
          const ip = data.ip;

          const timestamp = new Date().toISOString();
          const issueid = Date.now();

          await database.ref('Issues/' + issueid).set({
            title: title,
            tag: tag,
            description: description,
            ip: ip,
            timestamp: timestamp,
            closed: false
          });
          console.log('Sent Issue');

          const issueconfigs = {
            id: issueid,
            title: title,
            tag: tag,
            timestamp: timestamp,
            closed: false
          };

          let issues = JSON.parse(localStorage.getItem('issues')) || [];
          issues.push(issueconfigs);
          localStorage.setItem('issues', JSON.stringify(issues));

          window.location.reload();
        } catch (error) {
          console.error('Error', error);
        }
      }

      function showissue() {
        const issuelist = document.querySelector('.issues-list');
        const issues = JSON.parse(localStorage.getItem('issues')) || [];

        issues.forEach(issue => {
          const issueElement = document.createElement('div');
          issueElement.className = 'issue-btn';
          issueElement.innerHTML = `
            <div class="issue-header">
              <span class="issue-btn-title">Issue #${issue.id}</span>
              <span class="issue-status ${issue.closed ? 'closed' : 'open'}">${issue.closed ? 'Closed' : 'Open'}</span>
            </div>
            <div id="tags-area">
              <p class="issue-tags">${issue.tag}</p>
            </div>
            <div class="issue-footer">
              <span class="issue-author">Posted By: ${issue.ip}</span>
              <span class="issue-date">Created: ${new Date(issue.timestamp).toLocaleDateString()}</span>
            </div>
          `;
          issuelist.appendChild(issueElement);
        });
      }

      document.addEventListener('DOMContentLoaded', showissue);
    })
    .catch(error => {
      console.error('Error getting fb:', error);
    });
