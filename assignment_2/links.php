<?php
/* Header */
$page_title = 'Links';
$navigation = Array(
    'active' => 'Links',
    'items' => Array(
        'Home' => '/WP19/assignment_2/index.php',
        'Links' => '/WP19/assignment_2/links.php',
        'News' => '/WP19/assignment_2/news.php',
        'Future' => '/WP19/assignment_2/future.php'
    )
);
include __DIR__ . '/tpl/head.php';

/* Body */
include __DIR__ . '/tpl/body-start.php';
?>
    <div class="col-md-12">
        <h1>This is the Links page!</h1>
        <button type="button" id="showLinks" class="btn btn-primary">Hide links</button>
        <div id="linkList">
            <ul id="weblist">
                <li><a href="https://google.com" target="_blank">Google</a></li>
                <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
                <li><a href="https://www.kanikeenkortebroekaan.nl/" target="_blank">Kan ik een korte broek aan?</a></li>
                <li><a href="https://www.koalastothemax.com" target="_blank">Useless website</a></li>
            </ul>
        </div>
        <br>
        <h5>Add a website by filling in the form below!</h5>
        <form>
            <div class="form-group">
                <label for="website">Name of the website</label>
                <input type="text" class="form-control" id="website" placeholder="website name">
            </div>
            <div class="form-group">
                <label for="url">URL</label>
                <input type="text" class="form-control" id="url" placeholder="ulr">
            </div>
            <div class="alert alert-danger" id="web-alert" role="alert" style="display: none">
                Not all form fields are filled in!
            </div>
            <button type="button" id="confirm" class="btn btn-primary">Confirm</button>
            <button type="button" id="delete" class="btn btn-primary">Start delete mode</button>
        </form>
    </div>
<?php
include __DIR__ . '/tpl/body-end.php';

/* Footer */
include __DIR__ . '/tpl/footer.php';
?>