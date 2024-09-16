$(document).ready(function() {
    $.getJSON('/json/fb.feedback.json')
        .done(function(firebaseConfig) {
            firebase.initializeApp(firebaseConfig);
            const database = firebase.database();

            function submitissue() {
                const title = $('.issue-title').val();
                const tag = $('.issue-tag').val();
                const description = $('.issue-description').val();

                if (!title || !description) {
                    return;
                }

                $.getJSON("https://api.ipify.org/?format=json")
                    .done(function(data) {
                        const ip = data.ip;
                        const timestamp = new Date().toISOString();
                        const issueid = Date.now();

                        database.ref('Issues/' + issueid).set({
                            title: title,
                            tag: tag,
                            description: description,
                            ip: ip,
                            timestamp: timestamp,
                            closed: false
                        }).then(function() {
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
                        }).catch(function(error) {
                            console.error('Error', error);
                        });
                    }).fail(function(error) {
                        console.error('Error fetching IP:', error);
                    });
            }

            function showissue() {
                const issues = JSON.parse(localStorage.getItem('issues')) || [];
                const issuelist = $('.issues-list');

                issues.forEach(function(issue) {
                    const issuebutton = $(`
                        <div class="issue-btn">
                            <div class="issue-header">
                                <span class="issue-btn-title">Issue #${issue.id}</span>
                                <span class="issue-status ${issue.closed ? 'closed' : 'open'}">
                                    ${issue.closed ? 'Closed' : 'Open'}
                                </span>
                            </div>
                            <div id="tags-area">
                                <p class="issue-tags">${issue.tag}</p>
                            </div>
                            <div class="issue-footer">
                                <span class="issue-author">Posted By: ${issue.ip}</span>
                                <span class="issue-date">
                                    Created: ${new Date(issue.timestamp).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                    `);
                    issuelist.append(issuebutton);
                });
            }

            $(document).on('click', '.issue-submit', submitissue);
            $(document).ready(showissue);
        })
        .fail(function(error) {
            console.error('Error getting fb:', error);
        });

});
